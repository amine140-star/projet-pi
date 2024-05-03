import { Component, OnInit } from '@angular/core';
import { Actualites } from '../../../Models/Actualites';
import { ActualiteService } from '../../ActualiteService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aff-actualite',
  templateUrl: './aff-actualite.component.html',
  styleUrls: ['./aff-actualite.component.css']
})
export class AffActualiteComponent implements OnInit {
  actualites: Actualites[] = [];

  constructor(
    private router: Router,
    private actualiteService: ActualiteService
  ) { }

  ngOnInit(): void {

    this.getActualites();
  }

  getActualites(): void {
    this.actualiteService.getAllActualites()
      .subscribe(actualites => {
        this.actualites = actualites;
      });
  }

  editActualite(actualite: Actualites): void {
    this.router.navigate(['/edit-actualite', actualite.id]);
  }

  deleteActualite(actualite: Actualites): void {
    this.actualiteService.deleteActualite(actualite.id)
      .subscribe(() => {
        this.actualites = this.actualites.filter(a => a !== actualite);
      });
  }
}
