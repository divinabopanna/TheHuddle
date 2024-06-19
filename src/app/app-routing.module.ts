import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes =[
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'aboutUs',
        loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule),
      },
      {
        path: 'e-commerce-management',
        loadChildren: () => import('./modules/ecommerce-management/ecommerce-management.module').then(m => m.EcommerceManagementModule),
      },
      {
        path: 'compliance',
        loadChildren: () => import('./modules/compliance/compliance.module').then(m => m.ComplianceModule),
      },
      {
        path: 'designing',
        loadChildren: () => import('./modules/designing/designing.module').then(m => m.DesigningModule),
      },
      {
        path: 'performance-marketing',
        loadChildren: () => import('./modules/performance-marketing/performance-marketing.module').then(m => m.PerformanceMarketingModule),
      },
      {
        path: 'digital-marketing',
        loadChildren: () => import('./modules/digital-marketing/digital-marketing.module').then(m => m.DigitalMarketingModule),
      },
      {
        path: 'contactUs',
        loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule),
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
