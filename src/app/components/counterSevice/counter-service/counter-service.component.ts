import { CounterService } from '../services/counter.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-service',
  templateUrl: './counter-service.component.html',
  styleUrls: ['./counter-service.component.css'],
})
export class CounterServiceComponent {
  counterSubject$ = this.counterSvc.counterSubject$;
  constructor(private counterSvc: CounterService) {}
}
