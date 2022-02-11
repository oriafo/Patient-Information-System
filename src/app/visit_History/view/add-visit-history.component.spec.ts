import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitHistoryComponent } from './add-visit-history.component';

describe('AddVisitHistoryComponent', () => {
  let component: AddVisitHistoryComponent;
  let fixture: ComponentFixture<AddVisitHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVisitHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisitHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
