import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '../../node_modules/@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getRestaurant(idUser, idRestaurant){
    let url = `http://localhost:3000/api/restaurants/${idRestaurant},${idUser}`;    
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

  postCheckedFilters(pFoodType, pAreas){
    let url = 'http://localhost:3000/api/restaurants/filtered';
    return this.http.post(url, {foodType: pFoodType, areas: pAreas}).toPromise();
  }

  getFavoriteRestaurants(pUserId){
    let url = `http://localhost:3000/api/restaurants/favorites/${pUserId}`;
    return this.http.get(url).toPromise();
  }

  addReview(pUserId, pTitle, pReview){
    console.log("USER = "+pUserId+" TITLE: "+pTitle+"REVIEW:  "+pReview);
    let url = 'http://localhost:3000/api/restaurants/addcomentario';
    return this.http.post(url, {id_user: pUserId, title: pTitle, review: pReview}).toPromise();
  }

  getReviews(idRestaurant){
    let url = `http://localhost:3000/api/restaurants/comentarios/${idRestaurant}`;        
    return this.http.get(url).toPromise();
  }
  
}
