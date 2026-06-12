import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CarbonApiService } from '../../../../core/services/carbon-api.service';
import { AuthService } from '../../../../core/services/auth.service';
import { CompanyDashboard, EmissionLog, CarbonTransaction } from '../../../../models/carbon.models';

@Component({
  selector: 'app-company-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="shell">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-brand">
          <span class="brand-icon">🌿</span>
          <div>
            <div class="brand-name">CarbonChain</div>
            <div class="brand-role">{{ profile()?.companyCode }}</div>
          </div>
        </div>
        <nav class="sidebar-nav">
          <button class="nav-item" [class.active]="tab() === 'overview'" (click)="tab.set('overview')">📊 Overview</button>
          <button class="nav-item" [class.active]="tab() === 'emissions'" (click)="tab.set('emissions')">💨 My Emissions</button>
          <button class="nav-item" [class.active]="tab() === 'transactions'" (click)="tab.set('transactions')">🔗 Transactions</button>
          <button class="nav-item" (click)="goToMarket()">🛒 Marketplace</button>
          <button class="nav-item" (click)="goToCarbonChain()">📈 CarbonChain</button>
        </nav>
        <button class="btn-logout" (click)="logout()">⬅ Sign Out</button>
      </aside>

      <main class="main">
        @if (loading()) {
          <div class="loading"><div class="spinner-lg"></div><p>Fetching your data...</p></div>
        }

        @if (!loading() && data()) {
          <!-- Overview -->
          @if (tab() === 'overview') {
            <div class="content">
              <div class="page-header">
                <h1>Welcome, {{ profile()?.companyName }}</h1>
                <p>{{ profile()?.industry }} · {{ profile()?.country }}</p>
              </div>

              <!-- KPI cards -->
              <div class="kpi-row">
                <div class="kpi green">
                  <div class="kpi-icon">🌿</div>
                  <div class="kpi-num">{{ data()!.profile.creditBalance | number:'1.2-2' }}</div>
                  <div class="kpi-text">Credit Balance (CCT)</div>
                </div>
                <div class="kpi blue">
                  <div class="kpi-icon">💨</div>
                  <div class="kpi-num">{{ data()!.totalEmissionsThisQuarter | number:'1.0-0' }}</div>
                  <div class="kpi-text">Quarterly Emissions (t CO₂)</div>
                </div>
                <div class="kpi" [class]="data()!.remainingCap >= 0 ? 'teal' : 'red'">
                  <div class="kpi-icon">🎯</div>
                  <div class="kpi-num">{{ data()!.remainingCap | number:'1.0-0' }}</div>
                  <div class="kpi-text">Remaining Quarterly Cap</div>
                </div>
                <div class="kpi" [class]="data()!.complianceRate >= 80 ? 'green' : 'orange'">
                  <div class="kpi-icon">✅</div>
                  <div class="kpi-num">{{ data()!.complianceRate }}%</div>
                  <div class="kpi-text">Compliance Rate</div>
                </div>
              </div>

              <!-- Emission progress -->
              <div class="card" style="margin-bottom:1.25rem">
                <h3>Quarterly Emission Progress</h3>
                <div class="bar-wrap">
                  <div class="bar-track">
                    <div class="bar-fill"
                      [style.width.%]="capUsedPercent()"
                      [class.over]="capUsedPercent() > 100">
                    </div>
                  </div>
                  <span class="bar-pct">{{ capUsedPercent() | number:'1.0-0' }}% of cap used</span>
                </div>
                <div class="cap-detail">
                  <span>Used: <strong>{{ data()!.totalEmissionsThisQuarter | number:'1.1-1' }} t</strong></span>
                  <span>Cap: <strong>{{ (profile()?.emissionCapTonnes ?? 0) / 4 | number:'1.0-0' }} t/quarter</strong></span>
                </div>
              </div>

              <!-- Recent transactions -->
              <div class="card">
                <h3>Recent Transactions</h3>
                @if (data()!.transactionHistory.length === 0) {
                  <p class="empty">No transactions yet.</p>
                } @else {
                  <div class="tx-list">
                    @for (tx of data()!.transactionHistory.slice(0, 5); track tx.id) {
                      <div class="tx-row">
                        <span class="badge" [class]="txClass(tx.transactionType)">{{ tx.transactionType }}</span>
                        <span class="tx-amount">{{ tx.creditAmount | number:'1.2-2' }} CCT</span>
                        <span class="tx-desc">{{ tx.description || '—' }}</span>
                        <span class="tx-hash">{{ truncate(tx.blockchainTxHash) }}</span>
                        <span class="tx-date">{{ tx.createdAt | date:'dd MMM' }}</span>
                      </div>
                    }
                  </div>
                }
              </div>
            </div>
          }

          <!-- Emissions -->
          @if (tab() === 'emissions') {
            <div class="content">
              <div class="page-header">
                <h1>Emission History</h1>
                <p>Your monthly emission reports and blockchain records</p>
              </div>
              <div class="card">
                <div class="table-wrap">
                  <table class="tbl">
                    <thead>
                      <tr><th>Month</th><th>Actual (t)</th><th>Cap (t)</th><th>Deviation</th><th>Credits</th><th>Status</th><th>Source</th><th>TX Hash</th></tr>
                    </thead>
                    <tbody>
                      @for (log of data()!.emissionHistory; track log.id) {
                        <tr>
                          <td>{{ log.reportingMonth }}</td>
                          <td class="mono">{{ log.actualEmissionsTonnes | number:'1.1-1' }}</td>
                          <td class="mono">{{ log.periodCapTonnes | number:'1.1-1' }}</td>
                          <td class="mono" [class.g]="log.deviationTonnes < 0" [class.r]="log.deviationTonnes > 0">
                            {{ log.deviationTonnes > 0 ? '+' : '' }}{{ log.deviationTonnes | number:'1.1-1' }}
                          </td>
                          <td class="mono" [class.g]="log.creditsAdjusted > 0" [class.r]="log.creditsAdjusted < 0">
                            {{ log.creditsAdjusted > 0 ? '+' : '' }}{{ log.creditsAdjusted | number:'1.2-2' }}
                          </td>
                          <td><span class="badge" [class]="statusBadge(log.status)">{{ log.status }}</span></td>
                          <td>{{ log.emissionSource || '—' }}</td>
                          <td><span class="hash">{{ truncate(log.blockchainTxHash) }}</span></td>
                        </tr>
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          }

          <!-- Transactions -->
          @if (tab() === 'transactions') {
            <div class="content">
              <div class="page-header">
                <h1>My Transactions</h1>
                <p>All on-chain credit movements for your account</p>
              </div>
              <div class="card">
                @if (data()!.transactionHistory.length === 0) {
                  <p class="empty">No transactions yet. Head to the marketplace to trade credits.</p>
                } @else {
                  <div class="table-wrap">
                    <table class="tbl">
                      <thead>
                        <tr><th>Type</th><th>Amount</th><th>USD</th><th>Counterparty</th><th>Hash</th><th>Status</th><th>Date</th></tr>
                      </thead>
                      <tbody>
                        @for (tx of data()!.transactionHistory; track tx.id) {
                          <tr>
                            <td><span class="badge" [class]="txClass(tx.transactionType)">{{ tx.transactionType }}</span></td>
                            <td class="mono">{{ tx.creditAmount | number:'1.2-2' }} CCT</td>
                            <td class="mono">{{ tx.totalValueUsd ? ('$' + (tx.totalValueUsd | number:'1.2-2')) : '—' }}</td>
                            <td>{{ tx.fromCompanyName || tx.toCompanyName || '—' }}</td>
                            <td><span class="hash">{{ truncate(tx.blockchainTxHash) }}</span></td>
                            <td>{{ tx.status }}</td>
                            <td>{{ tx.createdAt | date:'dd MMM, HH:mm' }}</td>
                          </tr>
                        }
                      </tbody>
                    </table>
                  </div>
                }
              </div>
            </div>
          }
        }
      </main>
    </div>
  `,
  styles: [`
    .shell { display: flex; min-height: 100vh; background: #f3f4f6; font-family: 'Segoe UI', sans-serif; }
    .sidebar { width: 230px; background: #0d3d24; color: white; display: flex; flex-direction: column; padding: 1.5rem 1rem; position: sticky; top: 0; height: 100vh; flex-shrink: 0; }
    .sidebar-brand { display: flex; align-items: center; gap: 0.75rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.1); margin-bottom: 1.5rem; }
    .brand-icon { font-size: 1.75rem; }
    .brand-name { font-weight: 700; font-size: 1rem; }
    .brand-role { font-size: 0.7rem; color: #86efac; text-transform: uppercase; letter-spacing: 0.05em; }
    .sidebar-nav { flex: 1; display: flex; flex-direction: column; gap: 0.25rem; }
    .nav-item { background: none; border: none; color: rgba(255,255,255,0.7); text-align: left; padding: 0.65rem 0.875rem; border-radius: 8px; cursor: pointer; font-size: 0.875rem; transition: all 0.15s; }
    .nav-item:hover, .nav-item.active { background: rgba(255,255,255,0.12); color: white; }
    .nav-item.active { background: rgba(22,163,74,0.3); color: #86efac; }
    .btn-logout { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.7); padding: 0.65rem; border-radius: 8px; cursor: pointer; font-size: 0.875rem; }
    .main { flex: 1; padding: 2rem; overflow-y: auto; }
    .loading { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 50vh; gap: 1rem; color: #6b7280; }
    .spinner-lg { width: 40px; height: 40px; border: 3px solid #e5e7eb; border-top-color: #16a34a; border-radius: 50%; animation: spin 0.8s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .content { max-width: 1100px; }
    .page-header { margin-bottom: 1.75rem; }
    .page-header h1 { font-size: 1.625rem; font-weight: 700; color: #111827; margin: 0 0 0.25rem; }
    .page-header p { color: #6b7280; font-size: 0.9rem; margin: 0; }
    .kpi-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem; }
    .kpi { background: white; border-radius: 12px; padding: 1.25rem; box-shadow: 0 1px 3px rgba(0,0,0,0.07); border-left: 4px solid #e5e7eb; }
    .kpi.green { border-left-color: #16a34a; }
    .kpi.blue { border-left-color: #2563eb; }
    .kpi.teal { border-left-color: #0891b2; }
    .kpi.orange { border-left-color: #ea580c; }
    .kpi.red { border-left-color: #dc2626; }
    .kpi-icon { font-size: 1.25rem; margin-bottom: 0.5rem; }
    .kpi-num { font-size: 1.75rem; font-weight: 700; color: #111827; }
    .kpi-text { font-size: 0.78rem; color: #6b7280; margin-top: 0.2rem; }
    .card { background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.07); margin-bottom: 1.5rem; }
    .card h3 { margin: 0 0 1rem; font-size: 1rem; color: #111827; font-weight: 600; }
    .bar-wrap { margin-bottom: 0.5rem; }
    .bar-track { height: 12px; background: #e5e7eb; border-radius: 6px; overflow: hidden; }
    .bar-fill { height: 100%; background: #16a34a; border-radius: 6px; transition: width 0.5s; }
    .bar-fill.over { background: #dc2626; }
    .bar-pct { font-size: 0.8rem; color: #6b7280; }
    .cap-detail { display: flex; gap: 2rem; font-size: 0.875rem; color: #374151; margin-top: 0.5rem; }
    .tx-list { display: flex; flex-direction: column; gap: 0.5rem; }
    .tx-row { display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 0; border-bottom: 1px solid #f3f4f6; font-size: 0.8125rem; }
    .tx-row:last-child { border-bottom: none; }
    .tx-amount { font-weight: 600; color: #111827; }
    .tx-desc { flex: 1; color: #6b7280; }
    .tx-hash { font-family: monospace; font-size: 0.75rem; color: #7c3aed; background: #f5f3ff; padding: 0.1rem 0.35rem; border-radius: 4px; }
    .tx-date { color: #9ca3af; font-size: 0.75rem; white-space: nowrap; }
    .table-wrap { overflow-x: auto; }
    .tbl { width: 100%; border-collapse: collapse; font-size: 0.8125rem; }
    .tbl th { text-align: left; padding: 0.5rem 0.75rem; background: #f9fafb; border-bottom: 1px solid #e5e7eb; color: #374151; font-weight: 600; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.03em; white-space: nowrap; }
    .tbl td { padding: 0.5rem 0.75rem; border-bottom: 1px solid #f3f4f6; color: #374151; }
    .tbl tr:last-child td { border-bottom: none; }
    .mono { font-family: monospace; }
    .g { color: #16a34a; font-weight: 600; }
    .r { color: #dc2626; font-weight: 600; }
    .hash { font-family: monospace; font-size: 0.72rem; color: #7c3aed; background: #f5f3ff; padding: 0.15rem 0.35rem; border-radius: 4px; }
    .badge { padding: 0.2rem 0.5rem; border-radius: 9999px; font-size: 0.68rem; font-weight: 700; text-transform: uppercase; }
    .badge.mint { background: #dcfce7; color: #15803d; }
    .badge.burn { background: #fee2e2; color: #b91c1c; }
    .badge.trade { background: #dbeafe; color: #1d4ed8; }
    .badge.under-cap { background: #dcfce7; color: #15803d; }
    .badge.over-cap { background: #fee2e2; color: #b91c1c; }
    .badge.at-cap { background: #fef9c3; color: #854d0e; }
    .empty { color: #9ca3af; font-size: 0.875rem; }
  `],
})
export class CompanyDashboardComponent implements OnInit {
  tab = signal('overview');
  loading = signal(true);
  data = signal<CompanyDashboard | null>(null);
  profile = computed(() => this.data()?.profile ?? null);

  capUsedPercent = computed(() => {
    const d = this.data();
    if (!d) return 0;
    const quarterCap = (d.profile.emissionCapTonnes ?? 0) / 4;
    if (quarterCap === 0) return 0;
    return Math.min((d.totalEmissionsThisQuarter / quarterCap) * 100, 120);
  });

  constructor(
    private api: CarbonApiService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.api.getMyDashboard().subscribe({
      next: (d) => { this.data.set(d); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  goToMarket(): void { this.router.navigate(['/marketplace']); }
  goToCarbonChain(): void { this.router.navigate(['/dashboard/carbon-chain']); }
  logout(): void { this.auth.logout(); }

  truncate(hash?: string): string {
    if (!hash) return '—';
    return hash.length > 14 ? hash.slice(0, 8) + '...' + hash.slice(-6) : hash;
  }

  txClass(type: string): string { return type.toLowerCase(); }

  statusBadge(s: string): string {
    return { UNDER_CAP: 'under-cap', OVER_CAP: 'over-cap', AT_CAP: 'at-cap' }[s] ?? '';
  }
}
