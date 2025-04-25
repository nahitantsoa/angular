import { Route, Routes } from '@angular/router';
import { PublicLayoutComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { ActualityComponent} from './actuality/actuality.component';
import { Router } from 'express';

const routes: Routes = [
  { 
    path: '', 
    component: PublicLayoutComponent,
    children: [
      // Sous-menu LOGIN
      { path: 'login', component: LoginComponent },
      
      // Sous-menu ACTUALITY
      { path: 'actuality', component: ActualityComponent }
    ]
  }
];