import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {

  baseUrl = "https://localhost:5001/api/";
  validationErrors: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  get404Error() {
    this.http.get(this.baseUrl + 'products/42').subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  get500Error() {
    this.http.get(this.baseUrl + 'Bugges/servererror').subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  get400Error() {
    this.http.get(this.baseUrl + 'Bugges/badrequest').subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  get400ValidationError() {
    this.http.get(this.baseUrl + 'products/foryty').subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err) => {
        console.log(err);
        this.validationErrors = err.errors;
      }
    });
  }

}
