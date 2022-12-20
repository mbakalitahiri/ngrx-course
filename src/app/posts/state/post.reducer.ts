import { createReducer, on } from '@ngrx/store';
import { addNewPost, updatePost } from './post.actions';

import { initialState } from './post.state';

export const _postReducer = createReducer(
  initialState,

  on(addNewPost, (state, action) => {
    let longitud = state.postList.length;
    let post = { ...action.post };
    longitud = longitud + 1;
    post.id = longitud.toString();

    return {
      ...state,
      postList: [...state.postList, post],
    };
  }),
  on(updatePost, (state, action) => {
    const lasUpdatedPost = state.postList.map((elem) => {
      return elem.id === action.post.id ? action.post : elem;
    });
    console.log(lasUpdatedPost);
    return {
      ...state,
      postList: lasUpdatedPost,
    };
  })
);

export function postsReducer(state: any, action: any) {
  return _postReducer(state, action);
}
