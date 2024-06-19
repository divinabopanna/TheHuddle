import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MainComponent } from './main.component';
import { OurServicesComponent } from './modules/our-services/layout/our-services.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OurServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
