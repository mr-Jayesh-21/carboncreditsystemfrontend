import { Routes } from '@angular/router';

export const marketplaceRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/marketplace/marketplace.component').then(
        (m) => m.MarketplaceComponent
      ),
  },
];
