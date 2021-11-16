import { TestBed } from '@angular/core/testing';

import { checkoutService } from './checkout.service';

describe('CheckoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: checkoutService = TestBed.get(checkoutService);
    expect(service).toBeTruthy();
  });
});
