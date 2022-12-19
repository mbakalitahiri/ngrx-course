import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOutputServiceComponent } from './counter-output-service.component';

describe('CounterOutputServiceComponent', () => {
  let component: CounterOutputServiceComponent;
  let fixture: ComponentFixture<CounterOutputServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterOutputServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterOutputServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
