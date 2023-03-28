import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProType } from '../shared/models/proType';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl: string = "https://localhost:5001/api/";
  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get<IPagination>(this.baseUrl + "products?pageSize=10");
  }
  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + "products/brands");
  }
  getTypes() {
    return this.http.get<IProType[]>(this.baseUrl + "products/types");
  }
}
