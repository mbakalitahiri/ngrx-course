import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { OauthService } from './../service/oauth.service';
import { Store } from '@ngrx/store';
import { environment } from 'src/app/environments/environment';
import { loginStart } from './state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  baseUrlApi = environment.baseUrlApi;
  api_key = environment.api_key;
  isSigup$ = this.oautService.signUpEmitter$;

  isLoginForm: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private _http: HttpClient,
    private oautService: OauthService,
    private store: Store
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  onSignup() {
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;
    let returnSecureToken = true;
    this.store.dispatch(loginStart({ email, password }));
    // this.oautService.signUp(email, password, returnSecureToken);
  }

  onLogin() {
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;
    let returnSecureToken = true;
    this.oautService.login(email, password, returnSecureToken);
  }
}
