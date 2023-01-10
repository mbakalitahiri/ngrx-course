import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AuthGuard } from './auth/service/oauth.guard';
import { SignupComponent } from './auth/signup/signup.component';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'signup', component: SignupComponent },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/post.module').then((m) => m.PostModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
