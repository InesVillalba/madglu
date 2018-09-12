import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { NgRedux } from '../../../node_modules/@angular-redux/store';
import { IAppState } from '../store';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-detalle-restaurante',
  templateUrl: './detalle-restaurante.component.html',
  styleUrls: ['./detalle-restaurante.component.css']
})
export class DetalleRestauranteComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  restaurant: any;

  constructor(private activatedRoute: ActivatedRoute, private restaurantsService: RestaurantsService, private usersService: UsersService, private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
    // Recupera los parámetros variables de la URL -> params
    this.activatedRoute.params.subscribe((params) => {
      // Utilizamos params.id para recuperar los datos del restaurante correspondiente
      this.restaurantsService.getRestaurant(params.id).then((response) => {
        this.restaurant = response.json();
      })
    })
  }

  guardarFavorito(restId){
    if(this.ngRedux.getState().usuario !== null){
      let user = this.ngRedux.getState().usuario ? this.ngRedux.getState().usuario : {id: -1}
      this.usersService.guardarEnFavoritos(restId, user.id).then((response) =>{
        console.log(response.json());
      })
    }
  }

}
