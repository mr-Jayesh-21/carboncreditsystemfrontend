import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  AdminDashboard, CompanyDashboard, CompanyProfile,
  EmissionLog, EmissionLogRequest,
  CarbonTransaction, TradeRequest,
  MarketplaceListing, CreateListingRequest, FulfillListingRequest,
  Page,
} from '../../models/carbon.models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CarbonApiService {
  private base = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ── Admin ─────────────────────────────────────────────────────────────────

  getAdminDashboard(): Observable<AdminDashboard> {
    return this.http.get<AdminDashboard>(`${this.base}/admin/dashboard`);
  }

  getAllCompanies(): Observable<CompanyProfile[]> {
    return this.http.get<CompanyProfile[]>(`${this.base}/admin/companies`);
  }

  getCompanyDashboardAsAdmin(companyId: number): Observable<CompanyDashboard> {
    return this.http.get<CompanyDashboard>(`${this.base}/admin/companies/${companyId}/dashboard`);
  }

  updateEmissionCap(companyId: number, capTonnes: number): Observable<CompanyProfile> {
    return this.http.patch<CompanyProfile>(`${this.base}/admin/companies/${companyId}/cap`, {
      emissionCapTonnes: capTonnes,
    });
  }

  recordEmission(request: EmissionLogRequest): Observable<EmissionLog> {
    return this.http.post<EmissionLog>(`${this.base}/admin/emissions`, request);
  }

  getAllEmissions(): Observable<EmissionLog[]> {
    return this.http.get<EmissionLog[]>(`${this.base}/admin/emissions`);
  }

  // ── Company Self-Service ──────────────────────────────────────────────────

  getMyDashboard(): Observable<CompanyDashboard> {
    return this.http.get<CompanyDashboard>(`${this.base}/companies/me/dashboard`);
  }

  getMyEmissions(): Observable<EmissionLog[]> {
    return this.http.get<EmissionLog[]>(`${this.base}/companies/me/emissions`);
  }

  getMyProfile(): Observable<CompanyProfile> {
    return this.http.get<CompanyProfile>(`${this.base}/companies/me/profile`);
  }

  // ── Marketplace ───────────────────────────────────────────────────────────

  getOpenListings(page = 0, size = 20): Observable<Page<MarketplaceListing>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<Page<MarketplaceListing>>(`${this.base}/marketplace/listings`, { params });
  }

  createListing(request: CreateListingRequest): Observable<MarketplaceListing> {
    return this.http.post<MarketplaceListing>(`${this.base}/marketplace/listings`, request);
  }

  fulfillListing(listingId: number, request: FulfillListingRequest): Observable<CarbonTransaction> {
    return this.http.post<CarbonTransaction>(
      `${this.base}/marketplace/listings/${listingId}/fulfill`,
      request
    );
  }

  cancelListing(listingId: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/marketplace/listings/${listingId}`);
  }

  executeTrade(request: TradeRequest): Observable<CarbonTransaction> {
    return this.http.post<CarbonTransaction>(`${this.base}/marketplace/trade`, request);
  }
}
