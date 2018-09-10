import { Component, OnInit } from '@angular/core';
import { NgRedux } from '../../../node_modules/@angular-redux/store';
import { IAppState } from '../store';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: any;

  constructor(public ngRedux: NgRedux<IAppState>) {
    this.usuario = null
  }

  ngOnInit() {
    this.usuario = this.ngRedux.getState().usuario; 
    // this.ngRedux.subscribe(() => {
    //   let state = this.ngRedux.getState();
    //   console.log(state);
    //   this.usuario = state.usuario;
    // })
  }

}
