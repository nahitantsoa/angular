import { PublicLayoutComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { ActualityComponent} from './actuality/actuality.component';
import { Router } from 'express';
import { Route, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'actuality', component: ActualityComponent }
];