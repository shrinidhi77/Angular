import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeableOperatorComponent } from './pipeable-operator.component';

describe('PipeableOperatorComponent', () => {
  let component: PipeableOperatorComponent;
  let fixture: ComponentFixture<PipeableOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipeableOperatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeableOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
