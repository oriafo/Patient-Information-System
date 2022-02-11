import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVisitHistoryComponent } from './list-visit-history.component';

describe('ListVisitHistoryComponent', () => {
  let component: ListVisitHistoryComponent;
  let fixture: ComponentFixture<ListVisitHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVisitHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVisitHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
