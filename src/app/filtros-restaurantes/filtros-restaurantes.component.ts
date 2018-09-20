import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import * as $ from 'jquery';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_NEW_FOODTYPE, REMOVE_FOODTYPE, ADD_NEW_AREA, REMOVE_AREA } from '../actions';


@Component({
  selector: 'app-filtros-restaurantes',
  templateUrl: './filtros-restaurantes.component.html',
  styleUrls: ['./filtros-restaurantes.component.css']
})
export class FiltrosRestaurantesComponent implements OnInit {

  categories: any[];
  areas: any[];

  constructor(private restaurantsService: RestaurantsService, private ngRedux: NgRedux<IAppState>) { }

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

  activateFoodTypes($event){
    if($event.target.checked){
      this.ngRedux.dispatch({
        type: ADD_NEW_FOODTYPE,
        data: parseInt($event.target.value)
      })
    }else{
      this.ngRedux.dispatch({
        type: REMOVE_FOODTYPE,
        data: parseInt($event.target.value)
      })
    }
  }

  activateAreas($event){
    //console.log($event.target.value) --- ENTRA
    if($event.target.checked){
      this.ngRedux.dispatch({
        type: ADD_NEW_AREA,
        data: $event.target.value
      })
    }else{
      this.ngRedux.dispatch({
        type: REMOVE_AREA,
        data: $event.target.value
      })
    }
  }


}
