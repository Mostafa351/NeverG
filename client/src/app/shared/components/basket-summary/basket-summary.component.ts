import { BasketService } from './../../../basket/basket.service';
import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from '../../models/basket';
import { IOrderItem } from '../../models/order';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  basket$: Observable<IBasket> | undefined;
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Input() isBasket = true;
  // these 2 properties if i want to use summary component
  // @Input() items: IBasketItem[] | IOrderItem[] = [];
  // @Input() isOrder = false;

  constructor(private basketService: BasketService) { }
  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  dncrementItemQuantity(item: IBasketItem) {
    this.decrement.emit(item);
  }
  incrementItemQuantity(item: IBasketItem) {
    this.increment.emit(item);
  }
  removeBasketItem(item: IBasketItem) {
    this.remove.emit(item);
  }

}
