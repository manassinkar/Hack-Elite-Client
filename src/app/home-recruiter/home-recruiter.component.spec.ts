import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRecruiterComponent } from './home-recruiter.component';

describe('HomeRecruiterComponent', () => {
  let component: HomeRecruiterComponent;
  let fixture: ComponentFixture<HomeRecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRecruiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
