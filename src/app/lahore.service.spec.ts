import { TestBed } from '@angular/core/testing';

import { LahoreService } from './lahore.service';

describe('LahoreService', () => {
  let service: LahoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LahoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
