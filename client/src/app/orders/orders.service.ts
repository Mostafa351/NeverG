import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../shared/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getOrdersForUser() {
    return this.http.get<IOrder[]>(this.baseUrl + 'orders');
  }
  getOrderDetailed(id: number) {
    return this.http.get<IOrder>(this.baseUrl + 'orders/' + id);
  }
}
