import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaBodyComponent } from './spa-body/spa-body.component';
import { SpaContentComponent } from './spa-content/spa-content.component';
import { SpaHeaderComponent } from './spa-header/spa-header.component';
import { SpaConfigService } from './services/spa-config.service';
import { SpaFooterComponent } from './spa-footer/spa-footer.component';
import { IconBarComponent } from './icon-bar/icon-bar.component';
import { ScreenService } from './services/screen.service';
import { MenuService } from './services/menu.service';
import { MenuComponent } from './menus/menu/menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { ScreenLargeDirective } from './directives/screen-large.directive';
import { ScreenSmallDirective } from './directives/screen-small.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SpaBodyComponent, SpaContentComponent, SpaHeaderComponent, SpaFooterComponent, IconBarComponent, MenuComponent, 
    MenuItemComponent, ScreenLargeDirective, ScreenSmallDirective],
  exports:[SpaBodyComponent],
  imports: [ CommonModule, RouterModule],
  providers:[SpaConfigService, ScreenService, MenuService]
  
  
})
export class SpaModule { }
