import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarbonApiService } from '../../../../core/services/carbon-api.service';
import { AuthService } from '../../../../core/services/auth.service';
import { MarketplaceListing, CreateListingRequest } from '../../../../models/carbon.models';

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="shell">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-brand">
          <span class="brand-icon">🌿</span>
          <div>
            <div class="brand-name">CarbonChain</div>
            <div class="brand-role">Marketplace</div>
          </div>
        </div>
        <nav class="sidebar-nav">
          <button class="nav-item" (click)="back()">← Back to Dashboard</button>
          <button class="nav-item" [class.active]="tab() === 'browse'" (click)="tab.set('browse')">🛒 Browse Listings</button>
          <button class="nav-item" [class.active]="tab() === 'sell'" (click)="tab.set('sell')">📤 List Credits</button>
          <button class="nav-item" [class.active]="tab() === 'mylistings'" (click)="loadMyListings()">📋 My Listings</button>
        </nav>
        <div class="sidebar-balance">
          <span class="balance-label">Your Balance</span>
          <span class="balance-value">{{ auth.currentUser()?.creditBalance | number:'1.2-2' }} CCT</span>
        </div>
        <button class="btn-logout" (click)="auth.logout()">&#8592; Sign Out</button>
      </aside>

      <main class="main">
        <!-- Browse Tab -->
        @if (tab() === 'browse') {
          <div class="content">
            <div class="page-header">
              <h1>Carbon Credit Marketplace</h1>
              <p>Buy carbon credits from other industrial companies</p>
            </div>

            @if (loading()) {
              <div class="loading"><div class="spinner"></div></div>
            } @else if (listings().length === 0) {
              <div class="empty-state">
                <div class="empty-icon">🛒</div>
                <h3>No open listings</h3>
                <p>Be the first to list credits for sale</p>
                <button class="btn-primary" (click)="tab.set('sell')">List Credits</button>
              </div>
            } @else {
              <div class="listings-grid">
                @for (listing of listings(); track listing.id) {
                  <div class="listing-card">
                    <div class="listing-header">
                      <div class="seller-avatar">{{ listing.sellerCompanyName.charAt(0) }}</div>
                      <div>
                        <div class="seller-name">{{ listing.sellerCompanyName }}</div>
                        <div class="listing-id">Listing #{{ listing.id }}</div>
                      </div>
                      <span class="listing-status open">OPEN</span>
                    </div>

                    <div class="listing-metrics">
                      <div class="metric">
                        <span class="metric-label">Credits Available</span>
                        <span class="metric-value primary">{{ listing.creditsOffered | number:'1.2-2' }} CCT</span>
                      </div>
                      <div class="metric">
                        <span class="metric-label">Price per Credit</span>
                        <span class="metric-value">$&#8203;{{ listing.askPricePerCredit | number:'1.2-2' }}</span>
                      </div>
                      <div class="metric">
                        <span class="metric-label">Total Value</span>
                        <span class="metric-value bold">$&#8203;{{ listing.totalValue | number:'1.2-2' }}</span>
                      </div>
                      <div class="metric">
                        <span class="metric-label">Expires</span>
                        <span class="metric-value sm">{{ listing.expiresAt | date:'dd MMM yyyy' }}</span>
                      </div>
                    </div>

                    @if (listing.description) {
                      <p class="listing-desc">{{ listing.description }}</p>
                    }

                    <button
                      class="btn-buy"
                      [disabled]="buying() === listing.id"
                      (click)="buyListing(listing)">
                      @if (buying() === listing.id) { <span class="spin"></span> Processing... }
                      @else { Purchase Credits }
                    </button>
                  </div>
                }
              </div>
            }

            @if (buySuccess()) {
              <div class="toast success">
                Purchase complete! TX: <span class="hash">{{ truncate(buySuccess()!) }}</span>
                <button (click)="buySuccess.set(null)">&#10005;</button>
              </div>
            }
            @if (buyError()) {
              <div class="toast error">{{ buyError() }}<button (click)="buyError.set('')">&#10005;</button></div>
            }
          </div>
        }

        <!-- Sell Tab -->
        @if (tab() === 'sell') {
          <div class="content">
            <div class="page-header">
              <h1>List Credits for Sale</h1>
              <p>Offer your surplus carbon credits on the peer-to-peer marketplace</p>
            </div>

            <div class="form-card">
              <form [formGroup]="listingForm" (ngSubmit)="submitListing()">
                <div class="form-row">
                  <div class="form-group">
                    <label>Credits to Offer (CCT)</label>
                    <input type="number" step="0.01" formControlName="creditsOffered" placeholder="e.g. 100" />
                    @if (listingForm.get('creditsOffered')?.invalid && listingForm.get('creditsOffered')?.touched) {
                      <span class="err">Enter a valid positive amount</span>
                    }
                  </div>
                  <div class="form-group">
                    <label>Ask Price per Credit (USD)</label>
                    <input type="number" step="0.01" formControlName="askPricePerCredit" placeholder="e.g. 25.00" />
                    @if (listingForm.get('askPricePerCredit')?.invalid && listingForm.get('askPricePerCredit')?.touched) {
                      <span class="err">Enter a valid price</span>
                    }
                  </div>
                </div>

                <!-- Live price preview via computed signal - no null risk -->
                @if (previewTotal() > 0) {
                  <div class="preview-box">
                    <span class="preview-label">Total Listing Value:</span>
                    <span class="preview-value">USD {{ previewTotal() | number:'1.2-2' }}</span>
                  </div>
                }

                <div class="form-group">
                  <label>Description (optional)</label>
                  <input type="text" formControlName="description" placeholder="e.g. Surplus credits from Q1 under-cap period" />
                </div>

                @if (listingSuccess()) {
                  <div class="alert-success">Listing created! Listing ID: #{{ listingSuccess()!.id }}</div>
                }
                @if (listingError()) {
                  <div class="alert-error">{{ listingError() }}</div>
                }

                <button type="submit" class="btn-primary" [disabled]="submittingListing()">
                  @if (submittingListing()) { <span class="spin"></span> Creating listing... }
                  @else { Create Listing }
                </button>
              </form>
            </div>
          </div>
        }

        <!-- My Listings Tab -->
        @if (tab() === 'mylistings') {
          <div class="content">
            <div class="page-header">
              <h1>My Active Listings</h1>
              <p>Credits you are currently offering for sale</p>
            </div>

            @if (myListings().length === 0) {
              <div class="empty-state">
                <div class="empty-icon">📋</div>
                <h3>No active listings</h3>
                <p>List your surplus credits to earn from the marketplace</p>
                <button class="btn-primary" (click)="tab.set('sell')">Create Listing</button>
              </div>
            } @else {
              <div class="listings-grid">
                @for (l of myListings(); track l.id) {
                  <div class="listing-card">
                    <div class="listing-header">
                      <div>
                        <div class="seller-name">Listing #{{ l.id }}</div>
                        <div class="listing-id">{{ l.listedAt | date:'dd MMM yyyy' }}</div>
                      </div>
                      <span class="listing-status open">{{ l.status }}</span>
                    </div>
                    <div class="listing-metrics">
                      <div class="metric">
                        <span class="metric-label">Credits</span>
                        <span class="metric-value primary">{{ l.creditsOffered | number:'1.2-2' }} CCT</span>
                      </div>
                      <div class="metric">
                        <span class="metric-label">Ask Price</span>
                        <span class="metric-value">USD {{ l.askPricePerCredit | number:'1.2-2' }}</span>
                      </div>
                    </div>
                    <button class="btn-cancel" (click)="cancelListing(l.id)" [disabled]="cancelling() === l.id">
                      @if (cancelling() === l.id) { Cancelling... } @else { Cancel Listing }
                    </button>
                  </div>
                }
              </div>
            }
          </div>
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
    .sidebar-balance { background: rgba(255,255,255,0.08); border-radius: 8px; padding: 0.75rem; margin-bottom: 1rem; }
    .balance-label { display: block; font-size: 0.7rem; color: #86efac; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem; }
    .balance-value { font-size: 1.1rem; font-weight: 700; }
    .btn-logout { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.7); padding: 0.65rem; border-radius: 8px; cursor: pointer; font-size: 0.875rem; }
    .main { flex: 1; padding: 2rem; overflow-y: auto; }
    .loading { display: flex; justify-content: center; padding: 4rem; }
    .spinner { width: 40px; height: 40px; border: 3px solid #e5e7eb; border-top-color: #16a34a; border-radius: 50%; animation: spin 0.8s linear infinite; }
    .spin { width: 14px; height: 14px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.7s linear infinite; display: inline-block; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .content { max-width: 1100px; }
    .page-header { margin-bottom: 1.75rem; }
    .page-header h1 { font-size: 1.625rem; font-weight: 700; color: #111827; margin: 0 0 0.25rem; }
    .page-header p { color: #6b7280; font-size: 0.9rem; margin: 0; }
    .empty-state { text-align: center; padding: 4rem 2rem; background: white; border-radius: 12px; }
    .empty-icon { font-size: 3rem; margin-bottom: 1rem; }
    .empty-state h3 { font-size: 1.125rem; color: #111827; margin: 0 0 0.5rem; }
    .empty-state p { color: #6b7280; margin: 0 0 1.5rem; }
    .listings-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem; }
    .listing-card { background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.08); display: flex; flex-direction: column; gap: 1rem; }
    .listing-header { display: flex; align-items: center; gap: 0.75rem; }
    .seller-avatar { width: 38px; height: 38px; background: #0d3d24; color: white; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; }
    .seller-name { font-weight: 600; color: #111827; font-size: 0.9rem; }
    .listing-id { font-size: 0.75rem; color: #9ca3af; }
    .listing-status { margin-left: auto; padding: 0.2rem 0.6rem; border-radius: 9999px; font-size: 0.68rem; font-weight: 700; }
    .listing-status.open { background: #dcfce7; color: #15803d; }
    .listing-metrics { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    .metric { display: flex; flex-direction: column; gap: 0.15rem; }
    .metric-label { font-size: 0.7rem; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.04em; }
    .metric-value { font-size: 0.9rem; font-weight: 600; color: #111827; }
    .metric-value.primary { color: #16a34a; }
    .metric-value.bold { font-size: 1rem; }
    .metric-value.sm { font-size: 0.8rem; font-weight: 400; }
    .listing-desc { font-size: 0.8125rem; color: #6b7280; margin: 0; }
    .btn-buy { background: #16a34a; color: white; border: none; border-radius: 8px; padding: 0.65rem; font-size: 0.875rem; font-weight: 600; cursor: pointer; width: 100%; display: flex; align-items: center; justify-content: center; gap: 0.5rem; transition: background 0.2s; }
    .btn-buy:hover:not(:disabled) { background: #15803d; }
    .btn-buy:disabled { opacity: 0.6; cursor: not-allowed; }
    .btn-cancel { background: #fee2e2; color: #b91c1c; border: none; border-radius: 8px; padding: 0.55rem; font-size: 0.8rem; font-weight: 600; cursor: pointer; width: 100%; transition: background 0.2s; }
    .btn-cancel:hover:not(:disabled) { background: #fecaca; }
    .btn-cancel:disabled { opacity: 0.6; cursor: not-allowed; }
    .btn-primary { background: #16a34a; color: white; border: none; border-radius: 8px; padding: 0.75rem 2rem; font-size: 0.9rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; transition: background 0.2s; }
    .btn-primary:hover:not(:disabled) { background: #15803d; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    .form-card { background: white; border-radius: 12px; padding: 2rem; max-width: 600px; box-shadow: 0 1px 3px rgba(0,0,0,0.07); }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .form-group { margin-bottom: 1.25rem; }
    .form-group label { display: block; font-size: 0.8rem; font-weight: 600; color: #374151; margin-bottom: 0.35rem; }
    .form-group input { width: 100%; padding: 0.65rem 0.875rem; border: 1.5px solid #d1d5db; border-radius: 8px; font-size: 0.9rem; outline: none; box-sizing: border-box; transition: border-color 0.2s; }
    .form-group input:focus { border-color: #16a34a; box-shadow: 0 0 0 3px rgba(22,163,74,0.1); }
    .err { font-size: 0.75rem; color: #dc2626; display: block; margin-top: 0.2rem; }
    .preview-box { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 0.875rem; display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
    .preview-label { font-size: 0.875rem; color: #15803d; font-weight: 500; }
    .preview-value { font-size: 1.125rem; font-weight: 700; color: #15803d; }
    .alert-success { background: #dcfce7; border: 1px solid #86efac; color: #14532d; border-radius: 8px; padding: 0.875rem; margin-bottom: 1rem; font-size: 0.875rem; }
    .alert-error { background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; border-radius: 8px; padding: 0.875rem; margin-bottom: 1rem; font-size: 0.875rem; }
    .toast { position: fixed; bottom: 2rem; right: 2rem; padding: 1rem 1.25rem; border-radius: 10px; display: flex; align-items: center; gap: 0.75rem; font-size: 0.875rem; box-shadow: 0 8px 24px rgba(0,0,0,0.15); z-index: 999; max-width: 420px; }
    .toast.success { background: #dcfce7; color: #14532d; border: 1px solid #86efac; }
    .toast.error { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
    .toast button { background: none; border: none; font-size: 1.1rem; cursor: pointer; color: inherit; opacity: 0.6; margin-left: auto; padding: 0; line-height: 1; }
    .hash { font-family: monospace; font-size: 0.8rem; word-break: break-all; }
  `],
})
export class MarketplaceComponent implements OnInit {
  tab = signal('browse');
  loading = signal(true);
  listings = signal<MarketplaceListing[]>([]);
  myListings = signal<MarketplaceListing[]>([]);

  buying = signal<number | null>(null);
  buySuccess = signal<string | null>(null);
  buyError = signal('');

  submittingListing = signal(false);
  listingSuccess = signal<MarketplaceListing | null>(null);
  listingError = signal('');

  cancelling = signal<number | null>(null);

  listingForm = this.fb.group({
    creditsOffered: [null as number | null, [Validators.required, Validators.min(0.01)]],
    askPricePerCredit: [null as number | null, [Validators.required, Validators.min(0.01)]],
    description: [''],
  });

  /** Safe computed total — avoids null multiplication in template */
  previewTotal = computed<number>(() => {
    const credits = this.listingForm.get('creditsOffered')?.value;
    const price   = this.listingForm.get('askPricePerCredit')?.value;
    if (credits == null || price == null || credits <= 0 || price <= 0) return 0;
    return credits * price;
  });

  constructor(
    public auth: AuthService,
    private api: CarbonApiService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.api.getOpenListings().subscribe({
      next: (page) => { this.listings.set(page.content); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  buyListing(listing: MarketplaceListing): void {
    const companyId = this.auth.currentUser()?.id;
    if (!companyId) return;
    this.buying.set(listing.id);
    this.buyError.set('');
    this.buySuccess.set(null);

    this.api.fulfillListing(listing.id, { buyerCompanyId: companyId }).subscribe({
      next: (tx) => {
        this.buying.set(null);
        this.buySuccess.set(tx.blockchainTxHash ?? 'confirmed');
        this.listings.update((l) => l.filter((x) => x.id !== listing.id));
      },
      error: (err) => {
        this.buying.set(null);
        this.buyError.set(err.error?.message || 'Purchase failed. Please try again.');
      },
    });
  }

  submitListing(): void {
    if (this.listingForm.invalid) { this.listingForm.markAllAsTouched(); return; }
    this.submittingListing.set(true);
    this.listingSuccess.set(null);
    this.listingError.set('');

    const raw = this.listingForm.value;
    const req: CreateListingRequest = {
      creditsOffered: raw.creditsOffered!,
      askPricePerCredit: raw.askPricePerCredit!,
      description: raw.description ?? undefined,
    };

    this.api.createListing(req).subscribe({
      next: (l) => {
        this.submittingListing.set(false);
        this.listingSuccess.set(l);
        this.listingForm.reset();
      },
      error: (err) => {
        this.submittingListing.set(false);
        this.listingError.set(err.error?.message || 'Failed to create listing.');
      },
    });
  }

  loadMyListings(): void {
    this.tab.set('mylistings');
    const companyId = this.auth.currentUser()?.id;
    if (!companyId) return;
    this.api.getOpenListings().subscribe((page) => {
      this.myListings.set(page.content.filter((l) => l.sellerCompanyId === companyId));
    });
  }

  cancelListing(listingId: number): void {
    this.cancelling.set(listingId);
    this.api.cancelListing(listingId).subscribe({
      next: () => {
        this.cancelling.set(null);
        this.myListings.update((l) => l.filter((x) => x.id !== listingId));
      },
      error: () => this.cancelling.set(null),
    });
  }

  back(): void {
    const role = this.auth.currentUser()?.role;
    this.router.navigate([role === 'ADMIN' ? '/admin' : '/dashboard']);
  }

  truncate(hash?: string): string {
    if (!hash) return '';
    return hash.length > 16 ? hash.slice(0, 10) + '...' + hash.slice(-6) : hash;
  }
}
