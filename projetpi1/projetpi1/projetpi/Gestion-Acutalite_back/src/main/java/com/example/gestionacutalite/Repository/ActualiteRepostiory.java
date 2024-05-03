package com.example.gestionacutalite.Repository;


import com.example.gestionacutalite.Entites.Actualites;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ActualiteRepostiory extends CrudRepository<Actualites,Long> {
}
