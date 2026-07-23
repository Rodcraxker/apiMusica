package com.puce.service;

import com.puce.entity.Musica;
import com.puce.repository.MusicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MusicaService {

    @Autowired
    private MusicaRepository musicaRepository;

    // LEER - SELECT
    public List<Musica> listarMusicas(){
        return musicaRepository.findAll();
    }

    // Buscar por ID
    public Optional<Musica> buscarMusicaPorId(Long id){
        return musicaRepository.findById(id);
    }

    // GUARDAR
    public Musica guardarMusica(Musica musica){
        return musicaRepository.save(musica);
    }

    // ACTUALIZAR
    public Musica actualizarMusica(Musica musica, Long id){
        Musica musicaEncontrada = buscarMusicaPorId(id)
                .orElseThrow(() -> new RuntimeException("Música no encontrada"));

        // Actualizamos los campos nuevos
        musicaEncontrada.setNombre(musica.getNombre());
        musicaEncontrada.setAutor(musica.getAutor());
        musicaEncontrada.setDuracionSegundos(musica.getDuracionSegundos());
        musicaEncontrada.setGenero(musica.getGenero());
        musicaEncontrada.setDiscografica(musica.getDiscografica());

        return musicaRepository.save(musicaEncontrada);
    }

    // ELIMINAR
    public void eliminarMusica(Long id){
        Musica musica = buscarMusicaPorId(id)
                .orElseThrow(() -> new RuntimeException("La música no existe"));
        musicaRepository.delete(musica);
    }
}