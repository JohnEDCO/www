import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormasMorirComponent } from './formas-morir.component';

describe('FormasMorirComponent', () => {
  let component: FormasMorirComponent;
  let fixture: ComponentFixture<FormasMorirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormasMorirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormasMorirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
