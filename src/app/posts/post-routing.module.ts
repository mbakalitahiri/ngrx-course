import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    children: [
      { path: 'new', component: NewComponent },
      { path: 'edit/:id', component: EditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
