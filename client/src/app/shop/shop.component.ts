import { Component, ElementRef, ViewChild } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';
import { IProType } from './../shared/models/proType';
import { ShopParams } from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  @ViewChild('sortTerm', { static: false }) sorting: ElementRef | undefined;
  @ViewChild('searchTerm', { static: false }) searchTerm: ElementRef | undefined;
  products: IProduct[] | undefined;
  brands: IBrand[] | undefined;
  types: IProType[] | undefined;
  totalCount: number | undefined;
  shopParams = new ShopParams();


  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }
  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe({
      next: (response: IPagination | null) => {
        this.products = response?.data;
        this.shopParams.pageNumber = response?.pageIndex;
        this.shopParams.pageSize = response?.pageSize;
        this.totalCount = response?.count;
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
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onSort(sortTerm: string) {
    // this.sortTerm = sortTerm; or
    this.shopParams.sort = this.sorting?.nativeElement.value;
    this.getProducts();
  }
  onPageChange(event: any) {
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }
  onSearch() {
    this.shopParams.searchTerm = this.searchTerm?.nativeElement.value;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }
  onReset() {
    if (this.searchTerm?.nativeElement.value !== undefined) {
      this.searchTerm.nativeElement.value = '';
      this.shopParams = new ShopParams();
    }
    this.getProducts();
  }
}
