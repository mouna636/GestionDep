import { Component } from '@angular/core';
import { AjoutService } from './ajout-etudiant.service';
import { Etudiant } from '../models/etudiant.model';



@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.css']
})


export class AjoutEtudiantComponent {

  etudiant: Etudiant= { // Object to hold student data
    id: 0,
    nom: "",
    prenom: "",
    dateNaissance: "",
    Cin: "",
    numberOfAbsences: 0,
    note: 0 ,


    /*sexe: "",
    email: "",
    telephone: "",
    adresse: "",
    ville: "",
    codePostal: "",
    pays: ""*/
  };

  constructor(private ajoutService: AjoutService) { }

  ajouterEtudiant() {
    const newEtudiant = { ...this.etudiant }; // Copy the student data
    console.log(newEtudiant); // Log to check the data before sending
    this.ajoutService.addEtudiant(newEtudiant).subscribe((data) => {
      console.log(data); // Log the response from the service
      // Additional actions upon successful addition can be done here
    });
  }


  }

