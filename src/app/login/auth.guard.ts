import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private loginService: LoginService) { }

  canActivate() {
    if  ( this.loginService.isLoggedIn() ) {

      return true;

    }

    this.router.navigate(['/']);
    return false;
  }

}