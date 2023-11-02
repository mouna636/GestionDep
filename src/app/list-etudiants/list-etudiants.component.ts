import { Component } from '@angular/core';
import { AbsenceService } from '../list-absence/absence.service';
import { Etudiant } from '../models/etudiant.model';

@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.css'],
})
export class ListEtudiantsComponent {
  users: Etudiant[] = [];

  constructor(private absenceService: AbsenceService) {}

  ngOnInit(): void {
    this.absenceService.getEtudiants().subscribe((res) => {
      this.users = res;
    });
  }
}
