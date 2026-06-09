import { Routes } from '@angular/router';

export const companyRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/company-dashboard/company-dashboard.component').then(
        (m) => m.CompanyDashboardComponent
      ),
  },
];
