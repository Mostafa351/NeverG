import { Component, ElementRef, ViewChild } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';
import { IProType } from './../shared/models/proType';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  @ViewChild('sortTerm') sorting: ElementRef | undefined;
  products: IProduct[] | undefined;
  brands: IBrand[] | undefined;
  types: IProType[] | undefined;
  count: number | undefined;
  countPerPage: number | undefined;
  brandIdSelected = 0;
  typeIdSelected = 0;
  sortTerm = "sort";


  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }
  getProducts() {
    this.shopService.getProducts(this.brandIdSelected, this.typeIdSelected, this.sortTerm).subscribe({
      next: (response: IPagination | null) => {
        this.products = response?.data;
        this.count = response?.count;
        this.countPerPage = response?.pageSize;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  getBrands() {
    this.shopService.getBrands().subscribe({
      next: (response: IBrand[]) => {
        this.brands = [{ "id": 0, name: "All" }, ...response];
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  getTypes() {
    this.shopService.getTypes().subscribe({
      next: (response: IProType[]) => {
        this.types = [{ "id": 0, name: "All" }, ...response];
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  onBrandSelected(brandId: number) {
    this.brandIdSelected = brandId;
    this.getProducts();
  }
  onTypeSelected(typeId: number) {
    this.typeIdSelected = typeId;
    this.getProducts();
  }
  onSort(sortTerm: string) {
    // this.sortTerm = sortTerm; or
    this.sortTerm = this.sorting?.nativeElement.value;
    this.getProducts();
  }
}
