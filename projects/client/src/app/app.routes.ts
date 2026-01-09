import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'activator', loadChildren: () => import('./activator/activator.module')},
  {path: 'desktop', loadComponent: () => import('./desktop/desktop')},
  {path: 'projects', loadComponent: () => import('./projects/projects')},
  {path: 'project', loadComponent: () => import('./project/project')},
  {path: 'dialog', loadComponent: () => import('./dialog/dialog')},
];
