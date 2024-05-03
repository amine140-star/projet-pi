import {Component, OnInit} from '@angular/core';
import {Commentaire} from "../../../../Models/Commentaire";
import {CommentaireService} from "../../../commentaire.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Actualites} from "../../../../Models/Actualites";

@Component({
  selector: 'app-add-commentaire',
  templateUrl: './add-commentaire.component.html',
  styleUrls: ['./add-commentaire.component.css']
})
export class AddCommentaireComponent implements OnInit {

  actualiteId!: number;

  commentaire: Commentaire = {
    id: 0,
    contenu: '',
    dateCreation: null,
    utilisateur: null,
    nombreLikes: 0,
    nombreDislikes: 0 // Ajouter les propriétés pour le nombre de likes et de dislikes
  };

  constructor(private commentaireService: CommentaireService,   private router: Router
,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam === null) {
      console.error('L\'ID de l\'actualité est invalide.');
    } else {
      this.actualiteId = parseInt(idParam, 10);
    }
  }


  ajouterCommentaire(): void {
    if (this.commentaire) {
      this.commentaireService.addComment(this.actualiteId, this.commentaire)
        .subscribe(() => {
          console.log('Commentaire ajouté avec succès');
          this.router.navigate(['/AfficherArtcileF']);
        });
    } else {
      console.error('Le commentaire est undefined');
    }
  }

}
