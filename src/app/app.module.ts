import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MainComponent } from './main.component';
import { TechnicalServicesComponent } from './modules/technical-services/layout/technical-services.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TechnicalServicesComponent
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
