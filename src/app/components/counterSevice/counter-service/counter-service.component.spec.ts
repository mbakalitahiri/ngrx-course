import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterServiceComponent } from './counter-service.component';

describe('CounterServiceComponent', () => {
  let component: CounterServiceComponent;
  let fixture: ComponentFixture<CounterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
