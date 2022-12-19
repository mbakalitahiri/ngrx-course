import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';

export const removePost = createAction('removePost');
export const addNewPost = createAction('addNewPost', props<{ post: Post }>());
export const updatePost = createAction('updatePost', props<{ post: Post }>());

// export const reset = createAction('reset');
// export const custom = createAction('custom', props<{ value: number }>());
