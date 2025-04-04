import { TestBed } from '@angular/core/testing';

import { ReciepeserviceService } from './reciepeservice.service';

describe('ReciepeserviceService', () => {
  let service: ReciepeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciepeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
