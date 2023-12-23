import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../models/Commande.model';
import { Article } from '../models/Article.model';
import { NonNullAssert } from '@angular/compiler';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  
  private Restaurant:any
  
  private id:number
  voir:boolean=false
  private articles:number=0
  items:any
  constructor(private commande:Commande,private http: HttpClient,private router: Router,private route: ActivatedRoute) {
    this.id=0
   }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });
    this.commande=new Commande(this.id)
    this.http.get<any>('http://localhost:3000/api/restaurants/'+this.id)
    .subscribe(response => {
      this.Restaurant = response;
      this.items=this.Restaurant.items
      });
    
      
  }
  getRestaurantName():string{
    return this.Restaurant.nom
  }


  getRestaurantPhoto():string{
    return this.Restaurant.photo
  }
  getCommande():Commande{
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
    this.commande.addArticle(article)
    console.log(this.commande.getCout())
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
