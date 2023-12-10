import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  restaurants: any[]=[];


  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/api/restaurants')
      .subscribe(response => {
        this.restaurants = response;
        console.log(response); // Mettez le console.log ici pour s'assurer qu'il est exécuté après la réception des données.
      });
  }
  constructor(private http: HttpClient,private router: Router) { }
  goToRestaurantDetails(restaurant:any): void {
    this.router.navigate(['/restaurant'], { queryParams: { id: restaurant.id } });

  }
}
