import { PostState } from './post.model';

export const initialState: PostState = {
  postList: [
    {
      id: '1',
      title: 'Titulo del post numero 1',
      description: 'Descripcion del post numero 1',
    },
  ],
};
