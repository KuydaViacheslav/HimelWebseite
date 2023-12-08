import { Routes } from '@angular/router';
import { HOMEComponent } from './home/home.component';
import { UberUnsComponent } from './uber-uns/uber-uns.component';
import { GALERYComponent } from './galery/galery.component';
import { VIDEOComponent } from './video/video.component';
import { ANGEBOTComponent } from './angebot/angebot.component';
import { KONTAKTComponent } from './kontakt/kontakt.component';


export const appRoutes: Routes = [
    {path: 'home', component: HOMEComponent},
    {path: 'uber-uns', component: UberUnsComponent},
    {path: 'galery', component: GALERYComponent},
    {path: 'video', component: VIDEOComponent},
    {path: 'angebot', component: ANGEBOTComponent},
    {path: 'kontakt', component: KONTAKTComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', component: HOMEComponent},
];