import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasketTotals } from '../../models/basket';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  // we can use input properties instead of observable
  basketTotal$: Observable<IBasketTotals | null> | undefined;
  // here is the inputs that we need
  // @Input() shippingPrice = 0;
  // @Input() subtotal = 0;
  // @Input() total = 0;

  constructor(private basketService: BasketService) { }
  ngOnInit(): void {
    // if we used input props we no longer need the observable
    this.basketTotal$ = this.basketService.basketTotal$;
  }
}
