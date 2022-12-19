import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post, PostState } from './post.model';

export const getPostState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostState, (state) => {
  return state.postList;
});

export const getPostById = createSelector(
  getPostState,
  (state: { postList: any[] }, props: any) => {
    return state.postList.find((element: Post) => {
      return element.id === props.id;
    });
  }
);

export const getDeveloperState = createFeatureSelector<PostState>('developer');

// export const getDeveloper = createSelector(getCounterState, (state) => {
//   return state.developer;
// });
