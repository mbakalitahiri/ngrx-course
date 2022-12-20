import { createReducer, on } from '@ngrx/store';
import { addNewPost, removePost, updatePost } from './post.actions';

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
    // iteramos sobre los post y si el id es igual que el post pasado en las props del action lo retornamos y si no coinciddee el id solo lo retornamos, map nos permite update INMUTABLY
    const lasUpdatedPost = state.postList.map((elem) => {
      return elem.id === action.post.id ? action.post : elem;
    });
    return {
      ...state,
      postList: lasUpdatedPost,
    };
  }),
  on(removePost, (state, action) => {
    const lasUpdatedPost = state.postList.filter((elem) => {
      return elem.id !== action.id.toString();
    });
    return {
      ...state,
      postList: lasUpdatedPost,
    };
  })
);

export function postsReducer(state: any, action: any) {
  return _postReducer(state, action);
}
