import { Component, OnInit, Input } from '@angular/core';
import { MemuItem, MenuService } from '../../services/menu.service';

@Component({
  selector: 'spa-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
@Input() item!: MemuItem;
constructor (public menuService: MenuService){}
}
