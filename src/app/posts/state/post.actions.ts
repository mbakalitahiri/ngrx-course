import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';

export const removePost = createAction('removePost', props<{ id: number }>());
export const addNewPost = createAction('addNewPost', props<{ post: Post }>());
export const updatePost = createAction('updatePost', props<{ post: Post }>());
