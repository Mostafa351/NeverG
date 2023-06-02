using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using API.Errors;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Stripe;

namespace API.Controllers
{
    public class PaymentsController : BaseApiController
    {
        private readonly ILogger<PaymentsController> _logger;
        private readonly IPaymentService _paymentService;
        private readonly string _whSecret;


        public PaymentsController(IPaymentService paymentService, ILogger<PaymentsController> logger, IConfiguration config)
        {
            _paymentService = paymentService;
            _logger = logger;
            _whSecret = config.GetSection("StripeSettings:WhSecret").Value;
        }

        [Authorize]
        [HttpPost("{basketId}")]
        public async Task<ActionResult<CustomerBasket>> CreateOrUpdatePaymentIntent(string basketId)
        {

            var basket = await _paymentService.CreateOrUpdatePaymentIntent(basketId);
            if (basket == null)
            {
                return BadRequest(new ApiResponse(400, "Basket Problem"));
            }
            return basket;
        }
        [HttpPost("webhook")]
        public async Task<ActionResult> StripeWebhook()
        {
            // Retrieve the request body as a string

            var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();
            // Retrieve the Stripe-Signature header value from the request
            string stripeSignature = Request.Headers["Stripe-Signature"];

            var stripeEvent = EventUtility.ConstructEvent(json, stripeSignature, _whSecret);

            PaymentIntent intent;
            Order order;

            switch (stripeEvent.Type)
            {
                case "payment_intent.succeeded":
                    intent = (PaymentIntent)stripeEvent.Data.Object;
                    _logger.LogInformation("Payment Succeeded ", intent.Id);
                    order = await _paymentService.UpdateOrderPaymentSucceeded(intent.Id);
                    _logger.LogInformation("Order Updated to Payment Recieved: ", order.Id);
                    break;
                case "payment_intent.payment_failed":
                    intent = (PaymentIntent)stripeEvent.Data.Object;
                    _logger.LogInformation("Payment Failed ", intent.Id);
                    order = await _paymentService.UpdateOrderPaymentFaild(intent.Id);
                    _logger.LogInformation("Payment Faild: ", order.Id);
                    break;
            }
            return new EmptyResult();
        }

    }
}

/*
[HttpPost]
public ActionResult StripeWebhook()
{
    // Retrieve the Stripe-Signature header value from the request
    string stripeSignature = Request.Headers["Stripe-Signature"];

    // Retrieve the request body as a string
    string requestBody;
    using (var reader = new StreamReader(Request.InputStream))
    {
        requestBody = reader.ReadToEnd();
    }

    // Create a new instance of the Stripe WebhookSignature class
    var webhookSignature = new WebhookSignature();

    try
    {
        // Verify the signature of the webhook event using your Stripe webhook secret key
        var stripeEvent = webhookSignature.ConstructEvent(requestBody, stripeSignature, "your_stripe_webhook_secret_key");

        // Handle the Stripe event based on its type
        switch (stripeEvent.Type)
        {
            case "charge.succeeded":
                // Handle charge succeeded event
                break;
            case "charge.failed":
                // Handle charge failed event
                break;
            // Add more cases for other Stripe event types you want to handle
            default:
                // Handle unknown event type
                break;
        }

        return new HttpStatusCodeResult(HttpStatusCode.OK);
    }
    catch (StripeException e)
    {
        // Handle Stripe exception
        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
    }
    catch (Exception e)
    {
        // Handle other exceptions
        return newHttpStatusCode.InternalServerError;
    }
}
*/ 