import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musica } from '../model/musica';

@Injectable({
  providedIn: 'root',
})
export class MusicaService {
  private http = inject(HttpClient);

  // Endpoint base de tu EC2
  private API_MUSICAS = 'http://52.14.249.233:8080/musicas';

  // GET: Listar todas (/musicas)
  getMusicas(): Observable<Musica[]> {
    return this.http.get<Musica[]>(this.API_MUSICAS);
  }

  // POST: Guardar nueva (/musicas/guardar)
  postMusica(musica: Musica): Observable<Musica> {
    return this.http.post<Musica>(`${this.API_MUSICAS}/guardar`, musica);
  }

  // PUT: Actualizar (/musicas/actualizar/{id})
  putMusica(id: number, musica: Musica): Observable<Musica> {
    return this.http.put<Musica>(`${this.API_MUSICAS}/actualizar/${id}`, musica);
  }

  // DELETE: Eliminar (/musicas/eliminar/{id})
  deleteMusica(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_MUSICAS}/eliminar/${id}`);
  }
}