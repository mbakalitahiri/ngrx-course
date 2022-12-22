import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import {
  loginStart,
  loginSuccess,
  signupStart,
  signupSuccess,
} from './auth.actions';
import {
  setErrorMessage,
  setLoadingSpinner,
} from 'src/app/shared/shated.actions';

import { Injectable } from '@angular/core';
import { OauthResponseData } from './../../models/OauthResponseData';
import { OauthService } from './../../service/oauth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

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
    alert('dentro del login effect');
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.oauthService
          .login(action.email, action.password, this.returnSecureToken)
          .pipe(
            map((data: OauthResponseData) => {
              const user = this.oauthService.formatUser(data);
              this.store.dispatch(setLoadingSpinner({ showLoading: false }));
              // this.router.navigate(['/']);
              this.store.dispatch(
                setErrorMessage({
                  errorMessage: '',
                })
              );
              return loginSuccess({ user: user });
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
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );

  signup$ = createEffect(() => {
    alert('dentro del login effect');
    return this.actions$.pipe(
      ofType(signupStart),
      exhaustMap((action) => {
        return this.oauthService
          .signUp(action.email, action.password, this.returnSecureToken)
          .pipe(
            map((data: OauthResponseData) => {
              const user = this.oauthService.formatUser(data);
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
      alert('dendtro signupRedirect$');
      return this.actions$.pipe(
        ofType(signupSuccess),
        tap((action) => {
          this.router.navigate(['/home']);
        })
      );
    },
    { dispatch: false }
  );
}
