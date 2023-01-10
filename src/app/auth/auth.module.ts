import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { OauthService } from './service/oauth.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    // StoreModule.forFeature(AUTH_STATE_NAME, authReducer),
    HttpClientModule,
    EffectsModule.forFeature(),
  ],
  providers: [OauthService],
})
export class AuthModule {}
