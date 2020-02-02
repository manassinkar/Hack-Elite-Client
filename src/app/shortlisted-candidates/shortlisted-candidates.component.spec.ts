import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistedCandidatesComponent } from './shortlisted-candidates.component';

describe('ShortlistedCandidatesComponent', () => {
  let component: ShortlistedCandidatesComponent;
  let fixture: ComponentFixture<ShortlistedCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlistedCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlistedCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
