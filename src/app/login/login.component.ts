import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, Validators, FormControl } from '../../../node_modules/@angular/forms';
import { Router } from '../../../node_modules/@angular/router';
import { UsersService } from '../users.service';
import { NgRedux } from '../../../node_modules/@angular-redux/store';
import { IAppState } from '../store';
import { SUCCESS_USER } from '../actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  user: any;

  constructor(private router: Router, private usersService: UsersService, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.login = new FormGroup({

      username: new FormControl('', Validators.required),
      password: new FormControl ('', Validators.required)

    })
  }

  goToPage(path){
    this.router.navigate([path]);
  }

  loginUser(userInfo){
    this.usersService.getUser(userInfo).then((response) => {
      this.ngRedux.dispatch({
        type: SUCCESS_USER,
        data: response.json()
      })
      this.router.navigate(['/perfil']);
    })
  }


  

}
