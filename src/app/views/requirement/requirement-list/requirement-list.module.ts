import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequirementListRoutingModule } from './requirement-list-routing.module';
import { RequirementListComponent } from './requirement-list.component';
import { SharedModule } from '../../../modules/shared.module'
@NgModule({
  declarations: [
    RequirementListComponent
  ],
  imports: [
    CommonModule,
    RequirementListRoutingModule,
    SharedModule
  ]
})
export class RequirementListModule { }
