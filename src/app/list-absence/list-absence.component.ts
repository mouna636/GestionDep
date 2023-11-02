import { Component, OnInit } from '@angular/core';
import { AbsenceService } from './absence.service';
import { Etudiant } from '../models/etudiant.model';

@Component({
  selector: 'app-list-absence',
  templateUrl: './list-absence.component.html',
  styleUrls: ['./list-absence.component.css'],
})
export class ListAbsenceComponent implements OnInit {
  users: Etudiant[] = [];

  isAbsent: boolean = false;
  constructor(private absenceService: AbsenceService) {}

  ngOnInit(): void {
    this.absenceService.getEtudiants().subscribe((res) => {
      this.users = res;
    });
  }

  setEtudiantAbsent(id: any, event: Event): void {
    console.log((event.target as HTMLInputElement).id);

    if ((event.target as HTMLInputElement).checked) {
      this.absenceService.setEtudiantAbsent(id).subscribe((res) => {
        console.log(res);
      });
    } else if (!(event.target as HTMLInputElement).checked) {
      this.absenceService.setEtudiantAbsent(id).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
