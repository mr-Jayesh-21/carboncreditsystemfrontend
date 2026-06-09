import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
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
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-IH4TJUIT.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/marketplace/components/marketplace/marketplace.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MarketplaceComponent_Conditional_28_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function MarketplaceComponent_Conditional_28_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2, "\u{1F6D2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No open listings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Be the first to list credits for sale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 21);
    \u0275\u0275listener("click", function MarketplaceComponent_Conditional_28_Conditional_7_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.tab.set("sell"));
    });
    \u0275\u0275text(8, "List Credits");
    \u0275\u0275elementEnd()();
  }
}
function MarketplaceComponent_Conditional_28_Conditional_8_For_2_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const listing_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(listing_r4.description);
  }
}
function MarketplaceComponent_Conditional_28_Conditional_8_For_2_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
    \u0275\u0275text(1, " Processing... ");
  }
}
function MarketplaceComponent_Conditional_28_Conditional_8_For_2_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Purchase Credits ");
  }
}
function MarketplaceComponent_Conditional_28_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "div", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 27);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 28);
    \u0275\u0275text(10, "OPEN");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 29)(12, "div", 30)(13, "span", 31);
    \u0275\u0275text(14, "Credits Available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 32);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 30)(19, "span", 31);
    \u0275\u0275text(20, "Price per Credit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 33);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 30)(25, "span", 31);
    \u0275\u0275text(26, "Total Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 34);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 30)(31, "span", 31);
    \u0275\u0275text(32, "Expires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 35);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(36, MarketplaceComponent_Conditional_28_Conditional_8_For_2_Conditional_36_Template, 2, 1, "p", 36);
    \u0275\u0275elementStart(37, "button", 37);
    \u0275\u0275listener("click", function MarketplaceComponent_Conditional_28_Conditional_8_For_2_Template_button_click_37_listener() {
      const listing_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.buyListing(listing_r4));
    });
    \u0275\u0275template(38, MarketplaceComponent_Conditional_28_Conditional_8_For_2_Conditional_38_Template, 2, 0)(39, MarketplaceComponent_Conditional_28_Conditional_8_For_2_Conditional_39_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const listing_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(listing_r4.sellerCompanyName.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(listing_r4.sellerCompanyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Listing #", listing_r4.id, "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(17, 10, listing_r4.creditsOffered, "1.2-2"), " CCT");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$\u200B", \u0275\u0275pipeBind2(23, 13, listing_r4.askPricePerCredit, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("$\u200B", \u0275\u0275pipeBind2(29, 16, listing_r4.totalValue, "1.2-2"), "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 19, listing_r4.expiresAt, "dd MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(36, listing_r4.description ? 36 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.buying() === listing_r4.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(38, ctx_r1.buying() === listing_r4.id ? 38 : 39);
  }
}
function MarketplaceComponent_Conditional_28_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, MarketplaceComponent_Conditional_28_Conditional_8_For_2_Template, 40, 22, "div", 23, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.listings());
  }
}
function MarketplaceComponent_Conditional_28_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " Purchase complete! TX: ");
    \u0275\u0275elementStart(2, "span", 39);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 40);
    \u0275\u0275listener("click", function MarketplaceComponent_Conditional_28_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.buySuccess.set(null));
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.truncate(ctx_r1.buySuccess()));
  }
}
function MarketplaceComponent_Conditional_28_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "button", 40);
    \u0275\u0275listener("click", function MarketplaceComponent_Conditional_28_Conditional_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.buyError.set(""));
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.buyError());
  }
}
function MarketplaceComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "h1");
    \u0275\u0275text(3, "Carbon Credit Marketplace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Buy carbon credits from other industrial companies");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, MarketplaceComponent_Conditional_28_Conditional_6_Template, 2, 0, "div", 15)(7, MarketplaceComponent_Conditional_28_Conditional_7_Template, 9, 0)(8, MarketplaceComponent_Conditional_28_Conditional_8_Template, 3, 0)(9, MarketplaceComponent_Conditional_28_Conditional_9_Template, 6, 1, "div", 16)(10, MarketplaceComponent_Conditional_28_Conditional_10_Template, 4, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(6, ctx_r1.loading() ? 6 : ctx_r1.listings().length === 0 ? 7 : 8);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(9, ctx_r1.buySuccess() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(10, ctx_r1.buyError() ? 10 : -1);
  }
}
function MarketplaceComponent_Conditional_29_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "Enter a valid positive amount");
    \u0275\u0275elementEnd();
  }
}
function MarketplaceComponent_Conditional_29_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "Enter a valid price");
    \u0275\u0275elementEnd();
  }
}
function MarketplaceComponent_Conditional_29_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 53);
    \u0275\u0275text(2, "Total Listing Value:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 54);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("USD ", \u0275\u0275pipeBind2(5, 1, ctx_r1.previewTotal(), "1.2-2"), "");
  }
}
function MarketplaceComponent_Conditional_29_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Listing created! Listing ID: #", ctx_r1.listingSuccess().id, "");
  }
}
function MarketplaceComponent_Conditional_29_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.listingError());
  }
}
function MarketplaceComponent_Conditional_29_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 38);
    \u0275\u0275text(1, " Creating listing... ");
  }
}
function MarketplaceComponent_Conditional_29_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create Listing ");
  }
}
function MarketplaceComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "h1");
    \u0275\u0275text(3, "List Credits for Sale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Offer your surplus carbon credits on the peer-to-peer marketplace");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 41)(7, "form", 42);
    \u0275\u0275listener("ngSubmit", function MarketplaceComponent_Conditional_29_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitListing());
    });
    \u0275\u0275elementStart(8, "div", 43)(9, "div", 44)(10, "label");
    \u0275\u0275text(11, "Credits to Offer (CCT)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 45);
    \u0275\u0275template(13, MarketplaceComponent_Conditional_29_Conditional_13_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 44)(15, "label");
    \u0275\u0275text(16, "Ask Price per Credit (USD)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 47);
    \u0275\u0275template(18, MarketplaceComponent_Conditional_29_Conditional_18_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, MarketplaceComponent_Conditional_29_Conditional_19_Template, 6, 4, "div", 48);
    \u0275\u0275elementStart(20, "div", 44)(21, "label");
    \u0275\u0275text(22, "Description (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, MarketplaceComponent_Conditional_29_Conditional_24_Template, 2, 1, "div", 50)(25, MarketplaceComponent_Conditional_29_Conditional_25_Template, 2, 1, "div", 51);
    \u0275\u0275elementStart(26, "button", 52);
    \u0275\u0275template(27, MarketplaceComponent_Conditional_29_Conditional_27_Template, 2, 0)(28, MarketplaceComponent_Conditional_29_Conditional_28_Template, 1, 0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r1.listingForm);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(13, ((tmp_2_0 = ctx_r1.listingForm.get("creditsOffered")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx_r1.listingForm.get("creditsOffered")) == null ? null : tmp_2_0.touched) ? 13 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(18, ((tmp_3_0 = ctx_r1.listingForm.get("askPricePerCredit")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx_r1.listingForm.get("askPricePerCredit")) == null ? null : tmp_3_0.touched) ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(19, ctx_r1.previewTotal() > 0 ? 19 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(24, ctx_r1.listingSuccess() ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(25, ctx_r1.listingError() ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.submittingListing());
    \u0275\u0275advance();
    \u0275\u0275conditional(27, ctx_r1.submittingListing() ? 27 : 28);
  }
}
function MarketplaceComponent_Conditional_30_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No active listings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "List your surplus credits to earn from the marketplace");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 21);
    \u0275\u0275listener("click", function MarketplaceComponent_Conditional_30_Conditional_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.tab.set("sell"));
    });
    \u0275\u0275text(8, "Create Listing");
    \u0275\u0275elementEnd()();
  }
}
function MarketplaceComponent_Conditional_30_Conditional_7_For_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Cancelling... ");
  }
}
function MarketplaceComponent_Conditional_30_Conditional_7_For_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Cancel Listing ");
  }
}
function MarketplaceComponent_Conditional_30_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div")(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 29)(11, "div", 30)(12, "span", 31);
    \u0275\u0275text(13, "Credits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 32);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 30)(18, "span", 31);
    \u0275\u0275text(19, "Ask Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 33);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "button", 55);
    \u0275\u0275listener("click", function MarketplaceComponent_Conditional_30_Conditional_7_For_2_Template_button_click_23_listener() {
      const l_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelListing(l_r10.id));
    });
    \u0275\u0275template(24, MarketplaceComponent_Conditional_30_Conditional_7_For_2_Conditional_24_Template, 1, 0)(25, MarketplaceComponent_Conditional_30_Conditional_7_For_2_Conditional_25_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Listing #", l_r10.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 7, l_r10.listedAt, "dd MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r10.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(16, 10, l_r10.creditsOffered, "1.2-2"), " CCT");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("USD ", \u0275\u0275pipeBind2(22, 13, l_r10.askPricePerCredit, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.cancelling() === l_r10.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(24, ctx_r1.cancelling() === l_r10.id ? 24 : 25);
  }
}
function MarketplaceComponent_Conditional_30_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, MarketplaceComponent_Conditional_30_Conditional_7_For_2_Template, 26, 16, "div", 23, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.myListings());
  }
}
function MarketplaceComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "h1");
    \u0275\u0275text(3, "My Active Listings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Credits you are currently offering for sale");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, MarketplaceComponent_Conditional_30_Conditional_6_Template, 9, 0, "div", 19)(7, MarketplaceComponent_Conditional_30_Conditional_7_Template, 3, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275conditional(6, ctx_r1.myListings().length === 0 ? 6 : 7);
  }
}
var MarketplaceComponent = class _MarketplaceComponent {
  constructor(auth, api, router, fb) {
    this.auth = auth;
    this.api = api;
    this.router = router;
    this.fb = fb;
    this.tab = signal("browse");
    this.loading = signal(true);
    this.listings = signal([]);
    this.myListings = signal([]);
    this.buying = signal(null);
    this.buySuccess = signal(null);
    this.buyError = signal("");
    this.submittingListing = signal(false);
    this.listingSuccess = signal(null);
    this.listingError = signal("");
    this.cancelling = signal(null);
    this.listingForm = this.fb.group({
      creditsOffered: [null, [Validators.required, Validators.min(0.01)]],
      askPricePerCredit: [null, [Validators.required, Validators.min(0.01)]],
      description: [""]
    });
    this.previewTotal = computed(() => {
      const credits = this.listingForm.get("creditsOffered")?.value;
      const price = this.listingForm.get("askPricePerCredit")?.value;
      if (credits == null || price == null || credits <= 0 || price <= 0)
        return 0;
      return credits * price;
    });
  }
  ngOnInit() {
    this.api.getOpenListings().subscribe({
      next: (page) => {
        this.listings.set(page.content);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  buyListing(listing) {
    const companyId = this.auth.currentUser()?.id;
    if (!companyId)
      return;
    this.buying.set(listing.id);
    this.buyError.set("");
    this.buySuccess.set(null);
    this.api.fulfillListing(listing.id, { buyerCompanyId: companyId }).subscribe({
      next: (tx) => {
        this.buying.set(null);
        this.buySuccess.set(tx.blockchainTxHash ?? "confirmed");
        this.listings.update((l) => l.filter((x) => x.id !== listing.id));
      },
      error: (err) => {
        this.buying.set(null);
        this.buyError.set(err.error?.message || "Purchase failed. Please try again.");
      }
    });
  }
  submitListing() {
    if (this.listingForm.invalid) {
      this.listingForm.markAllAsTouched();
      return;
    }
    this.submittingListing.set(true);
    this.listingSuccess.set(null);
    this.listingError.set("");
    const raw = this.listingForm.value;
    const req = {
      creditsOffered: raw.creditsOffered,
      askPricePerCredit: raw.askPricePerCredit,
      description: raw.description ?? void 0
    };
    this.api.createListing(req).subscribe({
      next: (l) => {
        this.submittingListing.set(false);
        this.listingSuccess.set(l);
        this.listingForm.reset();
      },
      error: (err) => {
        this.submittingListing.set(false);
        this.listingError.set(err.error?.message || "Failed to create listing.");
      }
    });
  }
  loadMyListings() {
    this.tab.set("mylistings");
    const companyId = this.auth.currentUser()?.id;
    if (!companyId)
      return;
    this.api.getOpenListings().subscribe((page) => {
      this.myListings.set(page.content.filter((l) => l.sellerCompanyId === companyId));
    });
  }
  cancelListing(listingId) {
    this.cancelling.set(listingId);
    this.api.cancelListing(listingId).subscribe({
      next: () => {
        this.cancelling.set(null);
        this.myListings.update((l) => l.filter((x) => x.id !== listingId));
      },
      error: () => this.cancelling.set(null)
    });
  }
  back() {
    const role = this.auth.currentUser()?.role;
    this.router.navigate([role === "ADMIN" ? "/admin" : "/dashboard"]);
  }
  truncate(hash) {
    if (!hash)
      return "";
    return hash.length > 16 ? hash.slice(0, 10) + "..." + hash.slice(-6) : hash;
  }
  static {
    this.\u0275fac = function MarketplaceComponent_Factory(t) {
      return new (t || _MarketplaceComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CarbonApiService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MarketplaceComponent, selectors: [["app-marketplace"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 31, vars: 13, consts: [[1, "shell"], [1, "sidebar"], [1, "sidebar-brand"], [1, "brand-icon"], [1, "brand-name"], [1, "brand-role"], [1, "sidebar-nav"], [1, "nav-item", 3, "click"], [1, "sidebar-balance"], [1, "balance-label"], [1, "balance-value"], [1, "btn-logout", 3, "click"], [1, "main"], [1, "content"], [1, "page-header"], [1, "loading"], [1, "toast", "success"], [1, "toast", "error"], [1, "spinner"], [1, "empty-state"], [1, "empty-icon"], [1, "btn-primary", 3, "click"], [1, "listings-grid"], [1, "listing-card"], [1, "listing-header"], [1, "seller-avatar"], [1, "seller-name"], [1, "listing-id"], [1, "listing-status", "open"], [1, "listing-metrics"], [1, "metric"], [1, "metric-label"], [1, "metric-value", "primary"], [1, "metric-value"], [1, "metric-value", "bold"], [1, "metric-value", "sm"], [1, "listing-desc"], [1, "btn-buy", 3, "click", "disabled"], [1, "spin"], [1, "hash"], [3, "click"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["type", "number", "step", "0.01", "formControlName", "creditsOffered", "placeholder", "e.g. 100"], [1, "err"], ["type", "number", "step", "0.01", "formControlName", "askPricePerCredit", "placeholder", "e.g. 25.00"], [1, "preview-box"], ["type", "text", "formControlName", "description", "placeholder", "e.g. Surplus credits from Q1 under-cap period"], [1, "alert-success"], [1, "alert-error"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "preview-label"], [1, "preview-value"], [1, "btn-cancel", 3, "click", "disabled"]], template: function MarketplaceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u{1F33F}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div")(6, "div", 4);
        \u0275\u0275text(7, "CarbonChain");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 5);
        \u0275\u0275text(9, "Marketplace");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "nav", 6)(11, "button", 7);
        \u0275\u0275listener("click", function MarketplaceComponent_Template_button_click_11_listener() {
          return ctx.back();
        });
        \u0275\u0275text(12, "\u2190 Back to Dashboard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275listener("click", function MarketplaceComponent_Template_button_click_13_listener() {
          return ctx.tab.set("browse");
        });
        \u0275\u0275text(14, "\u{1F6D2} Browse Listings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 7);
        \u0275\u0275listener("click", function MarketplaceComponent_Template_button_click_15_listener() {
          return ctx.tab.set("sell");
        });
        \u0275\u0275text(16, "\u{1F4E4} List Credits");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 7);
        \u0275\u0275listener("click", function MarketplaceComponent_Template_button_click_17_listener() {
          return ctx.loadMyListings();
        });
        \u0275\u0275text(18, "\u{1F4CB} My Listings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 8)(20, "span", 9);
        \u0275\u0275text(21, "Your Balance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "span", 10);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "button", 11);
        \u0275\u0275listener("click", function MarketplaceComponent_Template_button_click_25_listener() {
          return ctx.auth.logout();
        });
        \u0275\u0275text(26, "\u2190 Sign Out");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "main", 12);
        \u0275\u0275template(28, MarketplaceComponent_Conditional_28_Template, 11, 3, "div", 13)(29, MarketplaceComponent_Conditional_29_Template, 29, 8, "div", 13)(30, MarketplaceComponent_Conditional_30_Template, 8, 1, "div", 13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_3_0;
        \u0275\u0275advance(13);
        \u0275\u0275classProp("active", ctx.tab() === "browse");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab() === "sell");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tab() === "mylistings");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(24, 10, (tmp_3_0 = ctx.auth.currentUser()) == null ? null : tmp_3_0.creditBalance, "1.2-2"), " CCT");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(28, ctx.tab() === "browse" ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(29, ctx.tab() === "sell" ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(30, ctx.tab() === "mylistings" ? 30 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ['\n\n.shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #f3f4f6;\n  font-family: "Segoe UI", sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 230px;\n  background: #0d3d24;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem 1rem;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  flex-shrink: 0;\n}\n.sidebar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  margin-bottom: 1.5rem;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.brand-name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n}\n.brand-role[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #86efac;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.nav-item[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.7);\n  text-align: left;\n  padding: 0.65rem 0.875rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n  transition: all 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover, .nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  color: white;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(22, 163, 74, 0.3);\n  color: #86efac;\n}\n.sidebar-balance[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 8px;\n  padding: 0.75rem;\n  margin-bottom: 1rem;\n}\n.balance-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.7rem;\n  color: #86efac;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin-bottom: 0.25rem;\n}\n.balance-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.08);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: rgba(255, 255, 255, 0.7);\n  padding: 0.65rem;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 0.875rem;\n}\n.main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2rem;\n  overflow-y: auto;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 4rem;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #16a34a;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n.spin[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.content[_ngcontent-%COMP%] {\n  max-width: 1100px;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.625rem;\n  font-weight: 700;\n  color: #111827;\n  margin: 0 0 0.25rem;\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  background: white;\n  border-radius: 12px;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: #111827;\n  margin: 0 0 0.5rem;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0 0 1.5rem;\n}\n.listings-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.25rem;\n}\n.listing-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 1.5rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.listing-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.seller-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: #0d3d24;\n  color: white;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.seller-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #111827;\n  font-size: 0.9rem;\n}\n.listing-id[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.listing-status[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 0.2rem 0.6rem;\n  border-radius: 9999px;\n  font-size: 0.68rem;\n  font-weight: 700;\n}\n.listing-status.open[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #15803d;\n}\n.listing-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.metric[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n}\n.metric-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.metric-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #111827;\n}\n.metric-value.primary[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.metric-value.bold[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.metric-value.sm[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 400;\n}\n.listing-desc[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: #6b7280;\n  margin: 0;\n}\n.btn-buy[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 0.65rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: background 0.2s;\n}\n.btn-buy[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-buy[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n  border: none;\n  border-radius: 8px;\n  padding: 0.55rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  transition: background 0.2s;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fecaca;\n}\n.btn-cancel[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #16a34a;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  padding: 0.75rem 2rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: background 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  max-width: 600px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.07);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.35rem;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.875rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  outline: none;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #16a34a;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);\n}\n.err[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #dc2626;\n  display: block;\n  margin-top: 0.2rem;\n}\n.preview-box[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #86efac;\n  border-radius: 8px;\n  padding: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.preview-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #15803d;\n  font-weight: 500;\n}\n.preview-value[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #15803d;\n}\n.alert-success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  border: 1px solid #86efac;\n  color: #14532d;\n  border-radius: 8px;\n  padding: 0.875rem;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  border-radius: 8px;\n  padding: 0.875rem;\n  margin-bottom: 1rem;\n  font-size: 0.875rem;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 2rem;\n  right: 2rem;\n  padding: 1rem 1.25rem;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 0.875rem;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);\n  z-index: 999;\n  max-width: 420px;\n}\n.toast.success[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #14532d;\n  border: 1px solid #86efac;\n}\n.toast.error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #dc2626;\n  border: 1px solid #fecaca;\n}\n.toast[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.1rem;\n  cursor: pointer;\n  color: inherit;\n  opacity: 0.6;\n  margin-left: auto;\n  padding: 0;\n  line-height: 1;\n}\n.hash[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.8rem;\n  word-break: break-all;\n}\n/*# sourceMappingURL=marketplace.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MarketplaceComponent, { className: "MarketplaceComponent", filePath: "src/app/features/marketplace/components/marketplace/marketplace.component.ts", lineNumber: 291 });
})();
export {
  MarketplaceComponent
};
//# sourceMappingURL=chunk-WYHEWBUM.js.map
