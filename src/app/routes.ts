import { Routes } from '@angular/router';
import { provideGuardForPermission } from 'permission-manager';

export const ROOT_ROUTES: Routes = [
  {
    path: 'a',
    loadComponent: () => import('./page-a.component'),
    canMatch: [provideGuardForPermission('CAN_READ')],
  },
  {
    path: 'b',
    loadComponent: () => import('./page-b.component'),
    canMatch: [provideGuardForPermission('CAN_WRITE')],
  },
  {
    path: 'b',
    loadComponent: () => import('./403.component'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/a',
  },
];
