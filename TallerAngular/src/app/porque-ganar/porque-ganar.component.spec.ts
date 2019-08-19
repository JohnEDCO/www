import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorqueGanarComponent } from './porque-ganar.component';

describe('PorqueGanarComponent', () => {
  let component: PorqueGanarComponent;
  let fixture: ComponentFixture<PorqueGanarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorqueGanarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorqueGanarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
