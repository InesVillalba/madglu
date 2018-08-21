import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurants: any[];
  tag: boolean; 

  constructor(private restaurantsService: RestaurantsService, private router: Router) { }

  ngOnInit() {
    this.restaurantsService.getRestaurants().then((response)=>{
      console.log(response.json());
      this.restaurants = response.json();
    })
  }

  goToPage(path){
    this.router.navigate([path]);
  }

}
