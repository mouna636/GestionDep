import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { ListAbsenceComponent } from './list-absence/list-absence.component';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';
import { EspaceAdministrativeComponent } from './espace-administrative/espace-administrative.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
   {path: 'ajout-etudiant', component: AjoutEtudiantComponent},
   { path: 'enseignants', component: ListAbsenceComponent },
  { path: 'administrative', component: EspaceAdministrativeComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
