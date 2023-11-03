import { Component } from '@angular/core';
import { AbsenceService } from '../list-absence/absence.service';
import { Etudiant } from '../models/etudiant.model';
import { EtudEspService } from './espEtud.service';

@Component({
  selector: 'app-espace-etudiant',
  templateUrl: './espace-etudiant.component.html',
  styleUrls: ['./espace-etudiant.component.css'],
})
export class EspaceEtudiantComponent {
  users: Etudiant[] = [];

  constructor(
    private absenceService: AbsenceService,
    private etudesp: EtudEspService
  ) {}

  ngOnInit(): void {
    this.absenceService.getEtudiants().subscribe((res) => {
      this.users = res;
    });
  }
  getTauxAbsence(id: any): Number {
    this.etudesp.getNumberOfAbsencesByEtudiantId(id).subscribe((res) => {
      return res;
    });
    return 0;
  }
}
