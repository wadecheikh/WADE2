import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HospitalService} from '../services/hospital.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  public patients: any;


  constructor(private hospiService: HospitalService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  oneGetPatients() {
this.hospiService.getPatients().subscribe(data => {

  this.patients = data;

}, err => {

  console.log(err);
});





  }
}
