import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SectionComponent } from './section/section.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ListAbsenceComponent } from './list-absence/list-absence.component';
import { AbsenceService } from './list-absence/absence.service';
import { HttpClientModule } from '@angular/common/http';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';
import { EspaceAdministrativeComponent } from './espace-administrative/espace-administrative.component';
import { ListEnseignantsComponent } from './list-enseignants/list-enseignants.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    SectionComponent,
    AboutComponent,
    ServiceComponent,
    ListAbsenceComponent,
    ListEtudiantsComponent,
    EspaceAdministrativeComponent,
    ListEnseignantsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AbsenceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
