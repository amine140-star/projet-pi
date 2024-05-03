import { Component, OnInit } from '@angular/core';
import { Actualites } from '../../../Models/Actualites';
import { ActualiteService } from '../../ActualiteService';
import { Commentaire } from 'src/app/Models/Commentaire';
import { CommentaireService } from '../../commentaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aff-actualite',
  templateUrl: './aff-actualite.component.html',
  styleUrls: ['./aff-actualite.component.css']
})
export class AffActualiteFComponent implements OnInit {
  actualites: Actualites[] = [];
  commentaires: Commentaire[] = [];
  seuilDislikes: number = 2;

  constructor(
    private router: Router,
    private actualiteService: ActualiteService,
    private commentaireService: CommentaireService
  ) { }

  ngOnInit(): void {
    this.getActualites();

  }

  getActualites(): void {
    this.actualiteService.getAllActualites()
      .subscribe(actualites => {
        this.actualites = actualites;
        if (this.actualites.length > 0) {
          this.getCommentsByActualiteId(this.actualites[0].id);
        }
      });
  }
  
  getCommentsByActualiteId(actualiteId: number): void {
    this.commentaireService.getAllCommentsByActualiteId(actualiteId)
      .subscribe(commentaires => {
        this.commentaires = commentaires;
  
      });
  }

  ajouterCommentaire(actualite: Actualites): void {
    this.router.navigate(['/AjoutCommentaire', actualite.id]);
  }

  editActualite(actualite: Actualites): void {
    this.router.navigate(['/edit-actualite', actualite.id]);
  }

  likeCommentaire(commentaireId: number): void {
    this.commentaireService.incrementerLikes(commentaireId)
      .subscribe(() => {
        // Mettre à jour les commentaires après l'incrémentation des likes
        this.getCommentsByActualiteId(this.actualites[0].id);
      });
  }

  dislikeCommentaire(commentaireId: number): void {
    this.commentaireService.incrementerDislikes(commentaireId)
      .subscribe(() => {
        // Après l'incrémentation des dislikes, vérifiez si le commentaire doit être signalé
        this.commentaireService.getCommentaireById(commentaireId)
          .subscribe(commentaire => {
            if (commentaire.nombreDislikes > this.seuilDislikes) {
              // Si le nombre de dislikes dépasse le seuil, signalez le commentaire
              this.commentaireService.signalerCommentaire(commentaireId)
                .subscribe(
                  () => {
                    console.log('Commentaire signalé automatiquement : ', commentaireId);
                    // Mettez à jour la liste des commentaires après le signalement
                    this.getCommentsByActualiteId(this.actualites[0].id);
                  },
                  error => {
                    console.error('Erreur lors du signalement automatique du commentaire : ', error);
                  }
                );
            }
          });
      });
  }
}
  
  
  

