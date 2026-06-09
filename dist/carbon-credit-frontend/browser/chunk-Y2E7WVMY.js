import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-2EX4GL3V.js";
import {
  CarbonApiService
} from "./chunk-UKKCUMYG.js";
import {
  AuthService,
  CommonModule,
  DatePipe,
  DecimalPipe,
  Router,
  computed,
  forkJoin,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IH4TJUIT.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/admin-dashboard/components/admin-dashboard/admin-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminDashboardComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading dashboard data...");
    \u0275\u0275elementEnd()();
  }
}
function AdminDashboardComponent_Conditional_35_For_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 32);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 33);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275element(15, "span", 34);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 35);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.txClass(tx_r1.transactionType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r1.transactionType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 12, tx_r1.creditAmount, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r1.fromCompanyName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r1.toCompanyName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", tx_r1.blockchainTxHash || "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.truncateHash(tx_r1.blockchainTxHash));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(tx_r1.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 15, tx_r1.createdAt, "dd MMM, HH:mm"));
  }
}
function AdminDashboardComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "h1");
    \u0275\u0275text(3, "Platform Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Real-time carbon credit metrics across all registered companies");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "div", 15)(8, "div", 16);
    \u0275\u0275text(9, "\u{1F3ED}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 17);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18);
    \u0275\u0275text(13, "Registered Companies");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 15)(15, "div", 19);
    \u0275\u0275text(16, "\u{1F33F}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 17);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18);
    \u0275\u0275text(21, "Credits in Circulation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 15)(23, "div", 20);
    \u0275\u0275text(24, "\u{1F4A8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 17);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 18);
    \u0275\u0275text(29, "Quarterly Emissions (t CO\u2082)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 15)(31, "div", 21);
    \u0275\u0275text(32, "\u{1F517}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 17);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 18);
    \u0275\u0275text(36, "Blockchain Transactions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 15)(38, "div", 22);
    \u0275\u0275text(39, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 17);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 18);
    \u0275\u0275text(43, "Open Market Listings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 15)(45, "div", 23);
    \u0275\u0275text(46, "\u26A0\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 17);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 18);
    \u0275\u0275text(50, "Companies Over Cap");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 24)(52, "h3");
    \u0275\u0275text(53, "Quarterly Compliance Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 25);
    \u0275\u0275element(55, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 27);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 28)(60, "h3");
    \u0275\u0275text(61, "Recent Blockchain Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 29)(63, "table", 30)(64, "thead")(65, "tr")(66, "th");
    \u0275\u0275text(67, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "th");
    \u0275\u0275text(69, "Credits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "th");
    \u0275\u0275text(71, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "th");
    \u0275\u0275text(73, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th");
    \u0275\u0275text(75, "TX Hash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "th");
    \u0275\u0275text(77, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "th");
    \u0275\u0275text(79, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(80, "tbody");
    \u0275\u0275repeaterCreate(81, AdminDashboardComponent_Conditional_35_For_82_Template, 20, 18, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.dashboard().totalCompanies);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 9, ctx_r1.dashboard().totalCreditsInCirculation, "1.0-0"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(27, 12, ctx_r1.dashboard().totalEmissionsThisQuarter, "1.0-0"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.dashboard().totalTransactions);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.dashboard().openMarketListings);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.dashboard().companiesOverCap);
    \u0275\u0275advance(7);
    \u0275\u0275styleProp("width", ctx_r1.compliancePercent(), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(58, 15, ctx_r1.compliancePercent(), "1.0-1"), "% compliant");
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx_r1.dashboard().recentTransactions);
  }
}
function AdminDashboardComponent_Conditional_36_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function AdminDashboardComponent_Conditional_36_For_8_Template_div_click_0_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectCompany(c_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 39)(2, "div", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 41);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 42);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 43);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 44)(12, "div", 45)(13, "span", 46);
    \u0275\u0275text(14, "Annual Cap");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 47);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 45)(19, "span", 46);
    \u0275\u0275text(20, "Credits Balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 48);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 45)(25, "span", 46);
    \u0275\u0275text(26, "Q Emissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 47);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 45)(31, "span", 46);
    \u0275\u0275text(32, "Compliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 47);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 49)(36, "div", 50);
    \u0275\u0275element(37, "div", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 52);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r4.companyCode.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r4.companyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.industry);
    \u0275\u0275advance();
    \u0275\u0275classMap(c_r4.complianceStatus.toLowerCase().replace("_", "-"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r4.complianceStatus, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 15, c_r4.emissionCapTonnes), " t");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 17, c_r4.creditBalance, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(29, 20, c_r4.totalEmissionsThisQuarter, "1.0-0"), " t");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", c_r4.complianceRate, "%");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r1.Math.min(c_r4.totalEmissionsThisQuarter / (c_r4.emissionCapTonnes / 4) * 100, 100), "%");
    \u0275\u0275classProp("over", c_r4.totalEmissionsThisQuarter > c_r4.emissionCapTonnes / 4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(40, 23, ctx_r1.Math.min(c_r4.totalEmissionsThisQuarter / (c_r4.emissionCapTonnes / 4) * 100, 100), "1.0-0"), "% of quarterly cap");
  }
}
function AdminDashboardComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "h1");
    \u0275\u0275text(3, "Industrial Companies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Emission caps, credit balances and compliance status");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 36);
    \u0275\u0275repeaterCreate(7, AdminDashboardComponent_Conditional_36_For_8_Template, 41, 26, "div", 37, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.dashboard().companySummaries);
  }
}
function AdminDashboardComponent_Conditional_37_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 32);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 32);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 32);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 32);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 31);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "span", 54);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const log_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r5.companyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r5.reportingMonth);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 21, log_r5.actualEmissionsTonnes, "1.1-1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 24, log_r5.periodCapTonnes, "1.1-1"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("red-text", log_r5.deviationTonnes > 0)("green-text", log_r5.deviationTonnes < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", log_r5.deviationTonnes > 0 ? "+" : "", "", \u0275\u0275pipeBind2(13, 27, log_r5.deviationTonnes, "1.1-1"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("green-text", log_r5.creditsAdjusted > 0)("red-text", log_r5.creditsAdjusted < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", log_r5.creditsAdjusted > 0 ? "+" : "", "", \u0275\u0275pipeBind2(16, 30, log_r5.creditsAdjusted, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.statusClass(log_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r5.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r5.emissionSource);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.truncateHash(log_r5.blockchainTxHash));
  }
}
function AdminDashboardComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "h1");
    \u0275\u0275text(3, "Emission Logs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Quarterly emission records with blockchain verification");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 28)(7, "div", 29)(8, "table", 30)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Actual (t CO\u2082)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Cap (t CO\u2082)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Deviation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Credits Adj.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "TX Hash");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275repeaterCreate(30, AdminDashboardComponent_Conditional_37_For_31_Template, 25, 33, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(30);
    \u0275\u0275repeater(ctx_r1.allEmissions());
  }
}
function AdminDashboardComponent_Conditional_38_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 61);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275property("value", c_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", c_r7.companyName, " (", c_r7.companyCode, ")");
  }
}
function AdminDashboardComponent_Conditional_38_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275text(1, " \u2705 Emission recorded! Status: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " | Credits adjusted: ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " | TX: ");
    \u0275\u0275elementStart(9, "span", 54);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.emissionResult().status);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 3, ctx_r1.emissionResult().creditsAdjusted, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.truncateHash(ctx_r1.emissionResult().blockchainTxHash));
  }
}
function AdminDashboardComponent_Conditional_38_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.emissionError());
  }
}
function AdminDashboardComponent_Conditional_38_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 69);
    \u0275\u0275text(1, " Processing on blockchain... ");
  }
}
function AdminDashboardComponent_Conditional_38_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Submit & Process Blockchain ");
  }
}
function AdminDashboardComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "h1");
    \u0275\u0275text(3, "Record Monthly Emission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Submit a company's emission report. Credits are minted or burned automatically via blockchain.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 55)(7, "form", 56);
    \u0275\u0275listener("ngSubmit", function AdminDashboardComponent_Conditional_38_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitEmission());
    });
    \u0275\u0275elementStart(8, "div", 57)(9, "div", 58)(10, "label");
    \u0275\u0275text(11, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 59)(13, "option", 60);
    \u0275\u0275text(14, "Select company");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, AdminDashboardComponent_Conditional_38_For_16_Template, 2, 3, "option", 61, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 58)(18, "label");
    \u0275\u0275text(19, "Reporting Month");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 57)(22, "div", 58)(23, "label");
    \u0275\u0275text(24, "Actual Emissions (tonnes CO\u2082)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 58)(27, "label");
    \u0275\u0275text(28, "Emission Source");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 58)(31, "label");
    \u0275\u0275text(32, "Activity Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, AdminDashboardComponent_Conditional_38_Conditional_34_Template, 11, 6, "div", 66)(35, AdminDashboardComponent_Conditional_38_Conditional_35_Template, 2, 1, "div", 67);
    \u0275\u0275elementStart(36, "button", 68);
    \u0275\u0275template(37, AdminDashboardComponent_Conditional_38_Conditional_37_Template, 2, 0)(38, AdminDashboardComponent_Conditional_38_Conditional_38_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.emissionForm);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.companies());
    \u0275\u0275advance(19);
    \u0275\u0275conditional(34, ctx_r1.emissionResult() ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(35, ctx_r1.emissionError() ? 35 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(37, ctx_r1.submitting() ? 37 : 38);
  }
}
function AdminDashboardComponent_Conditional_39_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 32);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 32);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 54);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275element(20, "span", 34);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td", 35);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", tx_r8.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.txClass(tx_r8.transactionType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r8.transactionType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 13, tx_r8.creditAmount, "1.2-2"), " CCT");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r8.totalValueUsd ? "$" + \u0275\u0275pipeBind2(11, 16, tx_r8.totalValueUsd, "1.2-2") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r8.fromCompanyName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r8.toCompanyName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.truncateHash(tx_r8.blockchainTxHash));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(tx_r8.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r8.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 19, tx_r8.createdAt, "dd MMM, HH:mm"));
  }
}
function AdminDashboardComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "h1");
    \u0275\u0275text(3, "All Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Complete on-chain transaction history");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 28)(7, "div", 29)(8, "table", 30)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "USD Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "From");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "To");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Hash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "th");
    \u0275\u0275text(28, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "tbody");
    \u0275\u0275repeaterCreate(30, AdminDashboardComponent_Conditional_39_For_31_Template, 25, 22, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(30);
    \u0275\u0275repeater(ctx_r1.dashboard().recentTransactions);
  }
}
var AdminDashboardComponent = class _AdminDashboardComponent {
  constructor(api, auth, router, fb) {
    this.api = api;
    this.auth = auth;
    this.router = router;
    this.fb = fb;
    this.Math = Math;
    this.activeTab = signal("overview");
    this.loading = signal(true);
    this.dashboard = signal(null);
    this.allEmissions = signal([]);
    this.companies = signal([]);
    this.submitting = signal(false);
    this.emissionResult = signal(null);
    this.emissionError = signal("");
    this.compliancePercent = computed(() => {
      const d = this.dashboard();
      if (!d || d.totalCompanies === 0)
        return 0;
      return d.companiesUnderCap / d.totalCompanies * 100;
    });
    this.emissionForm = this.fb.group({
      companyId: ["", Validators.required],
      reportingMonth: ["", Validators.required],
      actualEmissionsTonnes: [null, [Validators.required, Validators.min(0)]],
      emissionSource: [""],
      activityDescription: [""]
    });
  }
  ngOnInit() {
    forkJoin({
      dashboard: this.api.getAdminDashboard(),
      emissions: this.api.getAllEmissions(),
      companies: this.api.getAllCompanies()
    }).subscribe({
      next: ({ dashboard, emissions, companies }) => {
        this.dashboard.set(dashboard);
        this.allEmissions.set(emissions);
        this.companies.set(companies);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  submitEmission() {
    if (this.emissionForm.invalid) {
      this.emissionForm.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    this.emissionResult.set(null);
    this.emissionError.set("");
    const raw = this.emissionForm.value;
    const payload = {
      companyId: Number(raw.companyId),
      reportingMonth: raw.reportingMonth + "-01",
      actualEmissionsTonnes: Number(raw.actualEmissionsTonnes),
      emissionSource: raw.emissionSource || void 0,
      activityDescription: raw.activityDescription || void 0
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
        this.emissionError.set(err.error?.message || "Failed to record emission.");
      }
    });
  }
  selectCompany(id) {
    this.router.navigate(["/admin/companies", id]);
  }
  logout() {
    this.auth.logout();
  }
  truncateHash(hash) {
    if (!hash)
      return "\u2014";
    return hash.length > 14 ? hash.slice(0, 8) + "..." + hash.slice(-6) : hash;
  }
  txClass(type) {
    return type.toLowerCase();
  }
  statusClass(status) {
    const map = {
      UNDER_CAP: "under-cap",
      OVER_CAP: "over-cap",
      AT_CAP: "at-cap"
    };
    return map[status] || "";
  }
  static {
    this.\u0275fac = function AdminDashboardComponent_Factory(t) {
      return new (t || _AdminDashboardComponent)(\u0275\u0275directiveInject(CarbonApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 40, vars: 16, consts: [[1, "admin-shell"], [1, "sidebar"], [1, "sidebar-brand"], [1, "brand-icon"], [1, "brand-name"], [1, "brand-role"], [1, "sidebar-nav"], [1, "nav-item", 3, "click"], [1, "btn-logout", 3, "click"], [1, "main-content"], [1, "loading-overlay"], [1, "tab-content"], [1, "spinner-large"], [1, "page-header"], [1, "kpi-grid"], [1, "kpi-card"], [1, "kpi-icon", "blue"], [1, "kpi-value"], [1, "kpi-label"], [1, "kpi-icon", "green"], [1, "kpi-icon", "orange"], [1, "kpi-icon", "purple"], [1, "kpi-icon", "teal"], [1, "kpi-icon", "red"], [1, "compliance-bar"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-label"], [1, "section-card"], [1, "table-wrap"], [1, "data-table"], [1, "badge"], [1, "mono"], [1, "hash", 3, "title"], [1, "status-dot"], [1, "date"], [1, "company-grid"], [1, "company-card"], [1, "company-card", 3, "click"], [1, "company-header"], [1, "company-avatar"], [1, "company-name"], [1, "company-industry"], [1, "compliance-badge"], [1, "company-metrics"], [1, "metric"], [1, "metric-label"], [1, "metric-value"], [1, "metric-value", "green"], [1, "emission-progress"], [1, "progress-track"], [1, "progress-fill"], [1, "progress-label"], [1, "bold"], [1, "hash"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["formControlName", "companyId"], ["value", "", "disabled", ""], [3, "value"], ["type", "month", "formControlName", "reportingMonth"], ["type", "number", "step", "0.01", "formControlName", "actualEmissionsTonnes", "placeholder", "e.g. 950.5"], ["type", "text", "formControlName", "emissionSource", "placeholder", "e.g. Blast Furnace"], ["type", "text", "formControlName", "activityDescription", "placeholder", "e.g. Primary steel production cycle"], [1, "alert-success"], [1, "alert-error"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "spinner"]], template: function AdminDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F33F}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "div", 4);
        \u0275\u0275text(7, "CarbonChain");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275text(9, "Admin Portal");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "nav", 6)(11, "button", 7);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_11_listener() {
          return ctx.activeTab.set("overview");
        });
        \u0275\u0275elementStart(12, "span");
        \u0275\u0275text(13, "\u{1F4CA}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, " Overview ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 7);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_15_listener() {
          return ctx.activeTab.set("companies");
        });
        \u0275\u0275elementStart(16, "span");
        \u0275\u0275text(17, "\u{1F3ED}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, " Companies ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 7);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_19_listener() {
          return ctx.activeTab.set("emissions");
        });
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21, "\u{1F4A8}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " Emissions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 7);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_23_listener() {
          return ctx.activeTab.set("record");
        });
        \u0275\u0275elementStart(24, "span");
        \u0275\u0275text(25, "\u2795");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " Record Emission ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "button", 7);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_27_listener() {
          return ctx.activeTab.set("transactions");
        });
        \u0275\u0275elementStart(28, "span");
        \u0275\u0275text(29, "\u{1F517}");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " Transactions ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "button", 8);
        \u0275\u0275listener("click", function AdminDashboardComponent_Template_button_click_31_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(32, "\u2B05 Sign Out");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "main", 9);
        \u0275\u0275template(34, AdminDashboardComponent_Conditional_34_Template, 4, 0, "div", 10)(35, AdminDashboardComponent_Conditional_35_Template, 83, 18, "div", 11)(36, AdminDashboardComponent_Conditional_36_Template, 9, 0, "div", 11)(37, AdminDashboardComponent_Conditional_37_Template, 32, 0, "div", 11)(38, AdminDashboardComponent_Conditional_38_Template, 39, 5, "div", 11)(39, AdminDashboardComponent_Conditional_39_Template, 32, 0, "div", 11);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275classProp("active", ctx.activeTab() === "overview");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.activeTab() === "companies");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.activeTab() === "emissions");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.activeTab() === "record");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.activeTab() === "transactions");
        \u0275\u0275advance(7);
        \u0275\u0275conditional(34, ctx.loading() ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(35, ctx.activeTab() === "overview" && ctx.dashboard() ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(36, ctx.activeTab() === "companies" && ctx.dashboard() ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(37, ctx.activeTab() === "emissions" && ctx.dashboard() ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(38, ctx.activeTab() === "record" ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(39, ctx.activeTab() === "transactions" && ctx.dashboard() ? 39 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.admin-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #f3f4f6;\n  font-family: "Segoe UI", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  background: #0d3d24;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem 1rem;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  flex-shrink: 0;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  margin-bottom: 1.5rem;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n}\n.brand-role[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #86efac;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.nav-item[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.7);\n  text-align: left;\n  padding: 0.65rem 0.875rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  transition: all 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover, .nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  color: white;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.3);\n  color: #86efac;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: rgba(255, 255, 255, 0.7);\n  padding: 0.65rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2rem;\n  overflow-y: auto;\n  position: relative;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  gap: 1rem;\n  color: #6b7280;\n}\n.spinner-large[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #16a34a;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.tab-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.625rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.25rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.kpi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.kpi-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.kpi-value[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #111827;\n}\n.kpi-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n  font-weight: 500;\n}\n.compliance-bar[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.25rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n}\n.compliance-bar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #374151;\n  font-weight: 600;\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 12px;\n  background: #e5e7eb;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #16a34a,\n      #22c55e);\n  border-radius: 6px;\n  transition: width 0.6s ease;\n}\n.bar-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n  margin-top: 0.4rem;\n  display: block;\n}\n.section-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n  margin-bottom: 1.5rem;\n}\n.section-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  color: #111827;\n  font-weight: 600;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\n.data-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 0.625rem 0.75rem;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  color: #374151;\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  white-space: nowrap;\n}\n.data-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.75rem;\n  border-bottom: 1px solid #f3f4f6;\n  color: #374151;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.data-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.hash[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.75rem;\n  color: #7c3aed;\n  background: #f5f3ff;\n  padding: 0.15rem 0.4rem;\n  border-radius: 4px;\n}\n.date[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: #6b7280;\n}\n.green-text[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n}\n.red-text[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 600;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.badge.mint[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.badge.burn[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.trade[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.allocation[_ngcontent-%COMP%] {\n  background: #f3e8ff;\n  color: #6d28d9;\n}\n.badge.under-cap[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.badge.over-cap[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.at-cap[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #854d0e;\n}\n.status-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.status-dot.confirmed[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.status-dot.pending[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.status-dot.failed[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.company-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));\n  gap: 1.25rem;\n}\n.company-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.25rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n  cursor: pointer;\n  transition: box-shadow 0.2s;\n}\n.company-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);\n}\n.company-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.company-avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background: #0d3d24;\n  color: white;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.company-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #111827;\n  font-size: 0.9rem;\n}\n.company-industry[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n}\n.compliance-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 0.2rem 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.compliance-badge.compliant[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.compliance-badge.warning[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.compliance-badge.non-compliant[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.company-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.metric[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #111827;\n}\n.metric-value.green[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.emission-progress[_ngcontent-%COMP%] {\n}\n.progress-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: #e5e7eb;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 0.25rem;\n}\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #16a34a;\n  border-radius: 4px;\n  transition: width 0.5s ease;\n}\n.progress-fill.over[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.progress-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #6b7280;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  max-width: 680px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.35rem;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.875rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  outline: none;\n  box-sizing: border-box;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #16a34a;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  background: #16a34a;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border: 1px solid #86efac;\n  color: #14532d;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n/*# sourceMappingURL=admin-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin-dashboard/components/admin-dashboard/admin-dashboard.component.ts", lineNumber: 420 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-Y2E7WVMY.js.map
