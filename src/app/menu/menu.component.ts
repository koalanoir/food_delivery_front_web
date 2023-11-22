import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  clicked:boolean=false
  login:string="Se connecter"
  logout:boolean=true;
  public click_ ():void{
    if (this.clicked)
      this.clicked=false
    else
      this.clicked=true
  }

}
