import { Subject } from 'rxjs';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-output-service',
  templateUrl: './counter-output-service.component.html',
  styleUrls: ['./counter-output-service.component.css'],
})
export class CounterOutputServiceComponent {
  @Input() counter!: any;
}
