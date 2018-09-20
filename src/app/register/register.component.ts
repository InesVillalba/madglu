import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registro: FormGroup;
  user: any;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.registro = new FormGroup({
      username: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', Validators.required)
    })
  }

  createNewUser(RegistroValues){
    this.userService.newUser(RegistroValues).then((response) => {
      console.log(response)
      this.user = response.json();
      console.log(this.user);
    })
  }

}
