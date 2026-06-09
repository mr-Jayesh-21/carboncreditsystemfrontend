import {
  HttpClient,
  HttpParams,
  environment,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-IH4TJUIT.js";

// src/app/core/services/carbon-api.service.ts
var CarbonApiService = class _CarbonApiService {
  constructor(http) {
    this.http = http;
    this.base = environment.apiUrl;
  }
  // ── Admin ─────────────────────────────────────────────────────────────────
  getAdminDashboard() {
    return this.http.get(`${this.base}/admin/dashboard`);
  }
  getAllCompanies() {
    return this.http.get(`${this.base}/admin/companies`);
  }
  getCompanyDashboardAsAdmin(companyId) {
    return this.http.get(`${this.base}/admin/companies/${companyId}/dashboard`);
  }
  updateEmissionCap(companyId, capTonnes) {
    return this.http.patch(`${this.base}/admin/companies/${companyId}/cap`, {
      emissionCapTonnes: capTonnes
    });
  }
  recordEmission(request) {
    return this.http.post(`${this.base}/admin/emissions`, request);
  }
  getAllEmissions() {
    return this.http.get(`${this.base}/admin/emissions`);
  }
  // ── Company Self-Service ──────────────────────────────────────────────────
  getMyDashboard() {
    return this.http.get(`${this.base}/companies/me/dashboard`);
  }
  getMyEmissions() {
    return this.http.get(`${this.base}/companies/me/emissions`);
  }
  getMyProfile() {
    return this.http.get(`${this.base}/companies/me/profile`);
  }
  // ── Marketplace ───────────────────────────────────────────────────────────
  getOpenListings(page = 0, size = 20) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.base}/marketplace/listings`, { params });
  }
  createListing(request) {
    return this.http.post(`${this.base}/marketplace/listings`, request);
  }
  fulfillListing(listingId, request) {
    return this.http.post(`${this.base}/marketplace/listings/${listingId}/fulfill`, request);
  }
  cancelListing(listingId) {
    return this.http.delete(`${this.base}/marketplace/listings/${listingId}`);
  }
  executeTrade(request) {
    return this.http.post(`${this.base}/marketplace/trade`, request);
  }
  static {
    this.\u0275fac = function CarbonApiService_Factory(t) {
      return new (t || _CarbonApiService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CarbonApiService, factory: _CarbonApiService.\u0275fac, providedIn: "root" });
  }
};

export {
  CarbonApiService
};
//# sourceMappingURL=chunk-UKKCUMYG.js.map
