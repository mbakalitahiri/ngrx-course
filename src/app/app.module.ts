import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgModule, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component';
import { CounterButtonsServiceComponent } from './components/counterSevice/counter-buttons-service/counter-buttons-service.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CounterOutputServiceComponent } from './components/counterSevice/counter-output-service/counter-output-service.component';
import { CounterServiceComponent } from './components/counterSevice/counter-service/counter-service.component';
import { CustomCounterInputComponent } from './components/custom-counter-input/custom-counter-input.component';
import { EffectsModule } from '@ngrx/effects';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OauthService } from './auth/service/oauth.service';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CounterServiceComponent,
    CounterButtonsServiceComponent,
    CounterOutputServiceComponent,
    CustomCounterInputComponent,
    HomeComponent,
    PostsListComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    HttpClientModule,
  ],
  providers: [OauthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
