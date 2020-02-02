import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCandidatesComponent } from './explore-candidates.component';

describe('ExploreCandidatesComponent', () => {
  let component: ExploreCandidatesComponent;
  let fixture: ComponentFixture<ExploreCandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreCandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreCandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
