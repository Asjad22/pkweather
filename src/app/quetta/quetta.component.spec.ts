import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuettaComponent } from './quetta.component';

describe('QuettaComponent', () => {
  let component: QuettaComponent;
  let fixture: ComponentFixture<QuettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuettaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
