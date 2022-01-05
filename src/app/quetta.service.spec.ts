import { TestBed } from '@angular/core/testing';

import { QuettaService } from './quetta.service';

describe('QuettaService', () => {
  let service: QuettaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuettaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
