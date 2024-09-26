import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorhandlingOperatorComponent } from './errorhandling-operator.component';

describe('ErrorhandlingOperatorComponent', () => {
  let component: ErrorhandlingOperatorComponent;
  let fixture: ComponentFixture<ErrorhandlingOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorhandlingOperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorhandlingOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
