import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IProType } from '../shared/models/proType';
import { ShopParams } from '../shared/models/shopParams';
import { IProduct } from '../shared/models/product';
import { Pagination } from '../shared/models/pagination';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = "https://localhost:5001/api/";
  products: IProduct[] | undefined = [];
  brands: IBrand[] | undefined = [];
  types: IProType[] | undefined = [];
  pagination = new Pagination();
  shopParams = new ShopParams();
  productCache = new Map();

  constructor(private http: HttpClient) { }

  getProducts(useCache: boolean) {
    if (useCache === false) {
      this.productCache = new Map();
    }
    if (this.productCache.size > 0 && useCache === true) {
      if (this.productCache.has(Object.values(this.shopParams).join('-'))) {
        this.pagination.data = this.productCache.get(Object.values(this.shopParams).join('-'));
        return of(this.pagination);
      }
    }
    let qParams = new HttpParams();
    if (this.shopParams.brandId !== 0) {
      qParams = qParams.append("brandId", this.shopParams.brandId.toString());
    }

    if (this.shopParams.typeId !== 0) {
      qParams = qParams.append("typeId", this.shopParams.typeId.toString());
    }

    if (this.shopParams.searchTerm) {
      qParams = qParams.append("search", this.shopParams.searchTerm);
    }

    qParams = qParams.append("sort", this.shopParams.sort);
    qParams = qParams.append("pageIndex", this.shopParams.pageNumber?.toString() ?? "");
    qParams = qParams.append("pageSize", this.shopParams.pageSize?.toString() ?? "");

    return this.http.get<IPagination>(this.baseUrl + "products", { observe: "response", params: qParams })
      .pipe(
        map(response => {
          // Append new results to the products
          // this.products = [...this.products ?? [], ...response.body?.data ?? []];
          this.productCache.set(Object.values(this.shopParams).join('-'), response.body?.data);
          if (response.body !== null)
            this.pagination = response.body;
          return this.pagination;
        })
      );
  }
  setShopParams(params: ShopParams) {
    this.shopParams = params;
  }
  getShopParams() {
    return this.shopParams;
  }
  getProduct(id: number | null) {
    let product: IProduct | undefined;
    this.productCache.forEach((products: IProduct[]) => {
      product = products.find(p => p.id === id);
    });

    if (product) {
      return of(product);
    }
    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }
  getBrands() {
    if (this.brands !== undefined) {
      if (this.brands.length > 0) {
        return of(this.brands);
      }
    }
    return this.http.get<IBrand[]>(this.baseUrl + "products/brands").pipe(
      map(response => {
        if (this.brands !== undefined)
          this.brands = response;
        return response;
      })
    );
  }
  getTypes() {
    if (this.types !== undefined) {
      if (this.types.length > 0) {
        return of(this.types);
      }
    }
    return this.http.get<IProType[]>(this.baseUrl + "products/types").pipe(
      map(response => {
        if (this.types !== undefined)
          this.types = response;
        return response;
      })
    );
  }
}
