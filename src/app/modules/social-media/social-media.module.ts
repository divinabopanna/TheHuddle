import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { SocialMediaComponent } from './layout/social-media/social-media.component';


@NgModule({
  declarations: [
    SocialMediaComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule
  ]
})
export class SocialMediaModule { }
