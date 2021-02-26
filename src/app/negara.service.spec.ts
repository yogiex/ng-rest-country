import { TestBed } from '@angular/core/testing';

import { NegaraService } from './negara.service';

describe('NegaraService', () => {
  let service: NegaraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NegaraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
