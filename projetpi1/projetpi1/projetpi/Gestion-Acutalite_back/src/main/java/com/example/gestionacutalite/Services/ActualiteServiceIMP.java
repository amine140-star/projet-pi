package com.example.gestionacutalite.Services;


import com.example.gestionacutalite.Entites.User;
import com.example.gestionacutalite.Repository.ActualiteRepostiory;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import com.example.gestionacutalite.Entites.Actualites;

import java.awt.print.Pageable;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;


@Service
public class ActualiteServiceIMP implements ActualiteSerivce {

    @Autowired
    private ActualiteRepostiory actualiteRepository;
    public Actualites create(Actualites actualites )
    {
        actualites.setDatePublication(LocalDateTime.now());
        return actualiteRepository.save(actualites);
    }
    public Actualites update(Long id, Actualites actualites){
        if (!actualiteRepository.existsById(id)) {
            throw new EntityNotFoundException("Actualite not found with id: " + id);
        }
        actualites.setId(id);
        return actualiteRepository.save(actualites);

    }
    @Override
    public void delete(Long id) {
        actualiteRepository.deleteById(id);
    }
    public List<Actualites> getAllActualites() {
        return (List<Actualites>) actualiteRepository.findAll();
    }
    @Override
    public Actualites getById(Long id) {
        return actualiteRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Actualite not found with id: " + id));
    }

}
