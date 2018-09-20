import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { NgRedux } from '../../../node_modules/@angular-redux/store';
import { IAppState } from '../store';
import { UsersService } from '../users.service';
import { FormGroup, Validators, FormControl } from '../../../node_modules/@angular/forms';
import { ResponseContentType } from '../../../node_modules/@angular/http';


@Component({
  selector: 'app-detalle-restaurante',
  templateUrl: './detalle-restaurante.component.html',
  styleUrls: ['./detalle-restaurante.component.css']
})
export class DetalleRestauranteComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  comentario: FormGroup;
  restaurant: any;
  reviews:any[];

  constructor(private activatedRoute: ActivatedRoute, private restaurantsService: RestaurantsService, private usersService: UsersService, private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {      
    let user = this.ngRedux.getState().usuario ? this.ngRedux.getState().usuario : {id: -1}
    // Recupera los parámetros variables de la URL -> params
    this.activatedRoute.params.subscribe((params) => {
      // Utilizamos params.id para recuperar los datos del restaurante correspondiente
      this.restaurantsService.getRestaurant(user.id, params.id).then((response) => {
        this.restaurant = response.json();
      })

      this.restaurantsService.getReviews(params.id).then((response) => {
        this.reviews = response.json();
        console.log(this.reviews)
      })
    })  
    
    this.comentario = new FormGroup({

      title: new FormControl('', Validators.required),
      review: new FormControl('', Validators.required)

    })

    
  }

  guardarFavorito(restId){
    if(this.ngRedux.getState().usuario !== null){
      let user = this.ngRedux.getState().usuario ? this.ngRedux.getState().usuario : {id: -1}
      this.usersService.guardarEnFavoritos(restId, user.id).then((response) =>{
        this.restaurant.isFav = 1
      })
    }
  }

  eliminarFavorito(restId){
    if(this.ngRedux.getState().usuario !== null){
      let user = this.ngRedux.getState().usuario ? this.ngRedux.getState().usuario : {id: -1}
      this.usersService.eliminarDeFavoritos(restId, user.id).then((response) =>{
        this.restaurant.isFav = 0
      })
    }
  }


  newReview(reviewInfo){    
    if(this.ngRedux.getState().usuario !== null){      
      let user = this.ngRedux.getState().usuario ? this.ngRedux.getState().usuario : {id: -1}       
      this.restaurantsService.addReview(user.id, reviewInfo.title, reviewInfo.review).then((response) => {
        this.activatedRoute.params.subscribe((params) => {
          // Utilizamos params.id para recuperar los datos del restaurante correspondiente
          this.restaurantsService.getReviews(params.id).then((response) => {
            this.reviews = response.json();
            console.log(this.reviews)
          })
        })
      })
    }
  }




}
