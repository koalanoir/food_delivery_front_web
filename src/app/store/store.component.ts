import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../models/Commande.model';
import { Article } from '../models/Article.model';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  
  private Restaurant:any
  private commande:any[]
  private id:number
  voir:boolean=false
  private articles:number=0
  items:any
  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute) {
    this.id=0
    this.commande=[]
   }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    });
    this.http.get<any>('https://fooddeliverapi.vercel.app/api/restaurants/'+this.id)
    .subscribe(response => {
      this.Restaurant = response;
      this.items=this.Restaurant.items
      console.log(this.Restaurant.items)
      });
    
      
  }
  getRestaurantName():string{
    return this.Restaurant.nom
  }


  getRestaurantPhoto():string{
    return this.Restaurant.photo
  }
  getCommande():any[]{
    return this.commande 
  }
  getArticles():number{
    return this.articles
  }
  public ajouter(id:any):void{
    this.articles+=1
    let the_item
    for (const item of this.items) {
        if (item.id==id){
          the_item=item
        }
    }
    let article:Article=new Article(the_item.id,the_item.nom,the_item.prix,the_item.ingredients,the_item.photo)
    this.commande.push(article)
  }

  voirPannier(): void {
    if (this.commande!=null){
      this.voir=true
    }
  }
  fermerPannier():void{
    this.voir=false
  }
}
