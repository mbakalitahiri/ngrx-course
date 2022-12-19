import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/post.module').then((m) => m.PostModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
