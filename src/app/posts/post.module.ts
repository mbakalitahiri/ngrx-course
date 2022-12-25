import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { PostRoutingModule } from './post-routing.module';
import { PostService } from './services/post.service';
import { PostEffects } from './state/post.effects';
import { postsReducer } from './state/post.reducer';

@NgModule({
  declarations: [NewComponent, EditComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('postList', postsReducer),
    EffectsModule.forFeature([PostEffects]),
  ],
  providers: [PostService],
})
export class PostModule {}
