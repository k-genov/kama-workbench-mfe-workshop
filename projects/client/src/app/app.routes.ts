import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'desktop', loadComponent: () => import('./desktop/desktop')},

];
