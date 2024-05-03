package com.example.gestionacutalite.Services;

import com.example.gestionacutalite.Entites.Commentaire;

import java.util.List;

public interface CommentaireService {

    Commentaire addComment(Long actualiteId, Commentaire commentaire);
     Commentaire signaler(Long commentaireId);

    void deleteComment(Long commentaireId) ;

     List<Commentaire> getAllCommentsByActualiteId(Long actualiteId) ;
}
