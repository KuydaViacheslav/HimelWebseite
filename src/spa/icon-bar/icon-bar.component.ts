import { Component, OnInit } from '@angular/core';
import { SpaConfigService } from '../services/spa-config.service';

@Component({
  selector: 'icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.css']
})
export class IconBarComponent implements OnInit{
showLoader: boolean;
constructor(public spaConfigService: SpaConfigService) {
  this.showLoader = false;
}

ngOnInit(): void {
  
}

signOut(){
  console.log("Sing out");
  
}
}
