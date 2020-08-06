import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuthModule, AngularFireAuth } from "@angular/fire/auth";
//import { auth } from 'firebase/app';
import * as firebase from "firebase/app";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export class LoginService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
        console.log(this.userDetails);
      } else {
        this.userDetails = null;
      }
    });
  }

  signInWithGoogle() {
    return this._firebaseAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }


  isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }


  logout() {
    this._firebaseAuth.signOut()
    .then((res) => this.router.navigate(['/']));
  }
}

