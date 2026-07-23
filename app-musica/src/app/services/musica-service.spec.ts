import { TestBed } from '@angular/core/testing';
import { MusicaService } from './musica.service';

describe('MusicaService', () => {
  let service: MusicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a list of music that is an array', () => {
    const lista = service.listaMusicas(); 
    expect(Array.isArray(lista)).toBe(true);
  });
});