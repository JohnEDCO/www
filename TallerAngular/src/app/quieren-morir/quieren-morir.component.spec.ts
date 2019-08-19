import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuierenMorirComponent } from './quieren-morir.component';

describe('QuierenMorirComponent', () => {
  let component: QuierenMorirComponent;
  let fixture: ComponentFixture<QuierenMorirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuierenMorirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuierenMorirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
