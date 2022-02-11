import { Component, OnInit } from '@angular/core';
import { PatientRegistration } from '../model/patientReg.data';
import { PatientRegService } from '../service/patient-reg.service';
import { Location } from '@angular/common';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-patient-reg',
  templateUrl: './patient-reg.component.html',
  styleUrls: ['./patient-reg.component.css']
})
export class PatientRegComponent implements OnInit {

  patientReg = {} as PatientRegistration;
  submitPatientReg = [];
  patientList:any;


  constructor(private router:Router, private patientRegservice:PatientRegService, private location:Location) { }

  ngOnInit(): void {
  }

  submitForm(){
    console.log("this is the submitted data", this.patientReg)
    this.patientRegservice.RegisterPatient(this.patientReg).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/viewPatient'])
    }, 
    error => {
        console.log(error)
    }
    );
  
  }

  // listPatient(){
  //   this.patientRegservice.getPatient().subscribe(data => {
  //     this.patientRegservice = data;
  //   }
  //   );

  // }

  back(){
    this.location.back()
  }

}


