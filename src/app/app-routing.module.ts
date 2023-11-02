import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { ListeenseignantComponent } from './listeenseignant/listeenseignant.component';
import { EditEnseignantComponent } from './edit-enseignant/EditEnseignantComponent.1';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'addEnseignant', component: AddEnseignantComponent},
  {path: 'listeEnseignant', component:ListeenseignantComponent },
  {path: 'editEtudiant', component:EditEnseignantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
