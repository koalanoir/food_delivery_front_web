import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  clicked:boolean=false
  logout:boolean=true;
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService){

  }
  public click_ ():void{
    if (this.clicked)
      this.clicked=false
    else
      this.clicked=true
  }

}
