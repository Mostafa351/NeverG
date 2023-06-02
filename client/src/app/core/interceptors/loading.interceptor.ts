import { BusyService } from './../services/busy.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, finalize } from "rxjs";

@Injectable()
export class loadingInterceptor implements HttpInterceptor {
  constructor(private busyService: BusyService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'POST' && req.url.includes('orders')) {
      return next.handle(req);
    }
    if (req.method === 'DELETE') {
      return next.handle(req);
    }
    if (req.url.includes('emailExists')) {
      return next.handle(req);
    }
    this.busyService.busy();
    return next.handle(req).pipe(
      finalize(() => {
        this.busyService.idle();
      })
    );
  }
}