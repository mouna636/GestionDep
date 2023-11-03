import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../models/etudiant.model';

@Injectable()
export class EtudEspService {
  host: string = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getNumberOfAbsencesByEtudiantId(id: number) {
    return this.http.get(`${this.host}/etudiants/etudiant/${id}/absences`);
  }
}
