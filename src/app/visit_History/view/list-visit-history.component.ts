import { Component, OnInit } from '@angular/core';
import { AddVisithistoryService } from 'src/app/visit_History/service/add-visithistory.service';
import { AddVisitHistory } from 'src/app/visit_History/model/addVisitHistory.data';
import { Location } from '@angular/common';


@Component({
  selector: 'app-list-visit-history',
  templateUrl: './list-visit-history.component.html',
  styleUrls: ['./list-visit-history.component.css']
})
export class ListVisitHistoryComponent implements OnInit {

  
  listHistory :AddVisitHistory[]=[]
  //visitHistory:any;

  constructor(private location:Location, private addVisithistoryService:AddVisithistoryService) { }

  ngOnInit(): void {
    this.getVisitHistory()
  }

  back(){
    this.location.back()
  }

  getVisitHistory(){
    console.log("id reached", this.addVisithistoryService.Id)
    this.addVisithistoryService.getVisitHistory(this.addVisithistoryService.Id).subscribe( data=> {
    this.listHistory = data
    })
  }

}
