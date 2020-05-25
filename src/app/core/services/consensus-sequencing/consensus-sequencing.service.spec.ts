import { TestBed } from '@angular/core/testing';

import { ConsensusSequencingService } from './consensus-sequencing.service';

describe('ConsensusSequencingService', () => {
  let service: ConsensusSequencingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsensusSequencingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
