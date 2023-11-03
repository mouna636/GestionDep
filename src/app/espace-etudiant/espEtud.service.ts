import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../models/etudiant.model';
import { Observable } from 'rxjs';

@Injectable()
export class EtudEspService {
  host: string = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  getNumberOfAbsencesByEtudiantId(id: number): any {
    return this.http.get(`${this.host}/etudiants/etudiant/${id}/absences`);
  }
  getTauxAbsentisme(): any {
    return this.http.get(`${this.host}/etudiants/taux-absentisme`);
  }
  getTauxReussite(): any {
    return this.http.get(`${this.host}/etudiants/taux-reussite`);
  }
}
