import { Injectable } from '@angular/core';
import {Http} from '../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: Http) {}

  newUser(user){
    console.log(user)
    let url = 'http://localhost:3000/api/users/registro';
    return this.http.post(url, user).toPromise();
  }

  getUser(userInfo){
    console.log(userInfo);
    let url = 'http://localhost:3000/api/users/login';
    return this.http.post(url, userInfo).toPromise();
  }

  guardarEnFavoritos(pRestId, pUserId){
    let url = 'http://localhost:3000/api/users/favorites';
    return this.http.post(url, {restId: pRestId, userId: pUserId}).toPromise();
  }

  eliminarDeFavoritos(pRestId, pUserId){
    let url = 'http://localhost:3000/api/users/delfav';
    return this.http.post(url, {restId: pRestId, userId: pUserId}).toPromise();
  }
  
}
