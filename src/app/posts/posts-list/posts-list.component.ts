import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Store } from '@ngrx/store';
import { getErrorMessage } from 'src/app/shared/shared.selectors';
import { appState } from 'src/app/state/app.state';
import { loadPosts, removePost } from '../state/post.actions';
import { Post } from '../state/post.model';
import { getPosts } from '../state/post.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts$!: Observable<Post[]>;
  error$: any;
  errorMessage$!: Observable<string>;
  constructor(private store: Store<appState>) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.posts$ = this.store.select(getPosts).pipe(
        catchError((error: Error) => {
          this.errorMessage$ = this.store.select(getErrorMessage);
          this.error$ = error;
          return of();
        })
      );
    }, 1000);
    this.store.select(getPosts).subscribe((data: any) => {});
    this.store.dispatch(loadPosts());
  }

  onClickEdit(post: any) {
    console.log(post.id);
  }

  onDelete(post: Post) {
    if (confirm('Are you sure you want to delete this post?')) {
      let id = post.id ? parseInt(post.id) : 0;

      if (id !== undefined && id !== null) {
        this.store.dispatch(removePost({ id: id }));
      }
    }
  }
}
