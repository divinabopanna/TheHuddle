import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesigningComponent } from './layout/designing/designing.component';

const routes: Routes = [{
  path:'',
  component:DesigningComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesigningRoutingModule { }
