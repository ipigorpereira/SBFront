import { TestBed } from '@angular/core/testing';

import { TipoBebidaService } from './tipo-bebida.service';

describe('TipoBebidaService', () => {
  let service: TipoBebidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoBebidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
