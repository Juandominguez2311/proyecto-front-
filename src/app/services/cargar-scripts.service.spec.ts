import { TestBed } from '@angular/core/testing';

import { CargarScriptsService } from './cargar-scripts.service';

describe('CargarScriptsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargarScriptsService = TestBed.get(CargarScriptsService);
    expect(service).toBeTruthy();
  });
});
