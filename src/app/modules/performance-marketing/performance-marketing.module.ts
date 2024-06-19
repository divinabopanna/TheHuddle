import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceMarketingRoutingModule } from './performance-marketing-routing.module';
import { PerformanceMarketingComponent } from './layout/performance-marketing.component';

@NgModule({
  declarations: [
    PerformanceMarketingComponent
  ],
  imports: [
    CommonModule,
    PerformanceMarketingRoutingModule
  ]
})
export class PerformanceMarketingModule { }
