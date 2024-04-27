import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ECommerceManagementComponent } from './layout/e-commerce-management/e-commerce-management.component';

const routes: Routes = [{
  path: '',
  component:ECommerceManagementComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceManagementRoutingModule { }
