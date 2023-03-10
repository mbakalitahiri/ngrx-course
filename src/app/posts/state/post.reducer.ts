import { createReducer, on } from '@ngrx/store';
import {
  addNewPost,
  addPostSuccess,
  loadSuccessPosts,
  removePost,
  removeSuccessPost,
  updatePost,
  updatePostSuccess,
} from './post.actions';

import { initialState } from './post.state';

export const _postReducer = createReducer(
  initialState,

  on(addNewPost, (state, action) => {
    // let longitud = state.postList.length;
    let post = { ...action.post };
    // longitud = longitud + 1;

    console.log(action.post);
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
  on(updatePostSuccess, (state, action) => {
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
  }),
  on(removeSuccessPost, (state, action) => {
    const lasUpdatedPost = state.postList.filter((elem) => {
      return elem.id !== action.id.toString();
    });
    return {
      ...state,
      postList: lasUpdatedPost,
    };
  }),
  on(loadSuccessPosts, (state, action) => {
    return {
      ...state,
      postList: action.posts,
    };
  }),
  on(addPostSuccess, (state, action) => {
    return {
      ...state,
      post: action.post,
    };
  })
);

export function postsReducer(state: any, action: any) {
  return _postReducer(state, action);
}
