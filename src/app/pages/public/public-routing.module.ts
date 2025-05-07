import { Route, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent} from './home/home.component';
import { Router } from 'express';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    component: PublicComponent,
    children: [
      // Sous-menu LOGIN
      { path: 'login', component: LoginComponent },
      
      // Sous-menu ACTUALITY
      { path: 'home', component: HomeComponent }
    ]
  }
];
@NgModule ({
  imports: [RouterModule.forChild(routes)  ],
  exports: [RouterModule]
})
export class PublicRoutingModule{}