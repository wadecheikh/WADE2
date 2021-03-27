import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private httpClient: HttpClient) { }
  // tslint:disable-next-line:typedef
  public getPatients(){

    return this.httpClient.get('http://localhost:8081/patients');
  }
}
