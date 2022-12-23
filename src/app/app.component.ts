import { Component, OnInit } from '@angular/core';
import { getErrorMessage, getLoading } from './shared/shared.selectors';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { autoLoginStart } from './auth/login/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-course';
  showLoading$!: Observable<boolean>;
  errorMessage$!: Observable<string>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.showLoading$ = this.store.select(getLoading);
    this.errorMessage$ = this.store.select(getErrorMessage);
    this.store.dispatch(autoLoginStart());
  }
}
