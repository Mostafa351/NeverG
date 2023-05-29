using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace API.Helpers
{
    // IAsyncActionFilter allow code to be run before or after specific statges and request 
    // processing pipline
    public class CachedAttribute : Attribute, IAsyncActionFilter
    {
        private readonly int _timeToLiveSeconds;
        public CachedAttribute(int timeToLiveSeconds)
        {
            _timeToLiveSeconds = timeToLiveSeconds;
        }

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var cacheService = context.HttpContext.RequestServices.GetRequiredService<IResponseCacheService>();
            var cacheKey = GenerateCacheKeyFromRequest(context.HttpContext.Request);
            var cacheResponse = await cacheService.GetCachedResponseAsync(cacheKey);
            if (!string.IsNullOrEmpty(cacheResponse))
            {
                var contentResult = new ContentResult
                {
                    Content = cacheResponse,
                    ContentType = "application/json",
                    StatusCode = 200
                };
                context.Result = contentResult;
                return;
            }
            var executedConext = await next();
            if (executedConext.Result is OkObjectResult okObjectResult)
            {
                await cacheService.CachResponseAsync(cacheKey, okObjectResult.Value, TimeSpan.FromSeconds(_timeToLiveSeconds));
            }
        }

        private string GenerateCacheKeyFromRequest(HttpRequest request)
        {
            var keyBuilder = new StringBuilder();
            // Append the request method and path to the cache key
            keyBuilder.Append(request.Method);
            keyBuilder.Append(":");
            keyBuilder.Append($"{request.Path}");
            if (request.Query.Any())
            {
                foreach (var (key, value) in request.Query.OrderBy(x => x.Key))
                {
                    keyBuilder.Append($"|{key}-{value}");
                }
            }

            #region another way to Append any query string parameters to the cache key
            // Append any query string parameters to the cache key
            // if (request.QueryString.HasValue)
            // {
            //     keyBuilder.Append("?");
            //     keyBuilder.Append(request.QueryString.Value);
            // }

            // Append any headers that affect cacheability to the cache key
            // var cacheableHeaders = new[] { "Accept", "Accept-Encoding", "Authorization" };
            // foreach (var header in request.Headers)
            // {
            //     if (cacheableHeaders.Contains(header.Key))
            //     {
            //         keyBuilder.Append(":");
            //         keyBuilder.Append(header.Key);
            //         keyBuilder.Append("=");
            //         keyBuilder.Append(header.Value);
            //     }
            // }

            // another way to Append any query string parameters to the cache key
            // if (request.Query.Any())
            // {
            //     keyBuilder.Append("?");
            //     foreach (var queryParam in request.Query.OrderBy(q => q.Key))
            //     {
            //         keyBuilder.Append(queryParam.Key);
            //         keyBuilder.Append("=");
            //         keyBuilder.Append(queryParam.Value);
            //         keyBuilder.Append("&");
            //     }
            //     keyBuilder.Length--; // Remove the trailing "&"
            // }
            #endregion

            return keyBuilder.ToString();
        }
    }
}