import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequirementListComponent } from './requirement-list.component';

const routes: Routes = [
  {
  path: '',
  component: RequirementListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequirementListRoutingModule { }
