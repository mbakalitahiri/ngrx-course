import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../state/post.model';

export interface prePost {
  id?: string;
  title: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class PostService {
  data: prePost[] = [];

  constructor(private _http: HttpClient) {}

  getPosts(): Observable<any> {
    return this._http
      .get(
        'https://autenticacion-82c64-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((values: any) => {
          for (const key in values) {
            let post = {
              id: key,
              title: values?.[key].title,
              description: values?.[key].description,
            };
            this.data.push(post);
          }
          return this.data;
        })
      );
  }

  addPost(post: Post) {
    return this._http.post(
      'https://autenticacion-82c64-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      post
    );
  }

  updatePost(post: Post) {
    const id = String(post.id);
    const postData = {
      [id]: { title: post.title, description: post.description },
    };
    return this._http.patch(
      'https://autenticacion-82c64-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      postData
    );
  }

  deletePost(id: string) {
    return this._http.delete(
      `https://autenticacion-82c64-default-rtdb.europe-west1.firebasedatabase.app/posts/${id}.json`
    );
  }
}
