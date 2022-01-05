import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LahoreComponent } from './lahore.component';

describe('LahoreComponent', () => {
  let component: LahoreComponent;
  let fixture: ComponentFixture<LahoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LahoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LahoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
