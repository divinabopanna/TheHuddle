import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceManagementRoutingModule } from './ecommerce-management-routing.module';
import { ECommerceManagementComponent } from './layout/e-commerce-management/e-commerce-management.component';


@NgModule({
  declarations: [
    ECommerceManagementComponent
  ],
  imports: [
    CommonModule,
    EcommerceManagementRoutingModule
  ]
})
export class EcommerceManagementModule { }
