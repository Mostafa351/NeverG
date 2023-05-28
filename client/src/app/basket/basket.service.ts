import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Basket, IBasket, IBasketItem, IBasketTotals } from '../shared/models/basket';
import { IProduct } from '../shared/models/product';
import { IDeliveryMethod } from '../shared/models/deliveryMethod';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  baseUrl = "https://localhost:5001/api/";
  private basketSource = new BehaviorSubject<IBasket>(new Basket());
  basket$ = this.basketSource.asObservable();
  private basketTotalSource = new BehaviorSubject<IBasketTotals | null>(null);
  basketTotal$ = this.basketTotalSource.asObservable();
  shipping = 0;

  constructor(private http: HttpClient) { }

  creatPaymentIntent() {
    return this.http.post<IBasket>(this.baseUrl + "payments/" + this.getCurrentBasketValue().id, {})
      .pipe(
        map((basket: IBasket) => {
          this.basketSource.next(basket);
        })
      );
  }
  setShippingPrice(deliveryMethod: IDeliveryMethod) {
    this.shipping = deliveryMethod.price;
    const basket = this.getCurrentBasketValue();
    basket.deliveryMethodId = deliveryMethod.id;
    basket.shippingPrice = deliveryMethod.price;
    this.calculateTotals();
    this.setBasket(basket);
  }

  getBasket(id: string) {
    return this.http.get<IBasket>(this.baseUrl + "basket?id=" + id)
      .pipe(
        map((basket: IBasket) => {
          this.basketSource.next(basket);
          this.shipping = basket.shippingPrice ?? 0;
          this.calculateTotals();
        })
      );
  }
  setBasket(basket: IBasket) {
    return this.http.post<IBasket>(this.baseUrl + "basket", basket).subscribe(
      {
        next: (response: IBasket) => {
          this.basketSource.next(response);
          this.calculateTotals();
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }
  getCurrentBasketValue() {
    localStorage.setItem('basket_id', this.basketSource.value.id);
    return this.basketSource.value;
  }
  addItemToBasket(item: IProduct, quantity = 1) {
    const itemToAdd: IBasketItem = this.mapProductItemToBasketItem(item, quantity);
    const basket = this.getCurrentBasketValue() ?? this.createBasket();
    basket.items = this.addOrUpdateItems(basket.items, itemToAdd, quantity);
    this.setBasket(basket);
  }

  incrementItemQuantity(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    if (basket.items) {
      const foundIndex = basket.items.findIndex(x => x.id === item.id);
      basket.items[foundIndex].quantity++;
    }
    this.setBasket(basket);
  }
  dncrementItemQuantity(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    if (basket.items) {
      const foundIndex = basket.items.findIndex(x => x.id === item.id);
      if (basket.items[foundIndex].quantity > 1) {
        basket.items[foundIndex].quantity--;
        this.setBasket(basket);
      } else {
        this.removeItemFromBasket(item);

      }
    }

  }
  removeItemFromBasket(item: IBasketItem) {
    const basket = this.getCurrentBasketValue();
    if (basket.items && basket.items.some(x => x.id === item.id)) {
      basket.items = basket.items.filter(i => i.id !== item.id);
      if (basket.items.length > 0) {
        this.setBasket(basket);
      } else {
        this.deleteBasket(basket);
      }
    }
  }

  deleteLocalBasket(id: string) {
    this.basketSource.next(new Basket());
    this.basketTotalSource.next(null);
    localStorage.removeItem('basket_id');
  }

  deleteBasket(basket: IBasket) {
    this.http.delete(this.baseUrl + 'basket?id=' + basket.id).subscribe({
      next: () => {
        this.basketSource.next(new Basket());
        this.basketTotalSource.next(null);
        localStorage.removeItem('basket_id');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  private calculateTotals() {
    const basket = this.getCurrentBasketValue();
    const shipping = this.shipping;
    let subTotal = 0;
    if (basket.items) {
      subTotal = basket.items.reduce((a, b) => (b.price * b.quantity) + a, 0);
    }
    const total = subTotal + shipping;
    this.basketTotalSource.next({ shipping, total, subTotal });
  }


  private addOrUpdateItems(items: IBasketItem[] | undefined, itemToAdd: IBasketItem, quantity: number): IBasketItem[] | undefined {
    // console.log(items);

    const index = items?.findIndex(i => i.id === itemToAdd.id);
    if (index === -1) {
      itemToAdd.quantity = quantity;
      items?.push(itemToAdd);
    } else if (items && index !== undefined) {
      items[index].quantity += quantity;
    }
    else {
      console.log("some errors happend");
    }
    return items;
  }
  private createBasket(): IBasket {
    const basket = new Basket();
    localStorage.setItem('basket_id', basket.id);
    console.log(basket.id);
    return basket;
  }
  mapProductItemToBasketItem(item: IProduct, quantity: number): IBasketItem {
    return {
      id: item.id,
      productName: item.name,
      price: item.price,
      pictureUrl: item.pictureUrl,
      quantity,
      brand: item.productBrand,
      type: item.productType
    }
  }
}
