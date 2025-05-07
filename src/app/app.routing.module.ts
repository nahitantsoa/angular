import { Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}