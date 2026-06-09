import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'admin',
    canActivate: [authGuard, adminGuard],
    loadChildren: () =>
      import('./features/admin-dashboard/admin.routes').then((m) => m.adminRoutes),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/company-dashboard/company.routes').then((m) => m.companyRoutes),
  },
  {
    path: 'marketplace',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/marketplace/marketplace.routes').then((m) => m.marketplaceRoutes),
  },
  {
    path: '**',
    redirectTo: '/auth/login',
  },
];
