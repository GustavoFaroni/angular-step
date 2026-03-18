import { TestBed } from '@angular/core/testing';

import { Starwars } from './starwars';

describe('Starwars', () => {
  let service: Starwars;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Starwars);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
