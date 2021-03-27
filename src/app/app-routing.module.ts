import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PatientsComponent} from './patients/patients.component';
import {NouveauPatientComponent} from './nouveau-patient/nouveau-patient.component';

const routes: Routes = [
  {
    path: 'patients',
    component: PatientsComponent
  },
  {
    path: 'nouveau-patient',
    component: NouveauPatientComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
