package com.example.gestionacutalite.Controller;


import com.example.gestionacutalite.Entites.Commentaire;
import com.example.gestionacutalite.Services.CommentaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/commentaires")
public class CommentaireController {

    @Autowired
    private CommentaireService commentaireService;

    @PostMapping("/AddC/{actualiteId}")
    public Commentaire addComment(@PathVariable Long actualiteId, @RequestBody Commentaire commentaire) {
        return commentaireService.addComment(actualiteId, commentaire);
    }

    @GetMapping("/actualite/{actualiteId}")
    public List<Commentaire> getAllCommentsByActualiteId(@PathVariable Long actualiteId) {
        return commentaireService.getAllCommentsByActualiteId(actualiteId);
    }

    @DeleteMapping("/Delete/{commentaireId}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long commentaireId) {
        commentaireService.deleteComment(commentaireId);
        return ResponseEntity.noContent().build();
    }
}
