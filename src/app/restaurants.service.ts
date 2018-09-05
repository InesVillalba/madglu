import { Injectable } from '@angular/core';
import { Http } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: Http) { }

  getRestaurants(){
    //let url = 'https://madglu-1234.firebaseio.com/restaurantes.json';
    let url = 'http://localhost:3000/api/restaurants/';
    return this.http.get(url).toPromise();
  }

  getRestaurant(idRestaurant){
    let url = `http://localhost:3000/api/restaurants/${idRestaurant}`;
    return this.http.get(url).toPromise();
  }

  getCategories(){    
    let url = 'http://localhost:3000/api/restaurants/categories';
    return this.http.get(url).toPromise();
  }

  getAreas(){
    let url = 'http://localhost:3000/api/restaurants/areas';
    return this.http.get(url).toPromise();
  }

  postCheckedFilters(pFilters){
    let url = 'http://localhost:3000/api/restaurants/filtered';
    return this.http.post(url, {filters: pFilters}).toPromise();
  }
  
}
