import { counterReducer } from '../components/state/counter.reducer';
import { CounterState } from '../components/state/counter.state';
import { PostState } from '../posts/state/post.model';
import { postsReducer } from '../posts/state/post.reducer';

export interface appState {
  counter: CounterState;
  posts: PostState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer,
};

//! Si manana tenemos un nuevo state lo pondremos aqui
