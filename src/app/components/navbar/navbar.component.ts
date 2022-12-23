import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/auth/login/state/auth.actions';
import { appState } from 'src/app/state/app.state';
import { isAuthenticated } from './../../auth/login/state/auth.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated$!: Observable<boolean>;
  constructor(private store: Store<appState>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(isAuthenticated);
  }

  onLogout() {
    this.store.dispatch(logout());
  }
}
