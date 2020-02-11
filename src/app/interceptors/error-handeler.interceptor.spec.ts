import { TestBed } from '@angular/core/testing';

import { ErrorHandelerInterceptor } from './error-handeler.interceptor';

describe('ErrorHandelerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErrorHandelerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErrorHandelerInterceptor = TestBed.inject(ErrorHandelerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
