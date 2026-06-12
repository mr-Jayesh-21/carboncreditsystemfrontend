import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { CompanyDashboard } from '../../../../models/carbon.models';
import { environment } from '../../../../../environments/environment';

// API_BASE wired to Spring Boot URL from Angular environment
const API_BASE = environment.apiUrl; // e.g. http://localhost:9090/api

async function apiFetch(path: string, token: string): Promise<any> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw err;
  }
  return res.json();
}

@Component({
  selector: 'app-carbon-chain-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="cc-shell">
      <aside class="cc-sidebar">
        <div class="cc-brand">
          <span>🌿</span>
          <div>
            <div class="cc-brand-name">CarbonChain</div>
            <div class="cc-brand-sub">MARKETPLACE</div>
          </div>
        </div>
        <nav class="cc-nav">
          <button [class.active]="tab() === 'dashboard'" (click)="tab.set('dashboard')">Dashboard</button>
          <button [class.active]="tab() === 'list'" (click)="tab.set('list')">List Credits</button>
        </nav>
        <div class="cc-user-block">
          <div class="cc-user-label">Signed in as</div>
          <div class="cc-user-name">{{ dashboard()?.profile?.companyName || '—' }}</div>
          <div class="cc-user-balance">{{ (dashboard()?.profile?.creditBalance ?? 0).toFixed(2) }} CCT</div>
        </div>
        <button class="cc-back-btn" (click)="goBack()">← Back to Dashboard</button>
      </aside>

      <main class="cc-main">
        @if (loading()) {
          <div class="cc-loading">Loading dashboard…</div>
        }

        @if (!loading() && tab() === 'list') {
          <div class="cc-form-card">
            <h2>List Credits for Sale</h2>
            <p class="cc-form-sub">
              Offer your surplus carbon credits on the peer-to-peer marketplace
              @if (dashboard()?.profile?.creditBalance != null) {
                · <strong>{{ dashboard()!.profile.creditBalance.toFixed(2) }} CCT available</strong>
              }
            </p>
            <div class="cc-form-row">
              <div class="cc-field">
                <label>Credits to Offer (CCT)</label>
                <input type="number" [(ngModel)]="listForm.creditsOffered" placeholder="e.g. 10"
                  [class.error]="fieldErrors['creditsOffered']" />
                @if (fieldErrors['creditsOffered']) {
                  <div class="cc-field-err">⚠ {{ fieldErrors['creditsOffered'] }}</div>
                }
              </div>
              <div class="cc-field">
                <label>Ask Price per Credit (USD)</label>
                <input type="number" [(ngModel)]="listForm.askPricePerCredit" placeholder="e.g. 45"
                  [class.error]="fieldErrors['askPricePerCredit']" />
                @if (fieldErrors['askPricePerCredit']) {
                  <div class="cc-field-err">⚠ {{ fieldErrors['askPricePerCredit'] }}</div>
                }
              </div>
            </div>
            <div class="cc-field">
              <label>Description <span class="cc-opt">(optional)</span></label>
              <input type="text" [(ngModel)]="listForm.description" placeholder="Brief note about these credits" />
            </div>
            @if (globalError()) {
              <div class="cc-alert error">{{ globalError() }}</div>
            }
            @if (listSuccess()) {
              <div class="cc-alert success">✓ Listing created successfully!</div>
            }
            <button class="cc-btn-primary" [disabled]="listLoading()" (click)="submitListing()">
              {{ listLoading() ? 'Creating…' : 'Create Listing' }}
            </button>
          </div>
        }

        @if (!loading() && tab() === 'dashboard' && dashboard()) {
          <div>
            <div class="cc-page-header">
              <h1>Dashboard</h1>
              <p>{{ dashboard()!.profile.companyName }} · Carbon performance overview</p>
            </div>
            <div class="cc-stat-row">
              <div class="cc-stat">
                <div class="cc-stat-label">Credit Balance</div>
                <div class="cc-stat-val green">{{ dashboard()!.profile.creditBalance.toFixed(1) }} <span>CCT</span></div>
                <div class="cc-stat-sub">Available to trade</div>
              </div>
              <div class="cc-stat">
                <div class="cc-stat-label">Emissions this Qtr</div>
                <div class="cc-stat-val orange">{{ dashboard()!.totalEmissionsThisQuarter.toFixed(0) }} <span>t CO₂</span></div>
                <div class="cc-stat-sub">Cap: {{ dashboard()!.profile.emissionCapTonnes }} t/yr</div>
              </div>
              <div class="cc-stat">
                <div class="cc-stat-label">Remaining Cap</div>
                <div class="cc-stat-val" [class.blue]="dashboard()!.remainingCap >= 0" [class.red]="dashboard()!.remainingCap < 0">
                  {{ dashboard()!.remainingCap.toFixed(0) }} <span>tonnes</span>
                </div>
                <div class="cc-stat-sub">For this quarter</div>
              </div>
              <div class="cc-stat">
                <div class="cc-stat-label">Active Listings</div>
                <div class="cc-stat-val purple">{{ dashboard()!.activeListings.length }}</div>
                <div class="cc-stat-sub">Open marketplace</div>
              </div>
            </div>

            <div class="cc-card" style="margin-bottom:1rem">
              <div class="cc-card-title">Monthly Emission History</div>
              @if (dashboard()!.emissionHistory.length === 0) {
                <p class="cc-empty">No emission records yet.</p>
              } @else {
                <div class="cc-table-wrap">
                  <table class="cc-table">
                    <thead><tr><th>Month</th><th>Actual (t)</th><th>Cap (t)</th><th>Credits Adj.</th><th>Status</th></tr></thead>
                    <tbody>
                      @for (e of dashboard()!.emissionHistory; track e.id) {
                        <tr>
                          <td>{{ e.reportingMonth }}</td>
                          <td class="mono">{{ e.actualEmissionsTonnes.toFixed(1) }}</td>
                          <td class="mono">{{ e.periodCapTonnes.toFixed(1) }}</td>
                          <td class="mono" [class.g]="e.creditsAdjusted > 0" [class.r]="e.creditsAdjusted < 0">
                            {{ e.creditsAdjusted > 0 ? '+' : '' }}{{ e.creditsAdjusted.toFixed(2) }}
                          </td>
                          <td><span class="cc-badge" [class]="statusClass(e.status)">{{ e.status }}</span></td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              }
            </div>

            <div class="cc-card">
              <div class="cc-card-title">Recent Transactions</div>
              @if (dashboard()!.transactionHistory.length === 0) {
                <p class="cc-empty">No transactions yet.</p>
              } @else {
                <div class="cc-table-wrap">
                  <table class="cc-table">
                    <thead><tr><th>Date</th><th>Type</th><th>Credits</th><th>Value (USD)</th><th>Counterparty</th></tr></thead>
                    <tbody>
                      @for (t of dashboard()!.transactionHistory; track t.id) {
                        <tr>
                          <td>{{ t.createdAt?.slice(0, 10) }}</td>
                          <td><span class="cc-badge" [class]="t.transactionType === 'TRADE' ? 'trade' : 'alloc'">{{ t.transactionType }}</span></td>
                          <td class="mono">{{ t.creditAmount.toFixed(2) }} CCT</td>
                          <td class="mono">\${{ (t.totalValueUsd ?? 0).toFixed(2) }}</td>
                          <td class="muted">{{ t.toCompanyName || t.fromCompanyName || '—' }}</td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              }
            </div>
          </div>
        }
      </main>
    </div>
  `,
  styles: [`
    .cc-shell { display:flex; min-height:100vh; font-family:system-ui,-apple-system,sans-serif; background:#f3f4f6; }
    .cc-sidebar { width:240px; background:#14532d; padding:24px 16px; display:flex; flex-direction:column; flex-shrink:0; }
    .cc-brand { display:flex; align-items:center; gap:10px; margin-bottom:32px; }
    .cc-brand span { font-size:22px; }
    .cc-brand-name { color:#fff; font-weight:700; font-size:16px; }
    .cc-brand-sub { color:#86efac; font-size:11px; font-weight:600; letter-spacing:.08em; }
    .cc-nav { display:flex; flex-direction:column; gap:4px; flex:1; }
    .cc-nav button { background:transparent; border:none; color:#d1fae5; text-align:left; padding:10px 16px; border-radius:8px; font-size:14px; font-weight:500; cursor:pointer; transition:background .15s; }
    .cc-nav button:hover { background:rgba(255,255,255,.08); }
    .cc-nav button.active { background:#16a34a; color:#fff; }
    .cc-user-block { border-top:1px solid #166534; padding-top:16px; margin-top:16px; }
    .cc-user-label { color:#86efac; font-size:12px; margin-bottom:4px; }
    .cc-user-name { color:#fff; font-size:13px; font-weight:600; }
    .cc-user-balance { color:#4ade80; font-size:14px; font-weight:700; margin-top:6px; }
    .cc-back-btn { margin-top:16px; background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.15); color:rgba(255,255,255,.7); padding:10px; border-radius:8px; cursor:pointer; font-size:13px; }
    .cc-main { flex:1; padding:28px 32px; overflow-y:auto; }
    .cc-loading { display:flex; justify-content:center; align-items:center; height:200px; color:#16a34a; font-size:16px; }
    .cc-page-header { margin-bottom:24px; }
    .cc-page-header h1 { margin:0; font-size:24px; font-weight:700; color:#111827; }
    .cc-page-header p { margin:4px 0 0; font-size:14px; color:#6b7280; }
    .cc-stat-row { display:flex; gap:16px; flex-wrap:wrap; margin-bottom:24px; }
    .cc-stat { background:#fff; border-radius:12px; padding:20px 24px; flex:1 1 180px; min-width:160px; box-shadow:0 1px 3px rgba(0,0,0,.08); }
    .cc-stat-label { font-size:12px; color:#6b7280; font-weight:600; text-transform:uppercase; letter-spacing:.05em; }
    .cc-stat-val { font-size:28px; font-weight:700; margin-top:6px; }
    .cc-stat-val span { font-size:14px; font-weight:500; color:#9ca3af; margin-left:4px; }
    .cc-stat-val.green { color:#16a34a; } .cc-stat-val.orange { color:#f97316; }
    .cc-stat-val.blue { color:#2563eb; } .cc-stat-val.red { color:#ef4444; } .cc-stat-val.purple { color:#7c3aed; }
    .cc-stat-sub { font-size:12px; color:#9ca3af; margin-top:4px; }
    .cc-card { background:#fff; border-radius:12px; padding:20px 24px; box-shadow:0 1px 3px rgba(0,0,0,.08); }
    .cc-card-title { font-size:14px; font-weight:600; color:#374151; margin-bottom:16px; }
    .cc-empty { color:#9ca3af; font-size:14px; margin:0; }
    .cc-table-wrap { overflow-x:auto; }
    .cc-table { width:100%; border-collapse:collapse; font-size:13px; }
    .cc-table th { text-align:left; color:#6b7280; font-weight:600; padding:4px 8px; border-bottom:1px solid #f3f4f6; }
    .cc-table td { padding:8px; border-bottom:1px solid #f9fafb; color:#374151; }
    .cc-table tr:last-child td { border-bottom:none; }
    .mono { font-family:monospace; font-weight:600; }
    .muted { color:#6b7280; }
    .g { color:#16a34a; } .r { color:#ef4444; }
    .cc-badge { padding:2px 8px; border-radius:4px; font-size:11px; font-weight:600; text-transform:uppercase; }
    .cc-badge.trade { background:#dbeafe; color:#1d4ed8; }
    .cc-badge.alloc { background:#dcfce7; color:#166534; }
    .cc-badge.under-cap { background:#dcfce7; color:#15803d; }
    .cc-badge.over-cap { background:#fee2e2; color:#b91c1c; }
    .cc-badge.at-cap { background:#fef9c3; color:#854d0e; }
    .cc-form-card { background:#fff; border-radius:12px; padding:24px 28px; box-shadow:0 1px 3px rgba(0,0,0,.08); max-width:700px; }
    .cc-form-card h2 { margin:0 0 4px; font-size:22px; font-weight:700; color:#111827; }
    .cc-form-sub { margin:0 0 20px; font-size:14px; color:#6b7280; }
    .cc-form-row { display:flex; gap:16px; margin-bottom:0; flex-wrap:wrap; }
    .cc-field { flex:1; min-width:200px; margin-bottom:16px; }
    .cc-field label { display:block; font-size:13px; font-weight:500; color:#374151; margin-bottom:6px; }
    .cc-opt { color:#9ca3af; font-weight:400; }
    .cc-field input { width:100%; padding:10px 12px; border-radius:8px; font-size:14px; border:1.5px solid #d1d5db; outline:none; box-sizing:border-box; }
    .cc-field input.error { border-color:#ef4444; }
    .cc-field-err { font-size:12px; color:#ef4444; margin-top:4px; }
    .cc-alert { padding:10px 14px; border-radius:8px; font-size:14px; margin-bottom:14px; }
    .cc-alert.error { background:#fef2f2; border:1px solid #fecaca; color:#b91c1c; }
    .cc-alert.success { background:#f0fdf4; border:1px solid #bbf7d0; color:#166534; }
    .cc-btn-primary { background:#16a34a; color:#fff; border:none; border-radius:8px; padding:11px 24px; font-size:14px; font-weight:600; cursor:pointer; }
    .cc-btn-primary:disabled { background:#86efac; cursor:not-allowed; }
  `],
})
export class CarbonChainDashboardComponent implements OnInit {
  tab = signal<'dashboard' | 'list'>('dashboard');
  loading = signal(true);
  dashboard = signal<CompanyDashboard | null>(null);

  listForm = { creditsOffered: '', askPricePerCredit: '', description: '' };
  fieldErrors: Record<string, string> = {};
  globalError = signal('');
  listSuccess = signal(false);
  listLoading = signal(false);

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void { this.loadDashboard(); }

  private async loadDashboard(): Promise<void> {
    // Token sourced from AuthService which reads localStorage key 'cc_token'
    const token = this.auth.getToken();
    if (!token) { this.router.navigate(['/auth/login']); return; }
    try {
      const data = await apiFetch('/companies/me/dashboard', token);
      this.dashboard.set(data);
    } catch { /* dashboard stays null */ } finally { this.loading.set(false); }
  }

  async submitListing(): Promise<void> {
    const token = this.auth.getToken();
    if (!token) return;
    this.listLoading.set(true);
    this.fieldErrors = {};
    this.globalError.set('');
    this.listSuccess.set(false);
    try {
      const body: any = {
        creditsOffered: parseFloat(this.listForm.creditsOffered),
        askPricePerCredit: parseFloat(this.listForm.askPricePerCredit),
      };
      if (this.listForm.description) body['description'] = this.listForm.description;
      const res = await fetch(`${API_BASE}/marketplace/listings`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.validationErrors && Object.keys(data.validationErrors).length > 0) {
          this.fieldErrors = data.validationErrors;
        } else {
          this.globalError.set(data.message || 'Something went wrong. Please try again.');
        }
        return;
      }
      this.listSuccess.set(true);
      this.listForm = { creditsOffered: '', askPricePerCredit: '', description: '' };
      await this.loadDashboard();
      setTimeout(() => this.tab.set('dashboard'), 1200);
    } catch { this.globalError.set('Network error. Check your connection.'); }
    finally { this.listLoading.set(false); }
  }

  goBack(): void { this.router.navigate(['/dashboard']); }
  statusClass(s: string): string {
    return ({ UNDER_CAP: 'under-cap', OVER_CAP: 'over-cap', AT_CAP: 'at-cap' } as any)[s] ?? '';
  }
}
