import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesComponent } from './layout/our-services.component';



@NgModule({
  declarations: [
    OurServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[OurServicesComponent]
})
export class OurServicesModule { }
