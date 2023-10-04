import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequirementListRoutingModule } from './requirement-list-routing.module';
import { RequirementListComponent } from './requirement-list.component';

@NgModule({
  declarations: [
    RequirementListComponent
  ],
  imports: [
    CommonModule,
    RequirementListRoutingModule
  ]
})
export class RequirementListModule { }
