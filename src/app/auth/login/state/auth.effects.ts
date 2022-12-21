import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { loginStart, loginSuccess } from './auth.actions';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/shared/shated.actions';
import { OauthResponseData } from './../../models/OauthResponseData';
import { OauthService } from './../../service/oauth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private oauthService: OauthService,
    private actions$: Actions,
    private store: Store
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
              return loginSuccess({ user: user });
            })
          );
      })
    );
  });
}
