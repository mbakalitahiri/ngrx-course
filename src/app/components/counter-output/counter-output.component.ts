import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appState } from 'src/app/state/app.state';

import { getCounter, getDeveloper } from './../state/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  counter!: number;
  developer!: string;
  constructor(private store: Store<appState>) {}

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((data: any) => {
      this.counter = data;
    });

    this.store.select(getDeveloper).subscribe((data: any) => {
      this.developer = data;
    });
  }
}
