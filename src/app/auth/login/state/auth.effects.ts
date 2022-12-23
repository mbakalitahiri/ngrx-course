import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import {
  setErrorMessage,
  setLoadingSpinner,
} from 'src/app/shared/shated.actions';
import {
  autoLoginStart,
  loginStart,
  loginSuccess,
  logout,
  signupStart,
  signupSuccess,
} from './auth.actions';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { OauthResponseData } from './../../models/OauthResponseData';
import { OauthService } from './../../service/oauth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private oauthService: OauthService,
    private actions$: Actions,
    private store: Store,
    private router: Router
  ) {}
  returnSecureToken = true;

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.oauthService
          .login(action.email, action.password, this.returnSecureToken)
          .pipe(
            map((data: OauthResponseData) => {
              const user = this.oauthService.formatUser(data);
              this.oauthService.saveUserLocalStorage(user);
              this.store.dispatch(setLoadingSpinner({ showLoading: false }));
              // this.router.navigate(['/']);

              this.store.dispatch(
                setErrorMessage({
                  errorMessage: '',
                })
              );
              this.oauthService.saveUserLocalStorage(user);
              return loginSuccess({ user: user, redirect: true });
            }),
            catchError((error: any) => {
              this.store.dispatch(setLoadingSpinner({ showLoading: false }));

              this.store.dispatch(
                setErrorMessage({ errorMessage: error.error.error.message })
              );
              return of(error);
            })
          );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap((action) => {
          if (action.redirect == true) {
            this.router.navigate(['/']);
          }
        })
      );
    },
    { dispatch: false }
  );

  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signupStart),
      exhaustMap((action) => {
        return this.oauthService
          .signUp(action.email, action.password, this.returnSecureToken)
          .pipe(
            map((data: OauthResponseData) => {
              const user = this.oauthService.formatUser(data);
              this.oauthService.saveUserLocalStorage(user);

              this.store.dispatch(setLoadingSpinner({ showLoading: false }));
              this.store.dispatch(
                setErrorMessage({
                  errorMessage: '',
                })
              );
              return signupSuccess({ user: user });
            }),
            catchError((error: any) => {
              this.store.dispatch(setLoadingSpinner({ showLoading: false }));

              this.store.dispatch(
                setErrorMessage({ errorMessage: error.error.error.message })
              );
              return of(error);
            })
          );
      })
    );
  });

  signupRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(signupSuccess),
        tap((action) => {
          this.router.navigate(['/home']);
        })
      );
    },
    { dispatch: false }
  );

  $autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(autoLoginStart),
      mergeMap((action) => {
        const user = this.oauthService.getUserFromLocalStorage();
        return of(loginSuccess({ user: user, redirect: false }));
      })
    );
  });

  $autoLogout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(logout),
        map((action) => {
          this.oauthService.logout();
          this.router.navigate(['login']);
        })
      );
    },
    { dispatch: false }
  );
}
