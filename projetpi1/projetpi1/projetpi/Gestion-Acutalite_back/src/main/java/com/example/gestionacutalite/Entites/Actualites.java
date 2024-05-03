package com.example.gestionacutalite.Entites;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Actualites {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;
    private String contenu;
    private LocalDateTime datePublication;
    private String auteur;

    @OneToMany(mappedBy = "actualite", cascade = CascadeType.ALL)
    private List<Commentaire> commentaires = new ArrayList<>();


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

}
