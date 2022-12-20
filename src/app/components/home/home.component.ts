import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getPosts } from 'src/app/posts/state/post.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(getPosts).subscribe((data: any) => {
      console.log(data);
    });
  }
}
