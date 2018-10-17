import { TestBed, inject } from '@angular/core/testing';

import { TodotodoService } from './todotodo.service';

describe('TodotodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodotodoService]
    });
  });

  it('should be created', inject([TodotodoService], (service: TodotodoService) => {
    expect(service).toBeTruthy();
  }));
});
