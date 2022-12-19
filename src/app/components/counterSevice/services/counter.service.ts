import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter = 0;
  private counterSubject = new BehaviorSubject<number>(this.counter);
  counterSubject$ = this.counterSubject.asObservable();

  constructor() {}

  onIncrement() {
    this.counterSubject.next(++this.counter);
  }

  onDecrement() {
    this.counterSubject.next(--this.counter);
  }

  onReset() {
    this.counter = 0;
    this.counterSubject.next(this.counter);
  }
}
