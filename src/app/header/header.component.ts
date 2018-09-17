import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { NgRedux } from '../../../node_modules/@angular-redux/store';
import { IAppState } from '../store';
import { LOGOUT_USER } from '../actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario: any;

  constructor(private router: Router, public ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.usuario = this.ngRedux.getState().usuario; 
  }

  goToPage(path){
    this.router.navigate([path]);
  }

  logoutUser(){
    this.ngRedux.dispatch({
      type: LOGOUT_USER,
      data: ""
    })
    this.router.navigate(['/']);
  }

}
