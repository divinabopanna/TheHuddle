import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceMarketingComponent } from './layout/performance-marketing.component';

const routes: Routes = [{
  path: '',
  component:PerformanceMarketingComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceMarketingRoutingModule { }
