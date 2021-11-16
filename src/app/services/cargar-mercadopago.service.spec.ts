import { TestBed } from '@angular/core/testing';

import { CargarMercadopagoService } from './cargar-mercadopago.service';

describe('CargarMercadopagoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargarMercadopagoService = TestBed.get(CargarMercadopagoService);
    expect(service).toBeTruthy();
  });
});
