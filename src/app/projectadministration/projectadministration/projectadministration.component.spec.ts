import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectadministrationComponent } from './projectadministration.component';

describe('ProjectadministrationComponent', () => {
  let component: ProjectadministrationComponent;
  let fixture: ComponentFixture<ProjectadministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectadministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectadministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
