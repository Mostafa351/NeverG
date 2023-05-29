import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Friday Mart';
  constructor(private basketService: BasketService, private accountService: AccountService) { }
  ngOnInit(): void {
    this.LoadBasket();
    this.loadCurrentUser();
  }
  loadCurrentUser() {
    const token = localStorage.getItem("token");
    if (token) {
      this.accountService.LoadCurrentUser(token).subscribe({
        next: (value) => {
          // console.log("value: " + value);
        },
        error: (error) => {
          console.error(error);
        }
      });
    } else {
      this.accountService.LoadCurrentUser('');
    }
  }
  LoadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe({
        next: () => {
          console.log('initialised');
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
}


