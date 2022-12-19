import { CounterService } from '../services/counter.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons-service',
  templateUrl: './counter-buttons-service.component.html',
  styleUrls: ['./counter-buttons-service.component.css'],
})
export class CounterButtonsServiceComponent {
  constructor(private counterSvc: CounterService) {}

  onIncrement() {
    this.counterSvc.onIncrement();
  }

  onDecrement() {
    this.counterSvc.onDecrement();
  }

  onReset() {
    this.counterSvc.onReset();
  }
}
