import { Component } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  product?: IProduct;

  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute, private bcService: BreadcrumbService) { }

  ngOnInit(): void {
    this.loadProduct();
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
