package com.example.gestionacutalite.Entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Commentaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String contenu;
    private LocalDateTime dateCommentaire;

    private int nombreLikes = 0;
    private boolean signale = false;

    @ManyToOne
    @JoinColumn(name = "actualite_id")
    @JsonIgnore
    private Actualites actualite;}
