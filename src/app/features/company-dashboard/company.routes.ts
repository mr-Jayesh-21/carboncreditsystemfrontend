import { Routes } from '@angular/router';

export const companyRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/company-dashboard/company-dashboard.component').then(
        (m) => m.CompanyDashboardComponent
      ),
  },
  {
    path: 'carbon-chain',
    loadComponent: () =>
      import('./components/carbon-chain-dashboard/carbon-chain-dashboard.component').then(
        (m) => m.CarbonChainDashboardComponent
      ),
  },
];
