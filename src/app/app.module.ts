import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaModule } from 'src/spa/spa.module';




@NgModule({
  declarations: [
    AppComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpaModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
