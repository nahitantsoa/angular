import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import { Router } from 'express';
import { Route, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublicRoutingModule } from'./public-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }
];
@NgModule ({
  imports: [  PublicRoutingModule   
  ]
})
export class PublicModule {}