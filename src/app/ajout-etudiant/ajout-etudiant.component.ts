import { Component } from '@angular/core';
import { AjoutService } from './ajout-etudiant.service';
import { Etudiant } from '../models/etudiant.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css'],
})
export class AjoutEtudiantComponent {
  etudiant: any = {
    // Object to hold student data
    id: 0,
    nom: '',
    prenom: '',
    dateNaissance: '',
    cin: '',
    numberOfAbsences: 0,
    note: 0,

    /*sexe: "",
    email: "",
    telephone: "",
    adresse: "",
    ville: "",
    codePostal: "",
    pays: ""*/
  };

  constructor(
    private ajoutService: AjoutService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ajouterEtudiant() {
    const newEtudiant = { ...this.etudiant };
    console.log(newEtudiant);
    this.ajoutService.addEtudiant(newEtudiant).subscribe((data) => {
      console.log(data);
      this.router.navigate(['list-etudiants']);
    });
  }
}
