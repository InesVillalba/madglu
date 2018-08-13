import { Injectable } from '@angular/core';
import { Http } from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: Http) { }

  getRestaurants(){
    let url = 'https://madglu-1234.firebaseio.com/restaurantes.json';
    return this.http.get(url).toPromise();
  }
}
