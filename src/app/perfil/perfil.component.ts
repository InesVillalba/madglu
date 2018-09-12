import { Component, OnInit } from '@angular/core';
import { NgRedux } from '../../../node_modules/@angular-redux/store';
import { IAppState } from '../store';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: any;
  favRestaurants: any[];

  constructor(public ngRedux: NgRedux<IAppState>, private restaurantsService: RestaurantsService) {
    this.usuario = null
  }

  ngOnInit() {
    this.usuario = this.ngRedux.getState().usuario; 
    // this.ngRedux.subscribe(() => {
    //   let state = this.ngRedux.getState();
    //   console.log(state);
    //   this.usuario = state.usuario;
    // })

    if(this.ngRedux.getState().usuario !== null){
      
      let user = this.ngRedux.getState().usuario ? this.ngRedux.getState().usuario : {id: -1}
      
      this.restaurantsService.getFavoriteRestaurants(user.id).then((response) =>{
        this.favRestaurants = (response.json());
        console.log(this.favRestaurants)
      })
    }

  }



}
