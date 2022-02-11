import { Component, OnInit } from '@angular/core';
import { AddVisitHistory } from 'src/app/visit_History/model/addVisitHistory.data';
import { AddVisithistoryService } from 'src/app/visit_History/service/add-visithistory.service'
import { error } from '@angular/compiler/src/util';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-visit-history',
  templateUrl: './add-visit-history.component.html',
  styleUrls: ['./add-visit-history.component.css']
})
export class AddVisitHistoryComponent implements OnInit {

  constructor(private addVisithistoryService:AddVisithistoryService, private location:Location) { }

  visitHistory = {} as AddVisitHistory;
  patientid:any;
  

  ngOnInit(): void {
  this.visitHistory.patientInfo = this.addVisithistoryService.Id
  }

  AddVisitHistory(){
  // console.log("visithistory object",this.visitHistory)
  this.addVisithistoryService.AddVisitHistory(this.visitHistory).subscribe(
  data => {
    console.log("data", data)}, 
  error => {
    console.log("error", error)}

  )}

  // AddHistory(id:number){
  //   //this.visitHistory.patientId=id
  //   console.log("emitted id")
  // }

  back(){
    this.location.back()
  }
}