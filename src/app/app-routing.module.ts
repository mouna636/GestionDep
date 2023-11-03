import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { EditEnseignantComponent } from './edit-enseignant/EditEnseignantComponent.1';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { ListAbsenceComponent } from './list-absence/list-absence.component';
import { EspaceAdministrativeComponent } from './espace-administrative/espace-administrative.component';
import { EnseignantTableComponent } from './enseignant-table/enseignant-table.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'addEnseignant', component: AddEnseignantComponent},
  {path: 'enseignant-table',component:EnseignantTableComponent},
  {path: 'editEtudiant', component:EditEnseignantComponent },
   {path: 'ajout-etudiant', component: AjoutEtudiantComponent},
   { path: 'enseignants', component: ListAbsenceComponent },
  { path: 'administrative', component: EspaceAdministrativeComponent },
  { path: 'editEnseignant', component:EditEnseignantComponent }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
