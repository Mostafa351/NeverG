import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { ToastrService } from 'ngx-toastr';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent implements OnInit {
  @Input() appStepper: CdkStepper | undefined;
  basket$: Observable<IBasket> | undefined;

  constructor(private basketService: BasketService, private toaster: ToastrService) { }
  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;

  }
  creatPaymentIntent() {
    return this.basketService.creatPaymentIntent().subscribe({
      next: (response: any) => {
        this.appStepper?.next();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }


}
