import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import * as firebase from "firebase/app";
import {LoginService} from '../login/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  name:string;

  constructor(private router:Router, private loginService:LoginService) { }

  ngOnInit() {
    var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
 this. name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;
}
  }

  logout()
  {
      this.loginService.logout();
  }

}