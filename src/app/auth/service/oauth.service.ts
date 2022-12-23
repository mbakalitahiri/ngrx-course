import { BehaviorSubject, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from '../login/state/auth.actions';
import { User } from '../models/user.model';
import { OauthResponseData } from './../models/OauthResponseData';

@Injectable()
export class OauthService {
  timeoutInteval: any;

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

  //!save user in local sorage
  saveUserLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));
    //!We have to crear a timer in order to autologin and logout when the token has expired
    const todaysDAte = new Date().getTime();
    const expirationDate = user.expirationDate.getTime();
    const timeInterval = +expirationDate - todaysDAte;

    console.log(`_expirationDate: ${timeInterval}`);

    this.timeoutInteval = setTimeout(() => {
      //logout functionality or get refresh token
    }, timeInterval);
  }

  setUserInLocalStorage(user: User) {
    debugger;
    localStorage.setItem('userData', JSON.stringify(user));

    this.runTimeoutInterval(user);
  }

  runTimeoutInterval(user: User) {
    const todaysDAte = new Date().getTime();
    const timeInterval = +user.expirationDate - todaysDAte;

    console.log(`_expirationDate: ${timeInterval}`);

    this.timeoutInteval = setTimeout(() => {
      //logout functionality or get refresh token
      this.store.dispatch(logout());
    }, timeInterval);
  }

  getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      let expirationDate = +new Date(userData._expirationDate).getTime();
      var date = new Date(expirationDate);
      const user = new User(
        userData._email,
        userData.token,
        userData.localId,
        date
      );

      this.runTimeoutInterval(user);
      return user;
    } else {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('userData');
    if (this.timeoutInteval) {
      clearTimeout(this.timeoutInteval);
      this.timeoutInteval = null;
    }
  }
}
