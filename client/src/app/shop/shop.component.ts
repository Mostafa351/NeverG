import { Component } from '@angular/core';
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
  count: number = 0; countPerPage: number = 0;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getProducts().subscribe((response: IPagination) => {
      this.products = response.data;
      this.count = response.count;
      this.countPerPage = response.pageSize;
    }, error => {
      console.log(error);
    });

  }
}
