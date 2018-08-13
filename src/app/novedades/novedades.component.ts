import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  restaurants: any[];
  tag: boolean; 

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.getRestaurants().then((response)=>{
      console.log(response.json());
      this.restaurants = response.json();
    })
  }

  twoFoodTags(restaurant){
    return restaurant.slice(0,2);
  }
}
