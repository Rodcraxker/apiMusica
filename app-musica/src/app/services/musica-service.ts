import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musica } from '../model/musica'; // Asegúrate de tener esta interfaz

@Injectable({
  providedIn: 'root',
})
export class MusicaService {
  private http = inject(HttpClient);

  // La URL base debe coincidir con el @RequestMapping en tu controlador
  private API_MUSICAS = 'http://18.220.75.54:8080/musicas';

  // Método GET: Listar todas
  getMusicas(): Observable<Musica[]> {
    return this.http.get<Musica[]>(this.API_MUSICAS);
  }

  // Método POST: Guardar nueva
  postMusica(musica: Musica): Observable<Musica> {
    return this.http.post<Musica>(`${this.API_MUSICAS}/guardar`, musica);
  }

  // Método PUT: Actualizar
  putMusica(id: number, musica: Musica): Observable<Musica> {
    return this.http.put<Musica>(`${this.API_MUSICAS}/actualizar/${id}`, musica);
  }

  // Método DELETE: Eliminar
  deleteMusica(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_MUSICAS}/eliminar/${id}`);
  }
}