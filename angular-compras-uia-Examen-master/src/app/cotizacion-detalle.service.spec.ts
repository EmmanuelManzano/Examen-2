import { TestBed } from '@angular/core/testing';

import { CotizacionDetalleService } from './cotizacion-detalle';

describe('CotizacionDetalleService', () => {
  let service: CotizacionDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CotizacionDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
