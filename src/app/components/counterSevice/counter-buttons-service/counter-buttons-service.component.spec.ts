import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterButtonsServiceComponent } from './counter-buttons-service.component';

describe('CounterButtonsServiceComponent', () => {
  let component: CounterButtonsServiceComponent;
  let fixture: ComponentFixture<CounterButtonsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterButtonsServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterButtonsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
