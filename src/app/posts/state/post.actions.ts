import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';

//! Add post actions
export const ADD_POST_ACTION = '[post page] add post';
export const ADD_POST_SUCCESS = '[post page] add post success';

export const addNewPost = createAction(
  ADD_POST_ACTION,
  props<{ post: Post }>()
);

export const addPostSuccess = createAction(
  ADD_POST_SUCCESS,
  props<{ post: Post }>()
);

//! Update post action
export const UPDATE_POST_ACTION = '[post page] update post';
export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Post }>()
);
export const UPDATE_POST_SUCCESS_ACTION = '[post page] update post success';
export const updatePostSuccess = createAction(
  UPDATE_POST_SUCCESS_ACTION,
  props<{ post: Post }>()
);

//! Delete post action
export const DELETE_POST_ACTION = '[post page] delete post';
export const removePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: string }>()
);

export const DELETE_POST__SUCCESS_ACTION = '[post page] delete post success';
export const removeSuccessPost = createAction(
  DELETE_POST__SUCCESS_ACTION,
  props<{ id: string }>()
);

//! Load post action
export const LOAD_POST_ACTION = '[post page] load post';
export const LOAD_SUCCESS_POST_ACTION = '[post page] load success post';

export const loadPosts = createAction(LOAD_POST_ACTION);

export const loadSuccessPosts = createAction(
  LOAD_SUCCESS_POST_ACTION,
  props<{ posts: Post[] }>()
);
