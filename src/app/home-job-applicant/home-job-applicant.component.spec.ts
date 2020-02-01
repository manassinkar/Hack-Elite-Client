import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeJobApplicantComponent } from './home-job-applicant.component';

describe('HomeJobApplicantComponent', () => {
  let component: HomeJobApplicantComponent;
  let fixture: ComponentFixture<HomeJobApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeJobApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeJobApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
