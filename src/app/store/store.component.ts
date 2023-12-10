import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  nom:string="Nom du restau"
  distance:string="10 min"
  Restaurant:any
  id:number=0
  articles:number=0
  items:any
  constructor(private http: HttpClient,private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.http.get<any>('https://fooddeliverapi-5zsfs0f5o-koalanoir.vercel.app/api/restaurants/'+this.id)
    .subscribe(response => {
      this.Restaurant = response;
      this.items=this.Restaurant.items
      console.log(this.Restaurant.items)
      });
    
      
  }
  public ajouter():void{
    this.articles+=1
  }


}
