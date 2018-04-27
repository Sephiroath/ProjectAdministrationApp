import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectadministrationComponent } from './projectadministration/projectadministration.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectadministrationComponent,
    children: [{
      path: '',
      redirectTo: 'projects',
      pathMatch: 'full'
    },
    {
      path: 'projects',
      component: ProjectsComponent,
      data: {
        title: 'Projects'
      }
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectadministrationRoutingModule { }
