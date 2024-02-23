import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  restaurants: any[]=[];
  initialRestaurants: any[]=[];
  ngOnInit(): void {
    this.http.get<any>('https://fooddeliverapi.vercel.app/api/restaurants')
      .subscribe(response => {
        this.restaurants = response;
        this.initialRestaurants=response
        console.log(response); // Mettez le console.log ici pour s'assurer qu'il est exécuté après la réception des données.
      });
  }

  constructor(public auth: AuthService,private http: HttpClient,private router: Router) { }

  goToRestaurantDetails(restaurant:any): void {
    this.router.navigate(['/restaurant'], { queryParams: { id: restaurant.id } });
  }

  rechercher(){
    const inputRecherche = document.getElementById('input-recherche') as HTMLInputElement;
    const searchTerm = inputRecherche.value.trim();
    if (searchTerm === '') {
      // Si l'entrée est vide, réinitialiser la liste des restaurants
      this.restaurants = this.initialRestaurants; // Réinitialiser à la liste initiale
  } else {
      const result = this.SearchRestaurants(searchTerm);
   
      this.restaurants = result;
  }

  }
  // Fonction pour effectuer une recherche  dans la liste des restaurants
  SearchRestaurants(query: string) {
    query = query.toLowerCase();
    console.log(query)
    return this.initialRestaurants.filter(restaurant => {
        const nomRestaurant = restaurant.nom.toLowerCase();
        // Algorithme de recherche fuzzy simple
        let score = 0;
        for (let i = 0; i < query.length; i++) {
            const index = nomRestaurant.indexOf(query[i]);
            if (index > -1) {
                score += 1;
            }
        }
        // Si le score dépasse un certain seuil, considérer la correspondance
        if (score >= query.length * 0.7) {
            return true;
        }
        return false;
    });
}

}
