import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import * as $ from 'jquery';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_NEW_FILTER, REMOVE_FILTER } from '../actions';


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

  activate($event){
    if($event.target.checked){
      this.ngRedux.dispatch({
        type: ADD_NEW_FILTER,
        data: parseInt($event.target.value)
      })
    }else{
      this.ngRedux.dispatch({
        type: REMOVE_FILTER,
        data: parseInt($event.target.value)
      })
    }
  }


}
