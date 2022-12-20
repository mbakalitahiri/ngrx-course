import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { PostRoutingModule } from './post-routing.module';
import { postsReducer } from './state/post.reducer';

@NgModule({
  declarations: [NewComponent, EditComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('postList', postsReducer),
  ],
})
export class PostModule {}
