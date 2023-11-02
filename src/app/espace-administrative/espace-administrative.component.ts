import { Component } from '@angular/core';

@Component({
  selector: 'app-espace-administrative',
  templateUrl: './espace-administrative.component.html',
  styleUrls: ['./espace-administrative.component.css'],
})
export class EspaceAdministrativeComponent {
  constructor() {}
  state: any = null;

  showListeEtudiant() {
    this.state = true;
  }
  showListeEnseignant() {
    this.state = false;
  }
}
