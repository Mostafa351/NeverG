import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProType } from '../shared/models/proType';
import { ShopParams } from '../shared/models/shopParams';
import { IProduct } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "https://localhost:5001/api/";

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ShopParams) {
    let qParams = new HttpParams();
    if (shopParams.brandId !== 0) {
      qParams = qParams.append("brandId", shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0) {
      qParams = qParams.append("typeId", shopParams.typeId.toString());
    }

    if (shopParams.searchTerm) {
      qParams = qParams.append("search", shopParams.searchTerm);
    }

    qParams = qParams.append("sort", shopParams.sort);
    qParams = qParams.append("pageIndex", shopParams.pageNumber?.toString() ?? "");
    qParams = qParams.append("pageSize", shopParams.pageSize?.toString() ?? "");

    return this.http.get<IPagination>(this.baseUrl + "products", { observe: "response", params: qParams })
      .pipe(
        map(response => {
          return response.body;
        })
      );
  }
  getProduct(id: number | null) {
    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }
  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + "products/brands");
  }
  getTypes() {
    return this.http.get<IProType[]>(this.baseUrl + "products/types");
  }
}
