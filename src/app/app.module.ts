import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AProposComponent } from './sections/a-propos/a-propos.component';
import { HistoriqueComponent } from './sections/historique/historique.component';
import { ProjetsComponent } from './sections/projets/projets.component';
import { CertificationsComponent } from './sections/certifications/certifications.component';
import { CompetencesComponent } from './sections/competences/competences.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule, Routes} from "@angular/router";
import { CompetenceBlocComponent } from './sections/competences/competence-bloc/competence-bloc.component';
import { ExperiencesComponent } from './sections/experiences/experiences.component';
import { ExperienceComponent } from './sections/experiences/experience/experience.component';
import { ProjetComponent } from './sections/projets/projet/projet.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: '**', redirectTo: '/'}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AProposComponent,
    HistoriqueComponent,
    ProjetsComponent,
    CertificationsComponent,
    CompetencesComponent,
    CompetenceBlocComponent,
    ExperiencesComponent,
    ExperienceComponent,
    ProjetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
