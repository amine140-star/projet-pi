import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Actualites} from "../Models/Actualites";

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  private apiUrl = 'http://localhost:8081/actualites';

  constructor(private http: HttpClient) { }

  createActualite(actualite: Actualites): Observable<Actualites> {
    return this.http.post<Actualites>(`${this.apiUrl}/createActualite`, actualite);
  }

  getActualiteById(id: number): Observable<Actualites> {
    return this.http.get<Actualites>(`${this.apiUrl}/${id}`);
  }
  getAllActualites(): Observable<Actualites[]> {
    return this.http.get<Actualites[]>(`${this.apiUrl}/GetAll`);
  }
  updateActualite(id: number, actualite: Actualites): Observable<Actualites> {
    return this.http.put<Actualites>(`${this.apiUrl}/update/${id}`, actualite);
  }

  deleteActualite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
