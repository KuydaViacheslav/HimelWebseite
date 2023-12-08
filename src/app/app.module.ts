import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaModule } from 'src/spa/spa.module';
import { HOMEComponent } from './routes/home/home.component';
import { UberUnsComponent } from './routes/uber-uns/uber-uns.component';
import { GALERYComponent } from './routes/galery/galery.component';
import { VIDEOComponent } from './routes/video/video.component';
import { ANGEBOTComponent } from './routes/angebot/angebot.component';
import { KONTAKTComponent } from './routes/kontakt/kontakt.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    UberUnsComponent,
    GALERYComponent,
    VIDEOComponent,
    ANGEBOTComponent,
    KONTAKTComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpaModule,RouterModule.forRoot(appRoutes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
