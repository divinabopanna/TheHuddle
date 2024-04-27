import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplianceRoutingModule } from './compliance-routing.module';
import { ComplianceComponent } from './layout/compliance/compliance.component';


@NgModule({
  declarations: [
    ComplianceComponent
  ],
  imports: [
    CommonModule,
    ComplianceRoutingModule
  ]
})
export class ComplianceModule { }
