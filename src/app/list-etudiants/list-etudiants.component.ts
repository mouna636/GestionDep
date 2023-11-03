import { Component } from '@angular/core';
import { AbsenceService } from '../list-absence/absence.service';
import { Etudiant } from '../models/etudiant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.css'],
})
export class ListEtudiantsComponent {
  users: Etudiant[] = [];

  constructor(private absenceService: AbsenceService, private router: Router) {}

  ngOnInit(): void {
    this.absenceService.getEtudiants().subscribe((res) => {
      this.users = res;
    });
  }

  goToEdit(x: any){
    this.router.navigate([`editEtudiant/${x}`])
  }
}
