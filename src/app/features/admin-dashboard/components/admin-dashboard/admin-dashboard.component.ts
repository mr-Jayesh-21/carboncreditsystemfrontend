import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { CarbonApiService } from '../../../../core/services/carbon-api.service';
import { AuthService } from '../../../../core/services/auth.service';
import {
  AdminDashboard, CompanyProfile,
  EmissionLog, EmissionLogRequest,
} from '../../../../models/carbon.models';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="admin-shell">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-brand">
          <span class="brand-icon">🌿</span>
          <div>
            <div class="brand-name">CarbonChain</div>
            <div class="brand-role">Admin Portal</div>
          </div>
        </div>

        <nav class="sidebar-nav">
          <button class="nav-item" [class.active]="activeTab() === 'overview'" (click)="activeTab.set('overview')">
            <span>📊</span> Overview
          </button>
          <button class="nav-item" [class.active]="activeTab() === 'companies'" (click)="activeTab.set('companies')">
            <span>🏭</span> Companies
          </button>
          <button class="nav-item" [class.active]="activeTab() === 'emissions'" (click)="activeTab.set('emissions')">
            <span>💨</span> Emissions
          </button>
          <button class="nav-item" [class.active]="activeTab() === 'record'" (click)="activeTab.set('record')">
            <span>➕</span> Record Emission
          </button>
          <button class="nav-item" [class.active]="activeTab() === 'transactions'" (click)="activeTab.set('transactions')">
            <span>🔗</span> Transactions
          </button>
        </nav>

        <button class="btn-logout" (click)="logout()">⬅ Sign Out</button>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        @if (loading()) {
          <div class="loading-overlay">
            <div class="spinner-large"></div>
            <p>Loading dashboard data...</p>
          </div>
        }

        <!-- Overview Tab -->
        @if (activeTab() === 'overview' && dashboard()) {
          <div class="tab-content">
            <div class="page-header">
              <h1>Platform Overview</h1>
              <p>Real-time carbon credit metrics across all registered companies</p>
            </div>

            <div class="kpi-grid">
              <div class="kpi-card">
                <div class="kpi-icon blue">🏭</div>
                <div class="kpi-value">{{ dashboard()!.totalCompanies }}</div>
                <div class="kpi-label">Registered Companies</div>
              </div>
              <div class="kpi-card">
                <div class="kpi-icon green">🌿</div>
                <div class="kpi-value">{{ dashboard()!.totalCreditsInCirculation | number:'1.0-0' }}</div>
                <div class="kpi-label">Credits in Circulation</div>
              </div>
              <div class="kpi-card">
                <div class="kpi-icon orange">💨</div>
                <div class="kpi-value">{{ dashboard()!.totalEmissionsThisQuarter | number:'1.0-0' }}</div>
                <div class="kpi-label">Quarterly Emissions (t CO₂)</div>
              </div>
              <div class="kpi-card">
                <div class="kpi-icon purple">🔗</div>
                <div class="kpi-value">{{ dashboard()!.totalTransactions }}</div>
                <div class="kpi-label">Blockchain Transactions</div>
              </div>
              <div class="kpi-card">
                <div class="kpi-icon teal">🛒</div>
                <div class="kpi-value">{{ dashboard()!.openMarketListings }}</div>
                <div class="kpi-label">Open Market Listings</div>
              </div>
              <div class="kpi-card">
                <div class="kpi-icon red">⚠️</div>
                <div class="kpi-value">{{ dashboard()!.companiesOverCap }}</div>
                <div class="kpi-label">Companies Over Cap</div>
              </div>
            </div>

            <div class="compliance-bar">
              <h3>Quarterly Compliance Rate</h3>
              <div class="bar-track">
                <div class="bar-fill" [style.width.%]="compliancePercent()"></div>
              </div>
              <span class="bar-label">{{ compliancePercent() | number:'1.0-1' }}% compliant</span>
            </div>

            <!-- Recent Transactions -->
            <div class="section-card">
              <h3>Recent Blockchain Transactions</h3>
              <div class="table-wrap">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>Type</th><th>Credits</th><th>From</th><th>To</th>
                      <th>TX Hash</th><th>Status</th><th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (tx of dashboard()!.recentTransactions; track tx.id) {
                      <tr>
                        <td><span class="badge" [class]="txClass(tx.transactionType)">{{ tx.transactionType }}</span></td>
                        <td class="mono">{{ tx.creditAmount | number:'1.2-2' }}</td>
                        <td>{{ tx.fromCompanyName || '—' }}</td>
                        <td>{{ tx.toCompanyName || '—' }}</td>
                        <td><span class="hash" [title]="tx.blockchainTxHash || ''">{{ truncateHash(tx.blockchainTxHash) }}</span></td>
                        <td><span class="status-dot" [class]="tx.status.toLowerCase()"></span>{{ tx.status }}</td>
                        <td class="date">{{ tx.createdAt | date:'dd MMM, HH:mm' }}</td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }

        <!-- Companies Tab -->
        @if (activeTab() === 'companies' && dashboard()) {
          <div class="tab-content">
            <div class="page-header">
              <h1>Industrial Companies</h1>
              <p>Emission caps, credit balances and compliance status</p>
            </div>
            <div class="company-grid">
              @for (c of dashboard()!.companySummaries; track c.id) {
                <div class="company-card" (click)="selectCompany(c.id)">
                  <div class="company-header">
                    <div class="company-avatar">{{ c.companyCode.charAt(0) }}</div>
                    <div>
                      <div class="company-name">{{ c.companyName }}</div>
                      <div class="company-industry">{{ c.industry }}</div>
                    </div>
                    <span class="compliance-badge" [class]="c.complianceStatus.toLowerCase().replace('_','-')">
                      {{ c.complianceStatus }}
                    </span>
                  </div>
                  <div class="company-metrics">
                    <div class="metric">
                      <span class="metric-label">Annual Cap</span>
                      <span class="metric-value">{{ c.emissionCapTonnes | number }} t</span>
                    </div>
                    <div class="metric">
                      <span class="metric-label">Credits Balance</span>
                      <span class="metric-value green">{{ c.creditBalance | number:'1.2-2' }}</span>
                    </div>
                    <div class="metric">
                      <span class="metric-label">Q Emissions</span>
                      <span class="metric-value">{{ c.totalEmissionsThisQuarter | number:'1.0-0' }} t</span>
                    </div>
                    <div class="metric">
                      <span class="metric-label">Compliance</span>
                      <span class="metric-value">{{ c.complianceRate }}%</span>
                    </div>
                  </div>
                  <div class="emission-progress">
                    <div class="progress-track">
                      <div class="progress-fill"
                        [style.width.%]="Math.min((c.totalEmissionsThisQuarter / (c.emissionCapTonnes / 4)) * 100, 100)"
                        [class.over]="c.totalEmissionsThisQuarter > c.emissionCapTonnes / 4">
                      </div>
                    </div>
                    <span class="progress-label">{{ Math.min((c.totalEmissionsThisQuarter / (c.emissionCapTonnes / 4)) * 100, 100) | number:'1.0-0' }}% of quarterly cap</span>
                  </div>
                </div>
              }
            </div>
          </div>
        }

        <!-- Emissions Tab -->
        @if (activeTab() === 'emissions' && dashboard()) {
          <div class="tab-content">
            <div class="page-header">
              <h1>Emission Logs</h1>
              <p>Quarterly emission records with blockchain verification</p>
            </div>
            <div class="section-card">
              <div class="table-wrap">
                <table class="data-table">
                  <thead>
                    <tr>
                      <th>Company</th><th>Month</th><th>Actual (t CO₂)</th>
                      <th>Cap (t CO₂)</th><th>Deviation</th><th>Credits Adj.</th>
                      <th>Status</th><th>Source</th><th>TX Hash</th>
                    </tr>
                  </thead>
                  <tbody>
                    @for (log of allEmissions(); track log.id) {
                      <tr>
                        <td class="bold">{{ log.companyName }}</td>
                        <td>{{ log.reportingMonth }}</td>
                        <td class="mono">{{ log.actualEmissionsTonnes | number:'1.1-1' }}</td>
                        <td class="mono">{{ log.periodCapTonnes | number:'1.1-1' }}</td>
                        <td class="mono" [class.red-text]="log.deviationTonnes > 0" [class.green-text]="log.deviationTonnes < 0">
                          {{ log.deviationTonnes > 0 ? '+' : '' }}{{ log.deviationTonnes | number:'1.1-1' }}
                        </td>
                        <td class="mono" [class.green-text]="log.creditsAdjusted > 0" [class.red-text]="log.creditsAdjusted < 0">
                          {{ log.creditsAdjusted > 0 ? '+' : '' }}{{ log.creditsAdjusted | number:'1.2-2' }}
                        </td>
                        <td><span class="badge" [class]="statusClass(log.status)">{{ log.status }}</span></td>
                        <td>{{ log.emissionSource }}</td>
                        <td><span class="hash">{{ truncateHash(log.blockchainTxHash) }}</span></td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }

        <!-- Record Emission Tab -->
        @if (activeTab() === 'record') {
          <div class="tab-content">
            <div class="page-header">
              <h1>Record Monthly Emission</h1>
              <p>Submit a company's emission report. Credits are minted or burned automatically via blockchain.</p>
            </div>
            <div class="form-card">
              <form [formGroup]="emissionForm" (ngSubmit)="submitEmission()">
                <div class="form-row">
                  <div class="form-group">
                    <label>Company</label>
                    <select formControlName="companyId">
                      <option value="" disabled>Select company</option>
                      @for (c of companies(); track c.id) {
                        <option [value]="c.id">{{ c.companyName }} ({{ c.companyCode }})</option>
                      }
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Reporting Month</label>
                    <input type="month" formControlName="reportingMonth" />
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label>Actual Emissions (tonnes CO₂)</label>
                    <input type="number" step="0.01" formControlName="actualEmissionsTonnes" placeholder="e.g. 950.5" />
                  </div>
                  <div class="form-group">
                    <label>Emission Source</label>
                    <input type="text" formControlName="emissionSource" placeholder="e.g. Blast Furnace" />
                  </div>
                </div>

                <div class="form-group">
                  <label>Activity Description</label>
                  <input type="text" formControlName="activityDescription" placeholder="e.g. Primary steel production cycle" />
                </div>

                @if (emissionResult()) {
                  <div class="alert-success">
                    ✅ Emission recorded! Status: <strong>{{ emissionResult()!.status }}</strong>
                    | Credits adjusted: <strong>{{ emissionResult()!.creditsAdjusted | number:'1.2-2' }}</strong>
                    | TX: <span class="hash">{{ truncateHash(emissionResult()!.blockchainTxHash) }}</span>
                  </div>
                }
                @if (emissionError()) {
                  <div class="alert-error">{{ emissionError() }}</div>
                }

                <button type="submit" class="btn-primary" [disabled]="submitting()">
                  @if (submitting()) { <span class="spinner"></span> Processing on blockchain... }
                  @else { Submit & Process Blockchain }
                </button>
              </form>
            </div>
          </div>
        }

        <!-- Transactions Tab -->
        @if (activeTab() === 'transactions' && dashboard()) {
          <div class="tab-content">
            <div class="page-header">
              <h1>All Transactions</h1>
              <p>Complete on-chain transaction history</p>
            </div>
            <div class="section-card">
              <div class="table-wrap">
                <table class="data-table">
                  <thead>
                    <tr><th>ID</th><th>Type</th><th>Amount</th><th>USD Value</th><th>From</th><th>To</th><th>Hash</th><th>Status</th><th>Date</th></tr>
                  </thead>
                  <tbody>
                    @for (tx of dashboard()!.recentTransactions; track tx.id) {
                      <tr>
                        <td class="mono">#{{ tx.id }}</td>
                        <td><span class="badge" [class]="txClass(tx.transactionType)">{{ tx.transactionType }}</span></td>
                        <td class="mono">{{ tx.creditAmount | number:'1.2-2' }} CCT</td>
                        <td class="mono">{{ tx.totalValueUsd ? ('$' + (tx.totalValueUsd | number:'1.2-2')) : '—' }}</td>
                        <td>{{ tx.fromCompanyName || '—' }}</td>
                        <td>{{ tx.toCompanyName || '—' }}</td>
                        <td><span class="hash">{{ truncateHash(tx.blockchainTxHash) }}</span></td>
                        <td><span class="status-dot" [class]="tx.status.toLowerCase()"></span>{{ tx.status }}</td>
                        <td class="date">{{ tx.createdAt | date:'dd MMM, HH:mm' }}</td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }
      </main>
    </div>
  `,
  styles: [`
    .admin-shell { display: flex; min-height: 100vh; background: #f3f4f6; font-family: 'Segoe UI', sans-serif; }
    .sidebar { width: 240px; background: #0d3d24; color: white; display: flex; flex-direction: column; padding: 1.5rem 1rem; position: sticky; top: 0; height: 100vh; flex-shrink: 0; }
    .sidebar-brand { display: flex; align-items: center; gap: 0.75rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 1.5rem; }
    .brand-icon { font-size: 1.75rem; }
    .brand-name { font-weight: 700; font-size: 1rem; }
    .brand-role { font-size: 0.7rem; color: #86efac; text-transform: uppercase; letter-spacing: 0.05em; }
    .sidebar-nav { flex: 1; display: flex; flex-direction: column; gap: 0.25rem; }
    .nav-item { background: none; border: none; color: rgba(255,255,255,0.7); text-align: left; padding: 0.65rem 0.875rem; border-radius: 8px; cursor: pointer; font-size: 0.875rem; display: flex; align-items: center; gap: 0.625rem; transition: all 0.15s; }
    .nav-item:hover, .nav-item.active { background: rgba(255,255,255,0.12); color: white; }
    .nav-item.active { background: rgba(22,163,74,0.3); color: #86efac; }
    .btn-logout { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.7); padding: 0.65rem; border-radius: 8px; cursor: pointer; font-size: 0.875rem; }
    .main-content { flex: 1; padding: 2rem; overflow-y: auto; position: relative; }
    .loading-overlay { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 50vh; gap: 1rem; color: #6b7280; }
    .spinner-large { width: 40px; height: 40px; border: 3px solid #e5e7eb; border-top-color: #16a34a; border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .tab-content { max-width: 1200px; }
    .page-header { margin-bottom: 1.75rem; }
    .page-header h1 { font-size: 1.625rem; font-weight: 700; color: #111827; margin: 0 0 0.25rem; }
    .page-header p { color: #6b7280; font-size: 0.9rem; margin: 0; }
    .kpi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem; }
    .kpi-card { background: white; border-radius: 12px; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.07); }
    .kpi-icon { font-size: 1.5rem; }
    .kpi-value { font-size: 1.875rem; font-weight: 700; color: #111827; }
    .kpi-label { font-size: 0.8rem; color: #6b7280; font-weight: 500; }
    .compliance-bar { background: white; border-radius: 12px; padding: 1.25rem; margin-bottom: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.07); }
    .compliance-bar h3 { margin: 0 0 0.75rem; font-size: 0.9rem; color: #374151; font-weight: 600; }
    .bar-track { height: 12px; background: #e5e7eb; border-radius: 6px; overflow: hidden; }
    .bar-fill { height: 100%; background: linear-gradient(90deg, #16a34a, #22c55e); border-radius: 6px; transition: width 0.6s ease; }
    .bar-label { font-size: 0.8rem; color: #6b7280; margin-top: 0.4rem; display: block; }
    .section-card { background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.07); margin-bottom: 1.5rem; }
    .section-card h3 { margin: 0 0 1rem; font-size: 1rem; color: #111827; font-weight: 600; }
    .table-wrap { overflow-x: auto; }
    .data-table { width: 100%; border-collapse: collapse; font-size: 0.8125rem; }
    .data-table th { text-align: left; padding: 0.625rem 0.75rem; background: #f9fafb; border-bottom: 1px solid #e5e7eb; color: #374151; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.03em; white-space: nowrap; }
    .data-table td { padding: 0.625rem 0.75rem; border-bottom: 1px solid #f3f4f6; color: #374151; }
    .data-table tr:last-child td { border-bottom: none; }
    .data-table tr:hover td { background: #f9fafb; }
    .mono { font-family: monospace; }
    .bold { font-weight: 600; }
    .hash { font-family: monospace; font-size: 0.75rem; color: #7c3aed; background: #f5f3ff; padding: 0.15rem 0.4rem; border-radius: 4px; }
    .date { white-space: nowrap; color: #6b7280; }
    .green-text { color: #16a34a; font-weight: 600; }
    .red-text { color: #dc2626; font-weight: 600; }
    .badge { padding: 0.2rem 0.5rem; border-radius: 9999px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; }
    .badge.mint { background: #dcfce7; color: #15803d; }
    .badge.burn { background: #fee2e2; color: #b91c1c; }
    .badge.trade { background: #dbeafe; color: #1d4ed8; }
    .badge.allocation { background: #f3e8ff; color: #6d28d9; }
    .badge.under-cap { background: #dcfce7; color: #15803d; }
    .badge.over-cap { background: #fee2e2; color: #b91c1c; }
    .badge.at-cap { background: #fef9c3; color: #854d0e; }
    .status-dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 5px; }
    .status-dot.confirmed { background: #16a34a; }
    .status-dot.pending { background: #f59e0b; }
    .status-dot.failed { background: #dc2626; }
    .company-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 1.25rem; }
    .company-card { background: white; border-radius: 12px; padding: 1.25rem; box-shadow: 0 1px 3px rgba(0,0,0,0.07); cursor: pointer; transition: box-shadow 0.2s; }
    .company-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.12); }
    .company-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
    .company-avatar { width: 40px; height: 40px; background: #0d3d24; color: white; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem; flex-shrink: 0; }
    .company-name { font-weight: 700; color: #111827; font-size: 0.9rem; }
    .company-industry { font-size: 0.75rem; color: #6b7280; }
    .compliance-badge { margin-left: auto; padding: 0.2rem 0.5rem; border-radius: 9999px; font-size: 0.65rem; font-weight: 700; text-transform: uppercase; }
    .compliance-badge.compliant { background: #dcfce7; color: #15803d; }
    .compliance-badge.warning { background: #fef3c7; color: #92400e; }
    .compliance-badge.non-compliant { background: #fee2e2; color: #b91c1c; }
    .company-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem; }
    .metric { display: flex; flex-direction: column; gap: 0.15rem; }
    .metric-label { font-size: 0.7rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.04em; }
    .metric-value { font-size: 0.9rem; font-weight: 600; color: #111827; }
    .metric-value.green { color: #16a34a; }
    .emission-progress {}
    .progress-track { height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden; margin-bottom: 0.25rem; }
    .progress-fill { height: 100%; background: #16a34a; border-radius: 4px; transition: width 0.5s ease; }
    .progress-fill.over { background: #dc2626; }
    .progress-label { font-size: 0.7rem; color: #6b7280; }
    .form-card { background: white; border-radius: 12px; padding: 2rem; max-width: 680px; box-shadow: 0 1px 3px rgba(0,0,0,0.07); }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .form-group { margin-bottom: 1.25rem; }
    .form-group label { display: block; font-size: 0.8rem; font-weight: 600; color: #374151; margin-bottom: 0.35rem; }
    .form-group input, .form-group select { width: 100%; padding: 0.65rem 0.875rem; border: 1.5px solid #d1d5db; border-radius: 8px; font-size: 0.9rem; outline: none; box-sizing: border-box; }
    .form-group input:focus, .form-group select:focus { border-color: #16a34a; }
    .btn-primary { padding: 0.75rem 2rem; background: #16a34a; color: white; border: none; border-radius: 8px; font-size: 0.9rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    .alert-success { background: #dcfce7; border: 1px solid #86efac; color: #14532d; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; font-size: 0.875rem; }
    .alert-error { background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; font-size: 0.875rem; }
    .spinner { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.7s linear infinite; }
  `],
})
export class AdminDashboardComponent implements OnInit {
  protected Math = Math;

  activeTab = signal<string>('overview');
  loading = signal(true);
  dashboard = signal<AdminDashboard | null>(null);
  allEmissions = signal<EmissionLog[]>([]);
  companies = signal<CompanyProfile[]>([]);
  submitting = signal(false);
  emissionResult = signal<EmissionLog | null>(null);
  emissionError = signal('');

  compliancePercent = computed(() => {
    const d = this.dashboard();
    if (!d || d.totalCompanies === 0) return 0;
    return ((d.companiesUnderCap) / d.totalCompanies) * 100;
  });

  emissionForm = this.fb.group({
    companyId: ['', Validators.required],
    reportingMonth: ['', Validators.required],
    actualEmissionsTonnes: [null, [Validators.required, Validators.min(0)]],
    emissionSource: [''],
    activityDescription: [''],
  });

  constructor(
    private api: CarbonApiService,
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    forkJoin({
      dashboard: this.api.getAdminDashboard(),
      emissions: this.api.getAllEmissions(),
      companies: this.api.getAllCompanies(),
    }).subscribe({
      next: ({ dashboard, emissions, companies }) => {
        this.dashboard.set(dashboard);
        this.allEmissions.set(emissions);
        this.companies.set(companies);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  submitEmission(): void {
    if (this.emissionForm.invalid) { this.emissionForm.markAllAsTouched(); return; }
    this.submitting.set(true);
    this.emissionResult.set(null);
    this.emissionError.set('');

    const raw = this.emissionForm.value;
    const payload: EmissionLogRequest = {
      companyId: Number(raw.companyId),
      reportingMonth: raw.reportingMonth + '-01',
      actualEmissionsTonnes: Number(raw.actualEmissionsTonnes),
      emissionSource: raw.emissionSource || undefined,
      activityDescription: raw.activityDescription || undefined,
    };

    this.api.recordEmission(payload).subscribe({
      next: (result) => {
        this.submitting.set(false);
        this.emissionResult.set(result);
        this.emissionForm.reset();
        this.api.getAdminDashboard().subscribe((d) => this.dashboard.set(d));
      },
      error: (err) => {
        this.submitting.set(false);
        this.emissionError.set(err.error?.message || 'Failed to record emission.');
      },
    });
  }

  selectCompany(id: number): void {
    this.router.navigate(['/admin/companies', id]);
  }

  logout(): void {
    this.auth.logout();
  }

  truncateHash(hash?: string): string {
    if (!hash) return '—';
    return hash.length > 14 ? hash.slice(0, 8) + '...' + hash.slice(-6) : hash;
  }

  txClass(type: string): string {
    return type.toLowerCase();
  }

  statusClass(status: string): string {
    const map: Record<string, string> = {
      UNDER_CAP: 'under-cap', OVER_CAP: 'over-cap', AT_CAP: 'at-cap',
    };
    return map[status] || '';
  }
}
