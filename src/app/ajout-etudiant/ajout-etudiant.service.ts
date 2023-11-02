import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AjoutService {
  host: string = 'http://localhost:9001';
  constructor(private http: HttpClient) {}

  addEtudiant(etudiant: any) {
    return this.http.post<any[]>(`${this.host}/etudiants`, etudiant);
  }
}