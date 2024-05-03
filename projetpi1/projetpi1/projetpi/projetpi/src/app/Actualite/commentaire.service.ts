import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Commentaire} from "../Models/Commentaire";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private baseUrl = 'http://localhost:8081/commentaires';
  private seuilDislikes = 2;

  constructor(private http: HttpClient) { }

  addComment(actualiteId: number, commentaire: Commentaire): Observable<Commentaire> {
    return this.http.post<Commentaire>(`${this.baseUrl}/AddC/${actualiteId}`, commentaire);
  }
  
  
  getAllCommentsByActualiteId(actualiteId: number): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.baseUrl}/actualite/${actualiteId}`);
  }
  updateCommentaire(commentaire: Commentaire): Observable<Commentaire> {
    return this.http.put<Commentaire>(`${this.baseUrl}/update/${commentaire.id}`, commentaire);
  }
  getAllCommentaires(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.baseUrl}/all`);
  }
  getCommentaires(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.baseUrl}/commentaires`);
  }

  signalerCommentaire(commentaireId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/commentaires/${commentaireId}/signaler`, null);
  }
  incrementerLikes(commentaireId: number): Observable<Commentaire> {
    return this.http.post<Commentaire>(`${this.baseUrl}/incrementLikes/${commentaireId}`, null);
  }

  // Méthode pour incrémenter le nombre de dislikes d'un commentaire
  incrementerDislikes(commentaireId: number): Observable<Commentaire> {
    return this.http.post<Commentaire>(`${this.baseUrl}/incrementDislikes/${commentaireId}`, null);
  }
  getAllCommentairesAndSignalIfNeeded(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.baseUrl}/all`).pipe(
      map((commentaires: Commentaire[]) => {
        // Parcourir tous les commentaires pour vérifier s'ils doivent être signalés
        commentaires.forEach(commentaire => {
          if (commentaire.nombreDislikes > this.seuilDislikes) {
            this.signalerCommentaire(commentaire.id).subscribe(
              () => {
                // Supprimer le commentaire de la liste ou effectuer d'autres actions nécessaires
                console.log('Commentaire signalé automatiquement : ', commentaire.id);
              },
              error => {
                console.error('Erreur lors du signalement automatique du commentaire : ', error);
              }
            );
          }
        });
        return commentaires;
      })
    );
  }
  getCommentairesSignales(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.baseUrl}/commentaires/signales`);
  }
  getCommentaireById(commentaireId: number): Observable<Commentaire> {
    return this.http.get<Commentaire>(`${this.baseUrl}/${commentaireId}`);
  }

}

  

