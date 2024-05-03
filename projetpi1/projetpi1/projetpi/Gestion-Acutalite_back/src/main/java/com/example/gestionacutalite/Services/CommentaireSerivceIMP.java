package com.example.gestionacutalite.Services;


import com.example.gestionacutalite.Entites.Actualites;
import com.example.gestionacutalite.Entites.Commentaire;
import com.example.gestionacutalite.Repository.ActualiteRepostiory;
import com.example.gestionacutalite.Repository.CommentaireRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentaireSerivceIMP implements CommentaireService  {
    @Autowired
    private CommentaireRepository commentaireRepository;
    @Autowired
    private EmailService em;

    @Autowired
    private ActualiteRepostiory actualiteRepository;

    @Override
    public Commentaire addComment(Long actualiteId, Commentaire commentaire) {
        Actualites actualite = actualiteRepository.findById(actualiteId)
                .orElseThrow(() -> new EntityNotFoundException("Actualite not found with id: " + actualiteId));
        commentaire.setActualite(actualite);
        em.sendSimpleMessage("Oussema.hmaied1@esprit.tn", "haah" ,  "ahah");

        return commentaireRepository.save(commentaire);
    }

    public Commentaire signaler(Long commentaireId) {
        Commentaire commentaire = commentaireRepository.findById(commentaireId).orElse(null);
        if (commentaire != null) {
            commentaire.setSignale(true);
            return commentaireRepository.save(commentaire);
        }
        return null;
    }
    @Override
    public void deleteComment(Long commentaireId) {
        commentaireRepository.deleteById(commentaireId);
    }

    @Override
    public List<Commentaire> getAllCommentsByActualiteId(Long actualiteId) {
        return commentaireRepository.findAllByActualiteId(actualiteId);
    }

    public List<Commentaire> trierParPopularite(Long actualiteId) {
        return commentaireRepository.findByActualiteIdOrderByNombreLikesDesc(actualiteId);
    }

}
