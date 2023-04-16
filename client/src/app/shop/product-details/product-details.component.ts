import { Component } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';
import { BasketService } from 'src/app/basket/basket.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product?: IProduct;
  quantity = 1;

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute, private bcService: BreadcrumbService, private basketService: BasketService) {
    this.bcService.set('@productDetails', ' ');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  addItemToBasket() {
    if (this.product) {
      this.basketService.addItemToBasket(this.product, this.quantity);
    }
  }
  incrementQuantity() {
    this.quantity++;
  }
  dncrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }


  loadProduct() {
    const id = this.activatedRoute.snapshot.paramMap?.get('id');
    if (id) {
      // use the id value
      this.shopService.getProduct(+id).subscribe({
        next: (product: IProduct) => {
          this.product = product;
          this.bcService.set('@productDetails', product.name);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
