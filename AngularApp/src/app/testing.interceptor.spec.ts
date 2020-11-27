import { TestBed } from '@angular/core/testing';

import { TestingInterceptor } from './testing.interceptor';

describe('TestingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TestingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TestingInterceptor = TestBed.inject(TestingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
