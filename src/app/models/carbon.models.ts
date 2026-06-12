// ── Auth ──────────────────────────────────────────────────────────────────────

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  companyName: string;
  companyCode: string;
  industry: string;
  country: string;
  email: string;
  password: string;
  emissionCapTonnes: number;
  walletAddress?: string;
}

export interface AuthResponse {
  token: string;
  tokenType: string;
  profile: CompanyProfile;
}

// ── Company ───────────────────────────────────────────────────────────────────

export type CompanyRole = 'COMPANY' | 'ADMIN';

export interface CompanyProfile {
  id: number;
  companyCode: string;
  companyName: string;
  industry: string;
  country: string;
  email: string;
  role: CompanyRole;
  emissionCapTonnes: number;
  creditBalance: number;
  walletAddress?: string;
  createdAt: string;
}

export interface CompanySummary {
  id: number;
  companyCode: string;
  companyName: string;
  industry: string;
  emissionCapTonnes: number;
  creditBalance: number;
  totalEmissionsThisQuarter: number;
  complianceRate: number;
  complianceStatus: 'COMPLIANT' | 'WARNING' | 'NON_COMPLIANT';
}

// ── Emissions ─────────────────────────────────────────────────────────────────

export type EmissionStatus = 'UNDER_CAP' | 'OVER_CAP' | 'AT_CAP';

export interface EmissionLog {
  id: number;
  companyId: number;
  companyName: string;
  reportingMonth: string;
  actualEmissionsTonnes: number;
  periodCapTonnes: number;
  deviationTonnes: number;
  creditsAdjusted: number;
  status: EmissionStatus;
  blockchainTxHash?: string;
  emissionSource?: string;
  activityDescription?: string;
  recordedAt: string;
}

export interface EmissionLogRequest {
  companyId: number;
  reportingMonth: string;
  actualEmissionsTonnes: number;
  emissionSource?: string;
  activityDescription?: string;
}

// ── Transactions ──────────────────────────────────────────────────────────────

export type TransactionType = 'MINT' | 'BURN' | 'TRADE' | 'ALLOCATION' | 'OFFSET';
export type TransactionStatus = 'PENDING' | 'CONFIRMED' | 'FAILED' | 'REVERTED';

export interface CarbonTransaction {
  id: number;
  transactionType: TransactionType;
  creditAmount: number;
  pricePerCredit?: number;
  totalValueUsd?: number;
  fromCompanyName?: string;
  toCompanyName?: string;
  blockchainTxHash?: string;
  blockNumber?: number;
  status: TransactionStatus;
  description?: string;
  createdAt: string;
  confirmedAt?: string;
}

export interface TradeRequest {
  fromCompanyId: number;
  toCompanyId: number;
  creditAmount: number;
  pricePerCredit: number;
  description?: string;
}

// ── Marketplace ───────────────────────────────────────────────────────────────

export type ListingStatus = 'OPEN' | 'FULFILLED' | 'CANCELLED' | 'EXPIRED';

export interface MarketplaceListing {
  id: number;
  sellerCompanyId: number;
  sellerCompanyName: string;
  creditsOffered: number;
  askPricePerCredit: number;
  totalValue: number;
  status: ListingStatus;
  description?: string;
  listedAt: string;
  expiresAt: string;
}

export interface CreateListingRequest {
  sellerCompanyId?: number;
  creditsOffered: number;
  askPricePerCredit: number;
  description?: string;
}

export interface FulfillListingRequest {
  buyerCompanyId: number;
}

// ── Dashboards ────────────────────────────────────────────────────────────────

export interface AdminDashboard {
  totalCompanies: number;
  totalCreditsInCirculation: number;
  totalEmissionsThisQuarter: number;
  totalTransactions: number;
  openMarketListings: number;
  totalTradedValueUsd: number;
  companiesOverCap: number;
  companiesUnderCap: number;
  companySummaries: CompanySummary[];
  recentEmissionLogs: EmissionLog[];
  recentTransactions: CarbonTransaction[];
}

export interface CompanyDashboard {
  profile: CompanyProfile;
  totalEmissionsThisQuarter: number;
  remainingCap: number;
  complianceRate: number;
  emissionHistory: EmissionLog[];
  transactionHistory: CarbonTransaction[];
  activeListings: MarketplaceListing[];
}

// ── API Pagination ────────────────────────────────────────────────────────────

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  first: boolean;
  last: boolean;
}
