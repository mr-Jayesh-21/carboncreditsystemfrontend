import {
  CarbonApiService
} from "./chunk-UKKCUMYG.js";
import {
  AuthService,
  CommonModule,
  DatePipe,
  DecimalPipe,
  Router,
  RouterModule,
  computed,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-IH4TJUIT.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/company-dashboard/components/company-dashboard/company-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CompanyDashboardComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "div", 11);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Fetching your data...");
    \u0275\u0275elementEnd()();
  }
}
function CompanyDashboardComponent_Conditional_23_Conditional_0_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1, "No transactions yet.");
    \u0275\u0275elementEnd();
  }
}
function CompanyDashboardComponent_Conditional_23_Conditional_0_Conditional_62_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 31);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 32);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 35);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.txClass(tx_r1.transactionType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r1.transactionType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 7, tx_r1.creditAmount, "1.2-2"), " CCT");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r1.description || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.truncate(tx_r1.blockchainTxHash));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 10, tx_r1.createdAt, "dd MMM"));
  }
}
function CompanyDashboardComponent_Conditional_23_Conditional_0_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, CompanyDashboardComponent_Conditional_23_Conditional_0_Conditional_62_For_2_Template, 13, 13, "div", 30, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.data().transactionHistory.slice(0, 5));
  }
}
function CompanyDashboardComponent_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "h1");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 14)(7, "div", 15)(8, "div", 16);
    \u0275\u0275text(9, "\u{1F33F}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 17);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18);
    \u0275\u0275text(14, "Credit Balance (CCT)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 19)(16, "div", 16);
    \u0275\u0275text(17, "\u{1F4A8}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 17);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18);
    \u0275\u0275text(22, "Quarterly Emissions (t CO\u2082)");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 20)(24, "div", 16);
    \u0275\u0275text(25, "\u{1F3AF}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 17);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 18);
    \u0275\u0275text(30, "Remaining Quarterly Cap");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 20)(32, "div", 16);
    \u0275\u0275text(33, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 17);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 18);
    \u0275\u0275text(37, "Compliance Rate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 21)(39, "h3");
    \u0275\u0275text(40, "Quarterly Emission Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 22)(42, "div", 23);
    \u0275\u0275element(43, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 25);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 26)(48, "span");
    \u0275\u0275text(49, "Used: ");
    \u0275\u0275elementStart(50, "strong");
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "Cap: ");
    \u0275\u0275elementStart(55, "strong");
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "div", 27)(59, "h3");
    \u0275\u0275text(60, "Recent Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275template(61, CompanyDashboardComponent_Conditional_23_Conditional_0_Conditional_61_Template, 2, 0, "p", 28)(62, CompanyDashboardComponent_Conditional_23_Conditional_0_Conditional_62_Template, 3, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_14_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Welcome, ", (tmp_2_0 = ctx_r1.profile()) == null ? null : tmp_2_0.companyName, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (tmp_3_0 = ctx_r1.profile()) == null ? null : tmp_3_0.industry, " \xB7 ", (tmp_3_0 = ctx_r1.profile()) == null ? null : tmp_3_0.country, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 19, ctx_r1.data().profile.creditBalance, "1.2-2"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 22, ctx_r1.data().totalEmissionsThisQuarter, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.data().remainingCap >= 0 ? "teal" : "red");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(28, 25, ctx_r1.data().remainingCap, "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(ctx_r1.data().complianceRate >= 80 ? "green" : "orange");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.data().complianceRate, "%");
    \u0275\u0275advance(8);
    \u0275\u0275styleProp("width", ctx_r1.capUsedPercent(), "%");
    \u0275\u0275classProp("over", ctx_r1.capUsedPercent() > 100);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(46, 28, ctx_r1.capUsedPercent(), "1.0-0"), "% of cap used");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(52, 31, ctx_r1.data().totalEmissionsThisQuarter, "1.1-1"), " t");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(57, 34, ((tmp_14_0 = (tmp_14_0 = ctx_r1.profile()) == null ? null : tmp_14_0.emissionCapTonnes) !== null && tmp_14_0 !== void 0 ? tmp_14_0 : 0) / 4, "1.0-0"), " t/quarter");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(61, ctx_r1.data().transactionHistory.length === 0 ? 61 : 62);
  }
}
function CompanyDashboardComponent_Conditional_23_Conditional_1_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 38);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 38);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 38);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 38);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td")(16, "span", 31);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td")(21, "span", 39);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const log_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r3.reportingMonth);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 20, log_r3.actualEmissionsTonnes, "1.1-1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 23, log_r3.periodCapTonnes, "1.1-1"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("g", log_r3.deviationTonnes < 0)("r", log_r3.deviationTonnes > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", log_r3.deviationTonnes > 0 ? "+" : "", "", \u0275\u0275pipeBind2(11, 26, log_r3.deviationTonnes, "1.1-1"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("g", log_r3.creditsAdjusted > 0)("r", log_r3.creditsAdjusted < 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", log_r3.creditsAdjusted > 0 ? "+" : "", "", \u0275\u0275pipeBind2(14, 29, log_r3.creditsAdjusted, "1.2-2"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.statusBadge(log_r3.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r3.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(log_r3.emissionSource || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.truncate(log_r3.blockchainTxHash));
  }
}
function CompanyDashboardComponent_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "h1");
    \u0275\u0275text(3, "Emission History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Your monthly emission reports and blockchain records");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 27)(7, "div", 36)(8, "table", 37)(9, "thead")(10, "tr")(11, "th");
    \u0275\u0275text(12, "Month");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Actual (t)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Cap (t)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Deviation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Credits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th");
    \u0275\u0275text(26, "TX Hash");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, CompanyDashboardComponent_Conditional_23_Conditional_1_For_29_Template, 23, 32, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(28);
    \u0275\u0275repeater(ctx_r1.data().emissionHistory);
  }
}
function CompanyDashboardComponent_Conditional_23_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1, "No transactions yet. Head to the marketplace to trade credits.");
    \u0275\u0275elementEnd();
  }
}
function CompanyDashboardComponent_Conditional_23_Conditional_2_Conditional_8_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 38);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 38);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "span", 39);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tx_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.txClass(tx_r4.transactionType));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tx_r4.transactionType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 9, tx_r4.creditAmount, "1.2-2"), " CCT");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r4.totalValueUsd ? "$" + \u0275\u0275pipeBind2(9, 12, tx_r4.totalValueUsd, "1.2-2") : "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(tx_r4.fromCompanyName || tx_r4.toCompanyName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.truncate(tx_r4.blockchainTxHash));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tx_r4.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 15, tx_r4.createdAt, "dd MMM, HH:mm"));
  }
}
function CompanyDashboardComponent_Conditional_23_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "table", 37)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "USD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Counterparty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Hash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "tbody");
    \u0275\u0275repeaterCreate(19, CompanyDashboardComponent_Conditional_23_Conditional_2_Conditional_8_For_20_Template, 20, 18, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(19);
    \u0275\u0275repeater(ctx_r1.data().transactionHistory);
  }
}
function CompanyDashboardComponent_Conditional_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13)(2, "h1");
    \u0275\u0275text(3, "My Transactions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "All on-chain credit movements for your account");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 27);
    \u0275\u0275template(7, CompanyDashboardComponent_Conditional_23_Conditional_2_Conditional_7_Template, 2, 0, "p", 28)(8, CompanyDashboardComponent_Conditional_23_Conditional_2_Conditional_8_Template, 21, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(7, ctx_r1.data().transactionHistory.length === 0 ? 7 : 8);
  }
}
function CompanyDashboardComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CompanyDashboardComponent_Conditional_23_Conditional_0_Template, 63, 37, "div", 12)(1, CompanyDashboardComponent_Conditional_23_Conditional_1_Template, 30, 0, "div", 12)(2, CompanyDashboardComponent_Conditional_23_Conditional_2_Template, 9, 1, "div", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r1.tab() === "overview" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r1.tab() === "emissions" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ctx_r1.tab() === "transactions" ? 2 : -1);
  }
}
var CompanyDashboardComponent = class _CompanyDashboardComponent {
  constructor(api, auth, router) {
    this.api = api;
    this.auth = auth;
    this.router = router;
    this.tab = signal("overview");
    this.loading = signal(true);
    this.data = signal(null);
    this.profile = computed(() => this.data()?.profile ?? null);
    this.capUsedPercent = computed(() => {
      const d = this.data();
      if (!d)
        return 0;
      const quarterCap = (d.profile.emissionCapTonnes ?? 0) / 4;
      if (quarterCap === 0)
        return 0;
      return Math.min(d.totalEmissionsThisQuarter / quarterCap * 100, 120);
    });
  }
  ngOnInit() {
    this.api.getMyDashboard().subscribe({
      next: (d) => {
        this.data.set(d);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  goToMarket() {
    this.router.navigate(["/marketplace"]);
  }
  logout() {
    this.auth.logout();
  }
  truncate(hash) {
    if (!hash)
      return "\u2014";
    return hash.length > 14 ? hash.slice(0, 8) + "..." + hash.slice(-6) : hash;
  }
  txClass(type) {
    return type.toLowerCase();
  }
  statusBadge(s) {
    return { UNDER_CAP: "under-cap", OVER_CAP: "over-cap", AT_CAP: "at-cap" }[s] ?? "";
  }
  static {
    this.\u0275fac = function CompanyDashboardComponent_Factory(t) {
      return new (t || _CompanyDashboardComponent)(\u0275\u0275directiveInject(CarbonApiService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyDashboardComponent, selectors: [["app-company-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 9, consts: [[1, "shell"], [1, "sidebar"], [1, "sidebar-brand"], [1, "brand-icon"], [1, "brand-name"], [1, "brand-role"], [1, "sidebar-nav"], [1, "nav-item", 3, "click"], [1, "btn-logout", 3, "click"], [1, "main"], [1, "loading"], [1, "spinner-lg"], [1, "content"], [1, "page-header"], [1, "kpi-row"], [1, "kpi", "green"], [1, "kpi-icon"], [1, "kpi-num"], [1, "kpi-text"], [1, "kpi", "blue"], [1, "kpi"], [1, "card", 2, "margin-bottom", "1.25rem"], [1, "bar-wrap"], [1, "bar-track"], [1, "bar-fill"], [1, "bar-pct"], [1, "cap-detail"], [1, "card"], [1, "empty"], [1, "tx-list"], [1, "tx-row"], [1, "badge"], [1, "tx-amount"], [1, "tx-desc"], [1, "tx-hash"], [1, "tx-date"], [1, "table-wrap"], [1, "tbl"], [1, "mono"], [1, "hash"]], template: function CompanyDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F33F}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "div", 4);
        \u0275\u0275text(7, "CarbonChain");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "nav", 6)(11, "button", 7);
        \u0275\u0275listener("click", function CompanyDashboardComponent_Template_button_click_11_listener() {
          return ctx.tab.set("overview");
        });
        \u0275\u0275text(12, "\u{1F4CA} Overview");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275listener("click", function CompanyDashboardComponent_Template_button_click_13_listener() {
          return ctx.tab.set("emissions");
        });
        \u0275\u0275text(14, "\u{1F4A8} My Emissions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 7);
        \u0275\u0275listener("click", function CompanyDashboardComponent_Template_button_click_15_listener() {
          return ctx.tab.set("transactions");
        });
        \u0275\u0275text(16, "\u{1F517} Transactions");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 7);
        \u0275\u0275listener("click", function CompanyDashboardComponent_Template_button_click_17_listener() {
          return ctx.goToMarket();
        });
        \u0275\u0275text(18, "\u{1F6D2} Marketplace");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "button", 8);
        \u0275\u0275listener("click", function CompanyDashboardComponent_Template_button_click_19_listener() {
          return ctx.logout();
        });
        \u0275\u0275text(20, "\u2B05 Sign Out");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "main", 9);
        \u0275\u0275template(22, CompanyDashboardComponent_Conditional_22_Template, 4, 0, "div", 10)(23, CompanyDashboardComponent_Conditional_23_Template, 3, 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate((tmp_0_0 = ctx.profile()) == null ? null : tmp_0_0.companyCode);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab() === "overview");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab() === "emissions");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab() === "transactions");
        \u0275\u0275advance(7);
        \u0275\u0275conditional(22, ctx.loading() ? 22 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(23, !ctx.loading() && ctx.data() ? 23 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, RouterModule], styles: ['\n\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #f3f4f6;\n  font-family: "Segoe UI", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 230px;\n  background: #0d3d24;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem 1rem;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  flex-shrink: 0;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  margin-bottom: 1.5rem;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n}\n.brand-role[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #86efac;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.nav-item[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.7);\n  text-align: left;\n  padding: 0.65rem 0.875rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: all 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover, .nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  color: white;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.3);\n  color: #86efac;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: rgba(255, 255, 255, 0.7);\n  padding: 0.65rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n.main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2rem;\n  overflow-y: auto;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 50vh;\n  gap: 1rem;\n  color: #6b7280;\n}\n.spinner-lg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #16a34a;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.625rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.25rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.kpi-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.kpi[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.25rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n  border-left: 4px solid #e5e7eb;\n}\n.kpi.green[_ngcontent-%COMP%] {\n  border-left-color: #16a34a;\n}\n.kpi.blue[_ngcontent-%COMP%] {\n  border-left-color: #2563eb;\n}\n.kpi.teal[_ngcontent-%COMP%] {\n  border-left-color: #0891b2;\n}\n.kpi.orange[_ngcontent-%COMP%] {\n  border-left-color: #ea580c;\n}\n.kpi.red[_ngcontent-%COMP%] {\n  border-left-color: #dc2626;\n}\n.kpi-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-bottom: 0.5rem;\n}\n.kpi-num[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #111827;\n}\n.kpi-text[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #6b7280;\n  margin-top: 0.2rem;\n}\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n  margin-bottom: 1.5rem;\n}\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  color: #111827;\n  font-weight: 600;\n}\n.bar-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.bar-track[_ngcontent-%COMP%] {\n  height: 12px;\n  background: #e5e7eb;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #16a34a;\n  border-radius: 6px;\n  transition: width 0.5s;\n}\n.bar-fill.over[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.bar-pct[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.cap-detail[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  font-size: 0.875rem;\n  color: #374151;\n  margin-top: 0.5rem;\n}\n.tx-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.tx-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 0.8125rem;\n}\n.tx-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.tx-amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n}\n.tx-desc[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #6b7280;\n}\n.tx-hash[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.75rem;\n  color: #7c3aed;\n  background: #f5f3ff;\n  padding: 0.1rem 0.35rem;\n  border-radius: 4px;\n}\n.tx-date[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.75rem;\n  white-space: nowrap;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.tbl[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.8125rem;\n}\n.tbl[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 0.5rem 0.75rem;\n  background: #f9fafb;\n  border-bottom: 1px solid #e5e7eb;\n  color: #374151;\n  font-weight: 600;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  white-space: nowrap;\n}\n.tbl[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border-bottom: 1px solid #f3f4f6;\n  color: #374151;\n}\n.tbl[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.mono[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.g[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n}\n.r[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 600;\n}\n.hash[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.72rem;\n  color: #7c3aed;\n  background: #f5f3ff;\n  padding: 0.15rem 0.35rem;\n  border-radius: 4px;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.5rem;\n  border-radius: 9999px;\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.badge.mint[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.badge.burn[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.trade[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1d4ed8;\n}\n.badge.under-cap[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.badge.over-cap[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.badge.at-cap[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #854d0e;\n}\n.empty[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=company-dashboard.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyDashboardComponent, { className: "CompanyDashboardComponent", filePath: "src/app/features/company-dashboard/components/company-dashboard/company-dashboard.component.ts", lineNumber: 250 });
})();
export {
  CompanyDashboardComponent
};
//# sourceMappingURL=chunk-Y7HJTEUG.js.map
