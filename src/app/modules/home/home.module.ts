import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './layout/home.component';
import { DetailsModule } from '../details/details.module';
import { AboutUsModule } from '../about-us/about-us.module';
import { OurServicesModule } from '../our-services/our-services.module';
import { ContactUsModule } from '../contact-us/contact-us.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DetailsModule,
    AboutUsModule,
    OurServicesModule,
    ContactUsModule
  ]
})
export class HomeModule { }
