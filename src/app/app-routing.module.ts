import { RouterModule, Routes } from '@angular/router';

import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { SignupComponent } from './auth/signup/signup.component';

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
