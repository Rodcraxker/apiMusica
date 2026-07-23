import { Component, inject, signal, OnInit } from '@angular/core';
import { MusicaService } from '../../services/musica-service'; // Asegúrate del nombre
import { Musica } from '../../model/musica';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-musicas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './musicas.html',
  styleUrl: './musicas.css',
})
export class MusicaComponent implements OnInit {
  private servicioMusica = inject(MusicaService);
    
  listaMusicas = signal<Musica[]>([]);
  
  nuevaMusica: Musica = {
    nombre: '',
    autor: '',
    duracionSegundos: 0,
    genero: '',
    discografica: ''
  };
    
  ngOnInit() {
    this.obtenerMusicas();
  }
  
  obtenerMusicas() {
    this.servicioMusica.getMusicas().subscribe(datos => {
      this.listaMusicas.set(datos);
    });
  }
  
  eliminarMusica(id: number) {
    this.servicioMusica.deleteMusica(id).subscribe(() => {
      this.obtenerMusicas();
    });
  }
    
  seleccionarParaEditar(musica: Musica) {
    this.nuevaMusica = { ...musica };
  }
  
  guardarMusica() {
    if (this.nuevaMusica.id) {
      this.servicioMusica.putMusica(this.nuevaMusica.id, this.nuevaMusica).subscribe(() => {
        this.obtenerMusicas();
        this.resetear();
      });
    } else {
      this.servicioMusica.postMusica(this.nuevaMusica).subscribe(() => {
        this.obtenerMusicas();
        this.resetear();
      });
    }
  }

  resetear() {
    this.nuevaMusica = { 
      nombre: '', 
      autor: '', 
      duracionSegundos: 0, 
      genero: '', 
      discografica: '' 
    };
  }
}