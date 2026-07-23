package com.puce.controller;

import com.puce.entity.Musica;
import com.puce.service.MusicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/musicas")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class MusicaController {

    @Autowired
    private MusicaService musicaService;

    // LEER TODAS LAS CANCIONES
    @GetMapping
    public List<Musica> listarMusicas(){
        return musicaService.listarMusicas();
    }

    // REGISTRAR CANCIÓN
    @PostMapping("/guardar")
    public Musica guardarMusica(@RequestBody Musica musica){
        return musicaService.guardarMusica(musica);
    }

    // ACTUALIZAR CANCIÓN
    @PutMapping("/actualizar/{id}")
    public Musica actualizarMusica(@PathVariable Long id, @RequestBody Musica musica) {
        return musicaService.actualizarMusica(musica, id);
    }

    // ELIMINAR CANCIÓN
    @DeleteMapping("/eliminar/{id}")
    public void eliminarMusica(@PathVariable Long id){
        musicaService.eliminarMusica(id);
    }
}