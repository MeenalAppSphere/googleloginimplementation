import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from "../environments/environment";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login/login.service';
import { ListComponent } from './list/list.component';
import { AuthGuard } from './login/auth.guard';

const route: Routes=[
  {path:"",component:LoginComponent},
  {path:"list",component:ListComponent,canActivate:[AuthGuard]}
]

@NgModule({
  imports: [ BrowserModule, FormsModule, AngularFireAuthModule,AngularFireDatabaseModule,AngularFireModule.initializeApp(environment.firebaseConfig),RouterModule.forRoot(route) ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, ListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LoginService ,AuthGuard],
})
export class AppModule { }
