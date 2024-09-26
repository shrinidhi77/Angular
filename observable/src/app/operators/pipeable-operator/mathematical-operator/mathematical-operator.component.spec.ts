import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathematicalOperatorComponent } from './mathematical-operator.component';

describe('MathematicalOperatorComponent', () => {
  let component: MathematicalOperatorComponent;
  let fixture: ComponentFixture<MathematicalOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MathematicalOperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MathematicalOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
