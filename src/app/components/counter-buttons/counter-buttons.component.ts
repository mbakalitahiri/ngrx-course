import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  custom,
  decrement, developer, increment,
  reset
} from '../state/counter.actions';
import { CounterState } from './../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent {
  @ViewChild('custom') custom!: ElementRef;
  @ViewChild('developer') developer!: ElementRef;

  constructor(private store: Store<{ counter: CounterState }>) { }
  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onReset() {
    this.store.dispatch(reset());
  }

  onCustom() {
    let value = +this.custom.nativeElement.value;
    this.store.dispatch(custom({ value: value }));
  }

  onClickChangeDeveloper() {
    let value = this.developer.nativeElement.value;
    this.store.dispatch(developer({ developer: value }));
  }
}
