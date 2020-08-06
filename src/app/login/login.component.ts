import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = null;

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }

  signInWithGoogle()
  {
    this.loginService.signInWithGoogle()
      .then((res) => {
          this.router.navigate(['/list'])
        })
      .catch((err) => console.log(err));
  }

}