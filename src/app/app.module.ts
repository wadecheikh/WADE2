import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { NouveauPatientComponent } from './nouveau-patient/nouveau-patient.component';
import {HttpClientModule} from '@angular/common/http';
import { MedecinsComponent } from './medecins/medecins.component';
import { DossiersComponent } from './dossiers/dossiers.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    NouveauPatientComponent,
    MedecinsComponent,
    DossiersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
