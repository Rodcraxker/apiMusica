import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Musica } from '../model/musica';

@Injectable({
  providedIn: 'root',
})
export class MusicaService {
  private http = inject(HttpClient);

  // Usa la IP pública correcta de tu instancia EC2
  private API_MUSICAS = 'http://52.14.249.233:8080/musicas';

  // Método GET: Listar todas
  getMusicas(): Observable<Musica[]> {
    return this.http.get<Musica[]>(this.API_MUSICAS);
  }

  // Método POST: Guardar nueva
  postMusica(musica: Musica): Observable<Musica> {
    // Revisa si tu backend en Spring soporta POST directo a /musicas
    // o si realmente definiste la ruta como /musicas/guardar
    return this.http.post<Musica>(this.API_MUSICAS, musica);
  }

  // Método PUT: Actualizar
  putMusica(id: number, musica: Musica): Observable<Musica> {
    return this.http.put<Musica>(`${this.API_MUSICAS}/${id}`, musica);
  }

  // Método DELETE: Eliminar
  deleteMusica(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_MUSICAS}/${id}`);
  }
}