import { Component } from '@angular/core';
import {Actualites} from "../../../Models/Actualites";
import {ActualiteService} from "../../ActualiteService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-actualite',
  templateUrl: './add-actualite.component.html',
  styleUrls: ['./add-actualite.component.css']
})
export class AddActualiteComponent {
  actualite: Actualites = {
    id: 0,
    titre: '',
    contenu: '',
    datePublication: null,
    auteur: '',
    commentaires: [],
    user: null
  };


  constructor(private actualiteService: ActualiteService, private router: Router,
  ) { }

  ngOnInit(): void {
  }

  createActualite(): void {
    this.actualite.datePublication = new Date();
    this.actualiteService.createActualite(this.actualite)

      .subscribe(() => {
        console.log('Actualite created successfully');
        this.router.navigate(['/AfficherArtcile']);
      });
  }


}
