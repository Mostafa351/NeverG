import { CheckoutService } from './../checkout.service';
import { BasketService } from 'src/app/basket/basket.service';
import { AfterViewInit, Component, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IBasket } from 'src/app/shared/models/basket';
import { IOrder } from 'src/app/shared/models/order';
import { Router, NavigationExtras } from '@angular/router';
import { async, lastValueFrom } from 'rxjs';

declare var Stripe: any;
// document.addEventListener('')


@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements AfterViewInit, OnDestroy {
  @Input() checkoutForm: FormGroup | undefined;
  @ViewChild("cardNumber", { static: true }) cardNumberElement: ElementRef | undefined;
  @ViewChild("cardExpiry", { static: true }) cardExpiryElement: ElementRef | undefined;
  @ViewChild("cardCvc", { static: true }) cardCvcElement: ElementRef | undefined;
  // some property for strip js and will use any as type cus of that
  stripe: any;
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;
  cardErrors: any;
  cardHandler = this.onChange.bind(this);
  loading = false;
  cardNumberValid = false;
  cardExpiryValid = false;
  cardCvcValid = false;
  //another way
  // cardHandler = (error: any) => {
  //   if (error.error !== undefined) {
  //     this.cardErrors = error.error.message;
  //   } else {
  //     this.cardErrors = null;
  //   }
  // };

  constructor(private basketService: BasketService, private checkoutService: CheckoutService, private toaster: ToastrService, private router: Router) { }

  // so html initialized
  ngAfterViewInit(): void {
    this.stripe = Stripe('pk_test_51NAwf0JGwTJOoZ05IrvWm1d99yeD4Bsw5JiL64ZdVdcU9MSgP9r9Wd4GNgQqYeL0NfLRxD3qvHtbuWdZ1ruYdOof00vY5gxXK2');
    const elements = this.stripe.elements();
    this.cardNumber = elements.create('cardNumber');
    this.cardNumber.mount(this.cardNumberElement?.nativeElement);
    this.cardNumber.addEventListener('change', this.cardHandler);

    this.cardExpiry = elements.create('cardExpiry');
    this.cardExpiry.mount(this.cardExpiryElement?.nativeElement);
    this.cardExpiry.addEventListener('change', this.cardHandler);

    this.cardCvc = elements.create('cardCvc');
    this.cardCvc.mount(this.cardCvcElement?.nativeElement);
    this.cardCvc.addEventListener('change', this.cardHandler);
  }
  ngOnDestroy(): void {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  }

  onChange(event: any) {
    if (event.error !== undefined) {
      this.cardErrors = event.error.message;
    } else {
      this.cardErrors = null;
    }
    switch (event.elementType) {
      case 'cardNumber':
        this.cardNumberValid = event.complete;
        break;
      case 'cardExpiry':
        this.cardExpiryValid = event.complete;
        break;
      case 'cardCvc':
        this.cardCvcValid = event.complete;
        break;
      default:
        break;
    }
  };

  async submitOrder() {
    this.loading = true;
    const basket = this.basketService.getCurrentBasketValue();
    if (basket) {
      try {
        const createdOrder = await this.createOrder(basket);
        const paymentResult = await this.confirmPaymentwithStripe(basket);
        if (paymentResult.paymentIntent) {
          this.basketService.deleteBasket(basket);
          const navigationExtras: NavigationExtras = { state: createdOrder };
          this.router.navigate(['checkout/success'], navigationExtras);
        } else {
          this.toaster.error(paymentResult.error.message);
        }
        this.loading = false;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    }
  }
  private async confirmPaymentwithStripe(basket: any) {
    return this.stripe.confirmCardPayment(basket.clientSecret, {
      payment_method: {
        card: this.cardNumber,
        billing_details: {
          name: this.checkoutForm?.get('paymentForm')?.get('nameOnCard')?.value
        }
      }
    });
  }
  private async createOrder(basket: IBasket) {
    const orderToCreate = this.getOrderToCreate(basket);
    return lastValueFrom(this.checkoutService.creatOrder(orderToCreate));
  }
  private getOrderToCreate(basket: IBasket) {
    return {
      basketId: basket.id,
      deliveryMethodId: +this.checkoutForm?.get('deliveryForm')?.get('deliveryMethod')?.value,
      shipToAddress: this.checkoutForm?.get('addressForm')?.value,
    };
  }

}
