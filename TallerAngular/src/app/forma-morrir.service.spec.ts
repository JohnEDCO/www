import { TestBed } from '@angular/core/testing';

import { FormaMorrirService } from './forma-morrir.service';

describe('FormaMorrirService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormaMorrirService = TestBed.get(FormaMorrirService);
    expect(service).toBeTruthy();
  });
});
