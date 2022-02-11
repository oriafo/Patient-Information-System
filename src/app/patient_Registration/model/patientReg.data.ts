import { DatePipe } from '@angular/common';


export interface PatientRegistration{
    //id?: number;
    firstName: string;
    lastName: string;
    address: string;
    dateOfBirth: string; //remember to convert to Date in your Logic
    patientId?:number;
    gender: string;
    phoneNumber: string;
    email:string;
    maritalStatus:string;
    occupation: string;
    age: number;
    //registeredDate?: string; //remember to convert to Date in your Logic
    // health_condition:string;
    // medication: string;
    // familyHistory: string;
}

