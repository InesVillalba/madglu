import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-filtros-restaurantes',
  templateUrl: './filtros-restaurantes.component.html',
  styleUrls: ['./filtros-restaurantes.component.css']
})
export class FiltrosRestaurantesComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService) { }

    categories: any[];
    areas: any[];

  ngOnInit() {
    this.restaurantsService.getCategories().then((response)=>{
      console.log(response.json());
      this.categories = response.json();
    })

    this.restaurantsService.getAreas().then((response)=>{
      console.log(response.json());
      this.areas = response.json();
    })
  }

}
