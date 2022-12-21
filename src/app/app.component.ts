import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoading } from './shared/shared.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-course';
  showLoading$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.showLoading$ = this.store.select(getLoading);
  }
}
