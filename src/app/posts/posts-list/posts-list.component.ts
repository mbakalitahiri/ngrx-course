import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, Observable, of } from 'rxjs';
import { appState } from 'src/app/state/app.state';
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
  constructor(private store: Store<appState>) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.posts$ = this.store.select(getPosts).pipe(
        catchError((error: Error) => {
          this.error$ = error;
          return of();
        })
      );
    }, 1000);
  }

  onClickEdit(post: any) {
    console.log(post.id);
  }
}
