import { IUser } from './../shared/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subscription, map, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = "https://localhost:5001/api/";
  // private currentUserSource = new BehaviorSubject<IUser>({ email: "", displayName: "", token: "" });
  private currentUserSource = new ReplaySubject<IUser>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }
  // getCurrentUserValue() {
  //   return this.currentUserSource.value;
  // }

  LoadCurrentUser(token: string) {
    if (token === '') {
      this.currentUserSource.next({ email: "", displayName: "", token: "" });

      return of();
    }
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${token}`);
    return this.http.get<IUser>(this.baseUrl + 'account', { headers }).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem("token", user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }

  login(values: any) {
    return this.http.post<IUser>(this.baseUrl + "account/login", values).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem("token", user.token);
          this.currentUserSource.next(user);
        }
      })
    );

  }
  register(values: any) {
    return this.http.post<IUser>(this.baseUrl + "account/register", values).pipe(
      map((user: IUser) => {
        if (user) {
          localStorage.setItem("token", user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }
  logout() {
    localStorage.removeItem("token");
    this.currentUserSource.next({ email: "", displayName: "", token: "" })
    this.router.navigateByUrl("/");
  }
  checkEmailExists(email: string) {
    return this.http.get(this.baseUrl + "account/emailexists?email=" + email);
  }

}