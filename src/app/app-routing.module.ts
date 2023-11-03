import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { ListAbsenceComponent } from './list-absence/list-absence.component';
import { EspaceAdministrativeComponent } from './espace-administrative/espace-administrative.component';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';
import { EnseignantTableComponent } from './enseignant-table/enseignant-table.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { EspaceEtudiantComponent } from './espace-etudiant/espace-etudiant.component';
import { ModifEnseignantComponent } from './modif-enseignant/modif-enseignant.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addEnseignant', component: AddEnseignantComponent },
  { path: 'enseignant-table', component: EnseignantTableComponent },
  { path: 'ajout-etudiant', component: AjoutEtudiantComponent },
  { path: 'enseignants', component: ListAbsenceComponent },
  { path: 'administrative', component: EspaceAdministrativeComponent },
  { path: 'list-etudiants', component: ListEtudiantsComponent },
  { path: 'editEtudiant/:id', component: EditEtudiantComponent},
  

  { path: 'espaceetudiant', component: EspaceEtudiantComponent },
  { path: 'modifEnseignant/:id', component: ModifEnseignantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
