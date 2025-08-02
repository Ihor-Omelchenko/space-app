import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'destination',
    loadComponent: () =>
      import('./destination/pages/destination/destination.component').then(m => m.DestinationComponent),
  }
];
