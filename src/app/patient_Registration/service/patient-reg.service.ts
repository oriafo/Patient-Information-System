import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PatientRegistration } from '../model/patientReg.data'
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PatientRegService {

  constructor(private http: HttpClient) { }

    RegisterPatient(data:PatientRegistration): Observable<any>{
    console.log("service error",data);
    return this.http.post<PatientRegistration>(this.getBaseApiUrl()+'addpatient', data);
  }

  getPatient():Observable<any>{
    return this.http.get<PatientRegistration[]>(this.getBaseApiUrl()+'listpatient');
  }

  

protected getBaseApiUrl(): string {
  return environment.apiBaseUrl;
  }
}
