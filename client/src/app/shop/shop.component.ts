import { IProType } from './../shared/models/proType';
import { Component } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  products: IProduct[] | undefined;
  brands: IBrand[] | undefined;
  types: IProType[] | undefined;
  count: number = 0; countPerPage: number = 0;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }
  getProducts() {
    this.shopService.getProducts().subscribe((response: IPagination) => {
      this.products = response.data;
      this.count = response.count;
      this.countPerPage = response.pageSize;
    }, error => {
      console.log(error);
    });
  }
  getBrands() {
    this.shopService.getBrands().subscribe((response: IBrand[]) => {
      this.brands = response;

    }, error => {
      console.log(error);
    });
  }
  getTypes() {
    this.shopService.getTypes().subscribe((response: IProType[]) => {
      this.types = response;
    }, error => {
      console.log(error);
    });
  }
}
