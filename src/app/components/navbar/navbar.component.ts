import { Component } from '@angular/core';
import { OauthService } from './../../auth/service/oauth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private oauthService: OauthService) {}
  onClickSignUp() {
    this.oauthService.onClickSignUp(true);
  }
  onClickLogin() {
    this.oauthService.onClickLogin(false);
  }
}
