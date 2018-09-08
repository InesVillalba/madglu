import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';
import { Router } from '../../../node_modules/@angular/router';
import { NgRedux } from '../../../node_modules/@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurants: any[];
  tag: boolean; 

  constructor(private restaurantsService: RestaurantsService, private router: Router, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.restaurantsService.getRestaurants().then((response)=>{
      console.log(response.json());
      this.restaurants = response.json();
    })

    this.ngRedux.subscribe(() => {
      this.restaurantsService.postCheckedFilters(this.ngRedux.getState().filters).then((response) =>{
        console.log(response.json().length)
        
        if(response.json().length > 0){
          this.restaurants = response.json();
        }else{
          this.restaurantsService.getRestaurants().then((response)=>{
            this.restaurants = response.json();
            //console.log('HOLIS')
          })
        } 
      })
    })


  }

  goToPage(path){
    this.router.navigate([path]);
  }

}
