import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CounterComponent } from './components/counter/counter.component';
import { CounterButtonsServiceComponent } from './components/counterSevice/counter-buttons-service/counter-buttons-service.component';
import { CounterOutputServiceComponent } from './components/counterSevice/counter-output-service/counter-output-service.component';
import { CounterServiceComponent } from './components/counterSevice/counter-service/counter-service.component';
import { CustomCounterInputComponent } from './components/custom-counter-input/custom-counter-input.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { appReducer } from './state/app.state';

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
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducer),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
