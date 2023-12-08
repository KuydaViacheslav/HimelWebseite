import { Injectable } from '@angular/core';
export interface MemuItem {
  text: string;
  route: string;
  submenu: Array<MemuItem>;
}

@Injectable()
export class MenuService {
items!: Array<MemuItem>;
isVertical = false;
showVerticalMenu = false;
toggleMenu(): void {
  this.isVertical = true;
  this.showVerticalMenu = !this.showVerticalMenu;
}
}
