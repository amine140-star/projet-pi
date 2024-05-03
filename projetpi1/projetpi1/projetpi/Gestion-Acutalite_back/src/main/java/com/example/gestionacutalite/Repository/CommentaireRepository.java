package com.example.gestionacutalite.Repository;

import com.example.gestionacutalite.Entites.Commentaire;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CommentaireRepository extends CrudRepository<Commentaire,Long> {
    List<Commentaire> findAllByActualiteId(Long actualiteId);


    List<Commentaire> findByActualiteIdOrderByNombreLikesDesc(Long actualiteId);

}
