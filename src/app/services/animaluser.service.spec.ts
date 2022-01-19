import { TestBed } from '@angular/core/testing';

import { AnimaluserService } from './animaluser.service';

describe('AnimaluserService', () => {
  let service: AnimaluserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimaluserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
