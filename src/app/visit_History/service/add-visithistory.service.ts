import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AddVisitHistory } from 'src/app/visit_History/model/addVisitHistory.data'
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddVisithistoryService {

  public Id:any;

  constructor(private http: HttpClient) { }

   AddVisitHistory(data:AddVisitHistory): Observable<any>{
    return this.http.post<AddVisitHistory>(this.getBaseApiUrl()+'history/addvisit', data);
  }


   getVisitHistory(data:AddVisitHistory):Observable<any>{
    return this.http.get<AddVisitHistory[]>(this.getBaseApiUrl()+'history/listvisits/' + data);
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

