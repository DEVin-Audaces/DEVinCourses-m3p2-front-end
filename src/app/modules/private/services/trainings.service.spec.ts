import { TestBed } from '@angular/core/testing';

import { TrainingsService } from './trainings.service';

describe('TrainingsServiceService', () => {
  let service: TrainingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
