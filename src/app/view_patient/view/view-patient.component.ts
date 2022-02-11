import { Component, OnInit, ɵɵnamespaceMathML, ViewChild, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';
import { PatientRegService } from 'src/app/patient_Registration/service/patient-reg.service';
import { Router, RouterLink } from '@angular/router';
import { PatientRegistration } from 'src/app/patient_Registration/model/patientReg.data';
import { ViewPatientService } from 'src/app/view_patient/service/view-patient.service';
import { QueryPatientId } from 'src/app/view_patient/model/viewPatient.data';
import { AddVisithistoryService } from 'src/app/visit_History/service/add-visithistory.service';




@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})

export class ViewPatientComponent implements OnInit {

  @Output() visit = new EventEmitter();

  listPatientVariable :PatientRegistration[]=[]
  hold:boolean=false;
  i:number=0;




  constructor(private location:Location, private addVisithistoryService:AddVisithistoryService, private patientRegService:PatientRegService, private router:Router, private viewPatientService:ViewPatientService) { }

  ngOnInit(): void {
    this.listPatient();
  }

  back(){
    this.location.back()
  }

  search(event:any){
    let inputValue = event.target.value;
    if (inputValue && !(inputValue.includes(","))){
      this.viewPatientService.search(inputValue).subscribe(data => {
      this.listPatientVariable = [data.data]
    })
    }
    else if(inputValue.includes(",")){
      let splitArray = inputValue.indexOf(",")
      let startage = inputValue.slice(0, splitArray)
      //console.log(startage)
      let endage = inputValue.slice(splitArray+1, inputValue.length)
      //console.log(endage)
      this.viewPatientService.searchByAge(startage,endage).subscribe(data =>{
        this.listPatientVariable = [data.data]
        //console.log("returned data",data)
      })
    }
    else{
      this.patientRegService.getPatient().subscribe(data => {
        this.listPatientVariable = data.data   
    })
    
  }
}
  

  listPatient(){
      this.patientRegService.getPatient().subscribe(data => {
      this.listPatientVariable = data.data;  
      console.log(data)
    }
    );
  }

AddVisitHistory(patient:PatientRegistration){
  this.addVisithistoryService.Id = patient.patientId
  this.router.navigate(['/addVisitHistory'])
}

viewVisitHistory(patient:PatientRegistration){
  this.addVisithistoryService.Id = patient.patientId
  this.router.navigate(['/viewVisitHistory'])
}

checkbox(patient:PatientRegistration){
  //patient.data[i].Id

}

}
