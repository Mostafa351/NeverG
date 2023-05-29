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
  // @ViewChild('sortTerm', { static: false }) sorting: ElementRef | undefined;
  @ViewChild('searchTerm', { static: false }) searchTerm: ElementRef | undefined;
  products: IProduct[] | undefined;
  brands: IBrand[] | undefined;
  types: IProType[] | undefined;
  totalCount: number | undefined;
  shopParams: ShopParams | undefined;
  sortOptions = [
    { name: 'Alphabetical', value: 'name' },
    { name: 'Low Price', value: 'priceAsc' },
    { name: 'High Price', value: 'priceDesc' },
  ];


  constructor(private shopService: ShopService) {
    this.shopParams = this.shopService.getShopParams();
  }

  ngOnInit(): void {
    this.getProducts(true);
    this.getBrands();
    this.getTypes();
  }
  getProducts(useCache = false) {
    this.shopService.getProducts(useCache).subscribe({
      next: (response: IPagination | null) => {
        this.products = response?.data;
        this.totalCount = response?.count;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  getProduct(id: number) {
    this.shopService.getProduct(id).subscribe({

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
    const params = this.shopService.getShopParams();
    params.brandId = brandId;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
  }
  onTypeSelected(typeId: number) {
    const params = this.shopService.getShopParams();
    params.typeId = typeId;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
  }
  onSort(sortTerm: string) {
    const params = this.shopService.getShopParams();
    // this.sortTerm = sortTerm; or
    // params.sort =  this.sorting?.nativeElement.value;
    params.sort = sortTerm;
    this.shopService.setShopParams(params);

    this.getProducts();
  }
  onPageChange(event: any) {
    const params = this.shopService.getShopParams();
    if (params.pageNumber !== event) {
      params.pageNumber = event;
      this.shopService.setShopParams(params);
      this.getProducts(true);
    }
  }
  onSearch() {
    const params = this.shopService.getShopParams();
    params.searchTerm = this.searchTerm?.nativeElement.value;
    params.pageNumber = 1;
    this.shopService.setShopParams(params);
    this.getProducts();
  }
  onReset() {
    if (this.searchTerm?.nativeElement.value !== undefined) {
      this.searchTerm.nativeElement.value = '';
    }
    this.shopParams = new ShopParams();
    this.shopService.setShopParams(this.shopParams);
    this.getProducts();
  }
}
