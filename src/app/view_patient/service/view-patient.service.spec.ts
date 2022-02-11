import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ViewPatientService } from './view-patient.service';

describe('ViewPatientService', () => {
  let service: ViewPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
