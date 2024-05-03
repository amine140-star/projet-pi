package com.example.gestionacutalite.Controller;


import com.example.gestionacutalite.Entites.Actualites;
import com.example.gestionacutalite.Entites.User;
import com.example.gestionacutalite.Services.ActualiteSerivce;
import org.hibernate.query.Page;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Pageable;
import java.util.List;


@CrossOrigin("http://localhost:4200/")
@RequestMapping("/actualites")
@RestController
public class ActualiteController {
    @Autowired
    private ActualiteSerivce actualiteSerivce ;

    @PostMapping("/createActualite")
    public Actualites createActualite(@RequestBody Actualites actualite) {

        return actualiteSerivce.create(actualite);
    }

    @GetMapping("/{id}")
    public Actualites getActualiteById(@PathVariable Long id) {
        return actualiteSerivce.getById(id);
    }


    @PutMapping("/update/{id}")
    public Actualites updateActualite(@PathVariable Long id, @RequestBody Actualites actualite) {
        return actualiteSerivce.update(id, actualite);
    }
    @GetMapping("/GetAll")
    public List<Actualites> getAllActualites() {
        return actualiteSerivce.getAllActualites();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteActualite(@PathVariable Long id) {
        actualiteSerivce.delete(id);
        return ResponseEntity.noContent().build();
    }
}
