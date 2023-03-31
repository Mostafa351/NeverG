import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProType } from '../shared/models/proType';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "https://localhost:5001/api/";

  constructor(private http: HttpClient) { }

  getProducts(brandId?: number, typeId?: number, sort?: string) {
    let qParams = new HttpParams();
    if (brandId) {
      qParams = qParams.append("brandId", brandId.toString());
    }
    if (typeId) {
      qParams = qParams.append("typeId", typeId.toString());
    }
    if (sort) {
      qParams = qParams.append("sort", sort);
    }
    return this.http.get<IPagination>(this.baseUrl + "products", { observe: "response", params: qParams })
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }
  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + "products/brands");
  }
  getTypes() {
    return this.http.get<IProType[]>(this.baseUrl + "products/types");
  }
}
