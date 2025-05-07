import { Routes } from '@angular/router';
import { PublicComponent } from './pages/public/public.component';

export const routes: Routes = [
{ 
      path: 'features', 
      loadChildren: () => import('./pages/features/features.module').then(m => m.FeaturesModule) 
    },
    { 
      path: 'public', 
      loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule) 
    },
{   path: '', redirectTo: 'public/login', pathMatch: 'full' }
];
