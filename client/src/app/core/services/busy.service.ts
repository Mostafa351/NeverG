import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'node_modules\\ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;
  constructor(private spinner: NgxSpinnerService) { }

  busy() {
    this.busyRequestCount++;
    this.spinner.show('', {
      type: "line-scale-party",
      bdColor: "rgba(255, 255, 255, 0.5)",
      color: "#333333",
      template:
        "<img src='https://media.giphy.com/media/o8igknyuKs6aY/giphy.gif' />",
    });
  }
  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinner.hide();
    }
  }
}
