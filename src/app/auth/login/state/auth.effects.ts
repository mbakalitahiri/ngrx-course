import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { loginStart, loginSuccess } from './auth.actions';

import { Injectable } from '@angular/core';
import { OauthService } from './../../service/oauth.service';

@Injectable()
export class AuthEffects {
  constructor(private oauthService: OauthService, private actions$: Actions) {}
  returnSecureToken = true;

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.oauthService
          .signUp(action.email, action.password, this.returnSecureToken)
          .pipe(
            map((data) => {
              console.log(data);
              return loginSuccess();
            })
          );
      })
    );
  });
}
