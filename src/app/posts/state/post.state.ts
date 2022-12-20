import { PostState } from './post.model';

export const initialState: PostState = {
  postList: [
    {
      id: '1',
      title: 'Titulo del post numero 1',
      description: 'Descripcion del post numero 1',
    },
    {
      id: '2',
      title: 'Titulo del post numero 2',
      description: 'Descripcion del post numero 2',
    },
    {
      id: '3',
      title: 'Titulo del post numero 3',
      description: 'Descripcion del post numero 3',
    },
    {
      id: '4',
      title: 'Titulo del post numero 4',
      description: 'Descripcion del post numero 4',
    },
  ],
};
