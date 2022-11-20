import { TestBed } from '@angular/core/testing';

import { CreateTrainingService } from './create-training.service';

describe('CreateModuleService', () => {
  let service: CreateTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
