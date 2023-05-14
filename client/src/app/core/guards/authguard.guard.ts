import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { IUser } from 'src/app/shared/models/user';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private accountService: AccountService, private router: Router, private activatedRoute: ActivatedRoute) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.accountService.currentUser$.pipe(
      map((user: IUser) => {
        if (user.displayName) {
          return true;
        }
        return this.router.createUrlTree(['/account/login'], { queryParams: { returnUrl: state.url } });
      })

    );
    // x.subscribe({
    //   next: x => {
    //     console.log('x:' + x);
    //   }
    // });

    // if (true) {
    //   console.log(this.accountService.currentUser$.forEach(value => console.log('value:' + value.displayName)));
    // }
  }

}

