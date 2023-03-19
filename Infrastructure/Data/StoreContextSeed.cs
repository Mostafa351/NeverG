using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Core.Entities;
using Microsoft.Extensions.Logging;

namespace Infrastructure.Data
{
    public class StoreContextSeed
    {
        public static async Task seedAsync(StoreContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                if (!context.productBrands.Any())
                {
                    var productsData = File.ReadAllText("../Infrastructure/Data/seedData/brands.json");
                    var products = JsonSerializer.Deserialize<List<ProductBrand>>(productsData);
                    foreach (var item in products)
                    {
                        context.productBrands.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
                if (!context.productTypes.Any())
                {
                    var productsData = File.ReadAllText("../Infrastructure/Data/seedData/types.json");
                    var products = JsonSerializer.Deserialize<List<ProductType>>(productsData);
                    foreach (var item in products)
                    {
                        context.productTypes.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
                if (!context.Products.Any())
                {
                    var productsData = File.ReadAllText("../Infrastructure/Data/seedData/products.json");
                    var products = JsonSerializer.Deserialize<List<Product>>(productsData);
                    foreach (var item in products)
                    {
                        context.Products.Add(item);
                    }
                    await context.SaveChangesAsync();
                }

            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<StoreContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}