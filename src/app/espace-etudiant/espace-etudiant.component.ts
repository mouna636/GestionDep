import { Component } from '@angular/core';
import { AbsenceService } from '../list-absence/absence.service';
import { Etudiant } from '../models/etudiant.model';
import { EtudEspService } from './espEtud.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-espace-etudiant',
  templateUrl: './espace-etudiant.component.html',
  styleUrls: ['./espace-etudiant.component.css'],
})
export class EspaceEtudiantComponent {
  users: Etudiant[] = [];
  taux: number = 0;
  constructor(
    private absenceService: AbsenceService,
    private etudesp: EtudEspService
  ) {}

  ngOnInit(): void {
    this.absenceService.getEtudiants().subscribe((res) => {
      console.log('Received users:', res);
      this.users = res;
    });
  }

  // getTauxAbsence(id: any): Observable<any> {
  //   let x = this.etudesp.getNumberOfAbsencesByEtudiantId(id);
  //   console.log(x);
  //   return x;
  // }
}
