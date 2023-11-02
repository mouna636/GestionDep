import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../models/etudiant.model';

@Injectable()
export class AbsenceService {
  host: string = 'http://localhost:9001';
  constructor(private http: HttpClient) {}

  getEtudiants() {
    return this.http.get<Etudiant[]>(`${this.host}/etudiants`);
  }

  setEtudiantAbsent(id: number) {
    return this.http.post(`${this.host}/etudiants/etudiant/${id}/absences`, {});
  }
  setEtudiantNotAbsent(id: number) {
    return this.http.delete(
      `${this.host}/etudiants/etudiant/${id}/absences`,
      {}
    );
  }
}
