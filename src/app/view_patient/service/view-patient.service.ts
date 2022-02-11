import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { QueryPatientId } from 'src/app/view_patient/model/viewPatient.data';
import { PatientRegistration } from 'src/app/patient_Registration/model/patientReg.data';



@Injectable({
  providedIn: 'root'
})

export class ViewPatientService {


  constructor(private http: HttpClient) { }

search(data:any):Observable<any>{
    return this.http.get<PatientRegistration[]>(this.getBaseApiUrl()+'patient_id/' + data);  
  }


  searchByAge(data1:any, data2:any):Observable<any>{
    return this.http.get<PatientRegistration[]>(this.getBaseApiUrl()+'patient/age_between?startage='+data1+'&endage='+data2);  
  }

  

  protected getBaseApiUrl(): string {
    return environment.apiBaseUrl;
    }
}
 //   RegisterPatient(data:PatientRegistration): Observable<any>{
  //   console.log("service error",data);
  //   return this.http.post<PatientRegistration>(this.getBaseApiUrl()+'addpatient', data);
  // }

  // getPatient():Observable<any>{
  //   return this.http.get<PatientRegistration[]>(this.getBaseApiUrl()+'listpatient');
  // }

  


