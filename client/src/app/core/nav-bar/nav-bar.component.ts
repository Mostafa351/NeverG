import { AccountService } from './../../account/account.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  basket$: Observable<IBasket | null> | null = null;
  crruntUser$: Observable<IUser> | undefined;
  constructor(private basketService: BasketService, private accountService: AccountService) { }
  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.crruntUser$ = this.accountService.currentUser$;
  }
  logout() {
    this.accountService.logout();
  }

}
