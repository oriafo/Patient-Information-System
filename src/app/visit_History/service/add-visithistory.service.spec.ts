import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { AddVisithistoryService } from './add-visithistory.service';

describe('AddVisithistoryService', () => {
  let service: AddVisithistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddVisithistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
