import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginStart, signupStart } from './state/auth.actions';

import { OauthService } from './../service/oauth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from 'src/app/environments/environment';
import { getErrorMessage } from 'src/app/shared/shared.selectors';
import { setLoadingSpinner } from 'src/app/shared/shated.actions';

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
  errorMessage$!: Observable<string>;

  isLoginForm: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private oautService: OauthService,
    private store: Store,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });
    this.errorMessage$ = this.store.select(getErrorMessage);
  }

  onSignup() {
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;
    let returnSecureToken = true;
    this.store.dispatch(signupStart({ email, password }));
  }

  onLogin() {
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;

    let returnSecureToken = true;
    this.store.dispatch(loginStart({ email, password }));

    this.store.dispatch(
      setLoadingSpinner({
        showLoading: true,
      })
    );
  }
}
