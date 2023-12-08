import { Component } from '@angular/core';
import {SpaConfigService, SpaConfigSettings} from '../spa/services/spa-config.service';
import { AppMenuItems } from './app.menu';
import { MenuService } from 'src/spa/services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private spaConfigService: SpaConfigService, private menuService: MenuService){
    const config: SpaConfigSettings = {
      
      socialIcons: [
        {imageFile: "assets/imgs/facebook.png", atl: "Facebook", url: "https://www.facebook.com/rfhfylfiajnjuhfa"},
        {imageFile: "assets/imgs/instagram.png", atl: "Instagram", url: "https://www.instagram.com/himmelstudio.de/"}, 
        {imageFile: "assets/imgs/whatsapp.png", atl: "Whatsapp", url: "http://whatsapp.com"},  
      ],
      showUserControls:true
   
    };
    spaConfigService.configure(config);
    menuService.items = AppMenuItems;
  }
}
