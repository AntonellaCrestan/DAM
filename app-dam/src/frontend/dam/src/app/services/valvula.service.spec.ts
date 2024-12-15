import { TestBed } from '@angular/core/testing';

import { ValvulaService } from './valvula.service';

describe('ValvulaService', () => {
  let service: ValvulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValvulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
