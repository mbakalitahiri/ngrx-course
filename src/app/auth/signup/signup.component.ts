import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { appState } from 'src/app/state/app.state';
import { setLoadingSpinner } from './../../shared/shated.actions';
import { signupStart } from './../login/state/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<appState>
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    let values = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    };
    this.store.dispatch(setLoadingSpinner({ showLoading: true }));
    this.store.dispatch(signupStart(values));
  }
}
