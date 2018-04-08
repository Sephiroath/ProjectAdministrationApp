import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectadministrationRoutingModule } from './projectadministration-routing.module';
import { ProjectadministrationComponent } from './projectadministration/projectadministration.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectadministrationRoutingModule
  ],
  declarations: [ProjectadministrationComponent, ProjectsComponent]
})
export class ProjectadministrationModule { }
