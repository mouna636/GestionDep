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
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { AjoutService } from './ajout-etudiant/ajout-etudiant.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    AjoutEtudiantComponent
  ],
  imports: [FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AjoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
