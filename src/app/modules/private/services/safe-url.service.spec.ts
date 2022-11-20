import { TestBed } from '@angular/core/testing';

import { SafeUrlService } from './safe-url.service';

describe('SafeUrlService', () => {
  let service: SafeUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafeUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
