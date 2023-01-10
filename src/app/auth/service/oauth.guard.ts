import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { appState } from 'src/app/state/app.state';
import { isAuthenticated } from '../login/state/auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private store: Store<appState>, private rotuer: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return this.store.select(isAuthenticated).pipe(
      map((authenticated: any) => {
        debugger;
        if (!authenticated) {
          return this.rotuer.createUrlTree(['login']);
        }
        return true;
      })
    );
  }
}
