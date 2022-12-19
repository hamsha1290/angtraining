import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { UsersService } from './users.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private authService: UsersService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
      if (this.authService.validUserId)
        return true;
        else
         return this.router.createUrlTree(['/']);
    // return this.authService.users.
    //   map(user => {
    //     const isAuth = !!user;
    //     if (isAuth) {
    //       return true;
    //     }
    //   });
  }
}
