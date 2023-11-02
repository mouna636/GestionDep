import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
   {path: 'ajout-etudiant', component: AjoutEtudiantComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
