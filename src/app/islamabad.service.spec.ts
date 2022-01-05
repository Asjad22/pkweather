import { TestBed } from '@angular/core/testing';

import { IslamabadService } from './islamabad.service';

describe('IslamabadService', () => {
  let service: IslamabadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IslamabadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
