# Carbon Credit Frontend — Angular 17

Blockchain-Based Carbon Credit Management System · Frontend Application

## Tech Stack
- **Angular 17** (Standalone Components, Signals)
- **RxJS** (HTTP observables)
- **TypeScript 5.4**
- **Angular Router** (Lazy-loaded feature modules)

---

## Quick Start

### Prerequisites
- Node.js 18+ and npm 9+

### Install & Run
```bash
npm install
ng serve
```
App available at `http://localhost:4200`

---

## Default Routes

| Path | Guard | Description |
|------|-------|-------------|
| `/auth/login` | Public | Login page |
| `/auth/register` | Public | Company registration |
| `/admin` | ADMIN role | Admin analytics dashboard |
| `/dashboard` | Authenticated | Company dashboard |
| `/marketplace` | Authenticated | P2P credit marketplace |

---

## Project Structure
```
src/app/
├── app.config.ts          # Providers: router, httpClient, interceptors
├── app.routes.ts          # Top-level lazy routes
├── models/
│   └── carbon.models.ts   # All TypeScript interfaces matching backend DTOs
├── core/
│   ├── guards/            # authGuard, adminGuard
│   ├── interceptors/      # authInterceptor (JWT), errorInterceptor (401 redirect)
│   └── services/
│       ├── auth.service.ts        # Login, register, JWT storage, Signal state
│       └── carbon-api.service.ts  # All HTTP API calls
└── features/
    ├── auth/
    │   ├── auth.routes.ts
    │   └── components/login/, register/
    ├── admin-dashboard/
    │   ├── admin.routes.ts
    │   └── components/admin-dashboard/  # Full analytics: KPIs, companies, emissions, TX
    ├── company-dashboard/
    │   ├── company.routes.ts
    │   └── components/company-dashboard/ # Overview, emission history, transactions
    └── marketplace/
        ├── marketplace.routes.ts
        └── components/marketplace/       # Browse listings, create listing, cancel
```

---

## Configuration

Edit `src/environments/environment.ts` to point to your backend:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:9090/api',
};
```

---

## Build for Production
```bash
ng build --configuration production
```
Output in `dist/carbon-credit-frontend/browser/`
