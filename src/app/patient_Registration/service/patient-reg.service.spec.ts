import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { PatientRegService } from './patient-reg.service';

describe('PatientRegService', () => {
  let service: PatientRegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientRegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
