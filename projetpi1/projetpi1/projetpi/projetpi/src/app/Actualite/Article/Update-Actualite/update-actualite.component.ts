import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Actualites} from "../../../Models/Actualites";
import {ActualiteService} from "../../ActualiteService";
@Component({
  selector: 'app-update-actualite',
  templateUrl: './update-actualite.component.html',
  styleUrls: ['./update-actualite.component.css']
})
export class UpdateActualiteComponent  {
  actualite: Actualites = {
    id: 0,
    titre: '',
    contenu: '',
    datePublication: null,
    auteur: '',
    commentaires: [],
    user: null
  };

  constructor(
    private actualiteService: ActualiteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }



  updateActualite(): void {
    if (!this.actualite) {
      console.error('Actualite is not defined');
      return;
    }

    const id = this.route.snapshot.paramMap.get('id');
    this.actualiteService.updateActualite(Number(id), this.actualite)
      .subscribe(() => {
        console.log('Actualite updated successfully');
        this.router.navigate(['/AfficherArtcile']);
      });
  }
}
