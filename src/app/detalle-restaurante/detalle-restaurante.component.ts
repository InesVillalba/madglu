import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-detalle-restaurante',
  templateUrl: './detalle-restaurante.component.html',
  styleUrls: ['./detalle-restaurante.component.css']
})
export class DetalleRestauranteComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  restaurant: any;

  constructor(private activatedRoute: ActivatedRoute, private restaurantsService: RestaurantsService) {}

  ngOnInit() {
    // Recupera los parámetros variables de la URL -> params
    this.activatedRoute.params.subscribe((params) => {
      // Utilizamos params.id para recuperar los datos del restaurante correspondiente
      this.restaurantsService.getRestaurant(params.id).then((response) => {
        this.restaurant = response.json();
      })
    })


   
  }

}
