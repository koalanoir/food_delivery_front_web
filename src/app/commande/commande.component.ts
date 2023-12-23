import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/Article.model';
import { Commande } from '../models/Commande.model';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent {
  @Input()
  commande!: Commande;

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {

  }
  
  getCommandeArticles():Article[]{
    return this.commande.getArticles()
  }
  getTotal():number{
    return this.commande.getCout()
  }
}
