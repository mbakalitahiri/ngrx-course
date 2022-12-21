import { AUTH_STATE_NAME } from './login/state/auth.selectors';
import { AuthComponent } from './auth.component';
import { AuthEffects } from './login/state/auth.effects';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './login/state/auth.reducer';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(AUTH_STATE_NAME, authReducer),
    HttpClientModule,
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {}
