import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  Reg_Patient(){
    console.log("yes")
    this.router.navigate(['/patientReg'])
  }

  View_Patient(){
    this.router.navigate(['/viewPatient'])
  }
}
