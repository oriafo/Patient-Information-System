import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { PatientRegComponent } from './patient_Registration/view/patient-reg.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ViewPatientComponent } from './view_patient/view/view-patient.component';
import { AddVisitHistoryComponent } from './visit_History/view/add-visit-history.component';
import { ListVisitHistoryComponent } from './visit_History/view/list-visit-history.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PatientRegComponent,
    ViewPatientComponent,
    AddVisitHistoryComponent,
    ListVisitHistoryComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      //{ path: '', component: AppComponent},   app-component sholud not be part of your route, else two nav-bar
      { path: 'patientReg', component: PatientRegComponent}, 
      { path: 'viewPatient', component: ViewPatientComponent},
      { path: 'addVisitHistory', component: AddVisitHistoryComponent},
      { path: 'viewVisitHistory', component: ListVisitHistoryComponent},
      
    ])

  ],
  providers: [HttpClient
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
