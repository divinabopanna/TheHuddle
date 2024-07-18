import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DetailsLayoutComponent } from './layout/details-layout.component';
import { DetailSectionComponent } from './detail-section/detail-section.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ComponentsModule
  ],
  declarations: [DetailsLayoutComponent, DetailSectionComponent],
  exports: [DetailsLayoutComponent, DetailSectionComponent]
})
export class DetailsModule { }
