import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaBodyComponent } from './spa-body/spa-body.component';
import { SpaContentComponent } from './spa-content/spa-content.component';
import { SpaHeaderComponent } from './spa-header/spa-header.component';




@NgModule({
  declarations: [SpaBodyComponent, SpaContentComponent, SpaHeaderComponent],
  exports:[SpaBodyComponent],
  imports: [
    CommonModule
  ]
})
export class SpaModule { }
