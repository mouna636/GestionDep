import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SectionComponent } from './section/section.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { AjoutService } from './ajout-etudiant/ajout-etudiant.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListAbsenceComponent } from './list-absence/list-absence.component';
import { AbsenceService } from './list-absence/absence.service';
import { HttpClientModule } from '@angular/common/http';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';
import { EspaceAdministrativeComponent } from './espace-administrative/espace-administrative.component';
import { ListEnseignantsComponent } from './list-enseignants/list-enseignants.component';
import { BrowserModule } from '@angular/platform-browser';
import { EnseignantTableComponent } from './enseignant-table/enseignant-table.component';
import { EditEnseignantComponent } from './edit-enseignant/EditEnseignantComponent.1';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { EspaceEtudiantComponent } from './espace-etudiant/espace-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    SectionComponent,
    ListEnseignantsComponent,
    AboutComponent,
    ServiceComponent,
    AjoutEtudiantComponent,
    ListAbsenceComponent,
    ListEtudiantsComponent,
    EspaceAdministrativeComponent,
    EnseignantTableComponent,
    EditEnseignantComponent,
    AddEnseignantComponent,
    BackButtonComponent,
    EnseignantTableComponent,
    EspaceEtudiantComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AjoutService, AbsenceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
