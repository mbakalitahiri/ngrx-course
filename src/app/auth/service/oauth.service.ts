import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OauthResponseData } from './../models/OauthResponseData';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';

@Injectable()
export class OauthService {
  private signUpEmitter = new BehaviorSubject<boolean>(false);
  signUpEmitter$ = this.signUpEmitter.asObservable();

  constructor(private _http: HttpClient, private store: Store) {}

  onClickSignUp(value: boolean) {
    this.signUpEmitter.next(value);
  }

  onClickLogin(value: boolean) {
    this.signUpEmitter.next(false);
  }

  //!signUp
  signUp(
    email: string,
    password: string,
    returnSecureToken: boolean
  ): Observable<OauthResponseData> {
    return this._http.post<OauthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBiUS6r9qoX_L4MvO-v0-BQ2SrADntI2uI',
      { email, password, returnSecureToken }
    );
  }

  formatUser(data: OauthResponseData) {
    const expirationDAte = new Date(
      new Date().getTime() + +data.expiresIn * 1000
    );

    const user = new User(
      data.email,
      data.idToken,
      data.localId,
      expirationDAte
    );
    return user;
  }

  //!signInWithPassword
  login(
    email: string,
    password: string,
    returnSecureToken: boolean
  ): Observable<OauthResponseData> {
    return this._http.post<OauthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBiUS6r9qoX_L4MvO-v0-BQ2SrADntI2uI',
      { email, password, returnSecureToken }
    );
  }
}
