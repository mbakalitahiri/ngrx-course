import { Component, OnInit } from '@angular/core';

import { OauthService } from './../../auth/service/oauth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/state/app.state';
import { isAuthenticated } from './../../auth/login/state/auth.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isAuthenticated$!: Observable<boolean>;
  constructor(
    private oauthService: OauthService,
    private store: Store<appState>
  ) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(isAuthenticated);
  }

  onClickSignUp() {
    this.oauthService.onClickSignUp(true);
  }
  onClickLogin() {
    this.oauthService.onClickLogin(false);
  }
}
