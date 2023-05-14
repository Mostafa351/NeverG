import { BusyService } from './../services/busy.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, delay, finalize } from "rxjs";

@Injectable()
export class loadingInterceptor implements HttpInterceptor {
  constructor(private busyService: BusyService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('emailExists')) {
      this.busyService.busy();
    }
    return next.handle(req).pipe(
      delay(1000),
      finalize(() => {
        this.busyService.idle();
      })
    );
  }
}