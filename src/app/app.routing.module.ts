import { Route } from '@angular/router';
const routes: routes = [
    { 
      path: 'features', 
      loadChildren: () => import('./pages/features/features.module').then(m => m.FeaturesModule) 
    },
    { 
      path: 'public', 
      loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule) 
    },
    { path: '', redirectTo: 'public/login', pathMatch: 'full' }
  ];