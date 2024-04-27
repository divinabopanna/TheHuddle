import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesigningRoutingModule } from './designing-routing.module';
import { DesigningComponent } from './layout/designing/designing.component';


@NgModule({
  declarations: [
    DesigningComponent
  ],
  imports: [
    CommonModule,
    DesigningRoutingModule
  ]
})
export class DesigningModule { }
