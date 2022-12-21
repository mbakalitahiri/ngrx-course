import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { loginStart, loginSuccess } from './auth.actions';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  setErrorMessage,
  setLoadingSpinner,
} from 'src/app/shared/shated.actions';
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
              this.store.dispatch(setLoadingSpinner({ showLoading: false }));
              this.router.navigate(['posts']);
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
}
