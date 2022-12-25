import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../state/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private _http: HttpClient) {}

  getPosts(): Observable<any> {
    return this._http
      .get(
        'https://autenticacion-82c64-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((values: any) => {
          const post: Post[] = [];

          for (let val in values) {
            post.push(values[val]);
          }

          return post;
        })
      );
  }

  addPost(post: Post) {
    return this._http.post(
      'https://autenticacion-82c64-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      post
    );
  }
}
