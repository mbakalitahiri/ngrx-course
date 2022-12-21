import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OauthService {
  private signUpEmitter = new BehaviorSubject<boolean>(false);
  signUpEmitter$ = this.signUpEmitter.asObservable();

  constructor(private _http: HttpClient) {}

  onClickSignUp(value: boolean) {
    this.signUpEmitter.next(value);
  }

  onClickLogin(value: boolean) {
    this.signUpEmitter.next(false);
  }

  signUp(email: string, password: string, returnSecureToken: boolean) {
    return this._http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBiUS6r9qoX_L4MvO-v0-BQ2SrADntI2uI',
      { email, password, returnSecureToken }
    );
  }
}
