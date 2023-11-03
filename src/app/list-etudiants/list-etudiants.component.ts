import { Component } from '@angular/core';
import { AbsenceService } from '../list-absence/absence.service';
import { Etudiant } from '../models/etudiant.model';
import { Router } from '@angular/router';
import { EtudEspService } from '../espace-etudiant/espEtud.service';

@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.css'],
})
export class ListEtudiantsComponent {
  users: Etudiant[] = [];

  constructor(
    private absenceService: AbsenceService,
    private etudesp: EtudEspService,
    private router: Router
  ) {}
  taux: number = 0;

  ngOnInit(): void {
    this.absenceService.getEtudiants().subscribe((res) => {
      this.users = res;
    });
    this.etudesp.getTaux().subscribe((res: any) => {
      this.taux = res;
    });
  }

  goToEdit(x: any) {
    this.router.navigate([`editEtudiant/${x}`]);
  }
}
