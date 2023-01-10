import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, Observable, switchMap } from 'rxjs';

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostService } from '../services/post.service';
import {
  addNewPost,
  addPostSuccess,
  loadPosts,
  loadSuccessPosts,
  removePost,
  removeSuccessPost,
  updatePost,
  updatePostSuccess,
} from './post.actions';

@Injectable({ providedIn: 'root' })
export class PostEffects {
  action$!: Observable<any>;
  constructor(
    private postService: PostService,
    private store: Store,
    private actions$: Actions
  ) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      switchMap((action: any) => {
        return this.postService.getPosts().pipe(
          map((data: any) => {
            return loadSuccessPosts({ posts: data });
          })
        );
      })
    );
  });

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addNewPost),
      mergeMap((action) => {
        return this.postService.addPost(action.post).pipe(
          map((data: any) => {
            const post = { ...action.post, id: data.name };
            return addPostSuccess({ post: post });
          })
        );
      })
    );
  });

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePost),
      switchMap((action) => {
        return this.postService.updatePost(action.post).pipe(
          map((data: any) => {
            return updatePostSuccess({ post: action.post });
          })
        );
      })
    );
  });

  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(removePost),
      switchMap((action) => {
        return this.postService.deletePost(action.id).pipe(
          map((data: any) => {
            return removeSuccessPost({ id: action.id });
          })
        );
      })
    );
  });
}
