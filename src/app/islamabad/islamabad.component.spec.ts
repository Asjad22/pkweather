import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslamabadComponent } from './islamabad.component';

describe('IslamabadComponent', () => {
  let component: IslamabadComponent;
  let fixture: ComponentFixture<IslamabadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IslamabadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IslamabadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
