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
  AuthService,
  CommonModule,
  Router,
  RouterLink,
  RouterModule,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-IH4TJUIT.js";
import {
  __objRest
} from "./chunk-J4B6MK7R.js";

// src/app/features/auth/components/register/register.component.ts
function RegisterComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg());
  }
}
function RegisterComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
    \u0275\u0275text(1, " Registering... ");
  }
}
function RegisterComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Create Account ");
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.form = this.fb.group({
      companyName: ["", Validators.required],
      companyCode: ["", Validators.required],
      industry: ["", Validators.required],
      country: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      emissionCapTonnes: [null, [Validators.required, Validators.min(1)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required]
    }, { validators: (g) => g.get("password")?.value !== g.get("confirmPassword")?.value ? { passwordMismatch: true } : null });
    this.loading = signal(false);
    this.errorMsg = signal("");
  }
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading.set(true);
    this.errorMsg.set("");
    const _a = this.form.value, { confirmPassword } = _a, payload = __objRest(_a, ["confirmPassword"]);
    this.auth.register(payload).subscribe({
      next: () => {
        this.loading.set(false);
        this.router.navigate(["/dashboard"]);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMsg.set(err.error?.message || "Registration failed.");
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 55, vars: 5, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-header"], [1, "logo-icon"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-row"], [1, "form-group"], ["type", "text", "formControlName", "companyName", "placeholder", "SteelCo Industries"], ["type", "text", "formControlName", "companyCode", "placeholder", "STEELCO"], ["type", "text", "formControlName", "industry", "placeholder", "Steel Manufacturing"], ["type", "text", "formControlName", "country", "placeholder", "India"], ["type", "email", "formControlName", "email", "placeholder", "ops@company.in"], ["type", "number", "formControlName", "emissionCapTonnes", "placeholder", "12000"], ["type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], [1, "alert-error"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/auth/login"], [1, "spinner"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "\u{1F33F}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "Register Company");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8, "Join the Carbon Credit Registry");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "form", 4);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "label");
        \u0275\u0275text(13, "Company Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(14, "input", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 6)(16, "label");
        \u0275\u0275text(17, "Company Code");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 5)(20, "div", 6)(21, "label");
        \u0275\u0275text(22, "Industry");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "input", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 6)(25, "label");
        \u0275\u0275text(26, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "input", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 6)(29, "label");
        \u0275\u0275text(30, "Official Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "input", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 6)(33, "label");
        \u0275\u0275text(34, "Annual Emission Cap (tonnes CO\u2082)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(35, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 5)(37, "div", 6)(38, "label");
        \u0275\u0275text(39, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "input", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 6)(42, "label");
        \u0275\u0275text(43, "Confirm Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(44, "input", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(45, RegisterComponent_Conditional_45_Template, 2, 0, "div", 15)(46, RegisterComponent_Conditional_46_Template, 2, 1, "div", 15);
        \u0275\u0275elementStart(47, "button", 16);
        \u0275\u0275template(48, RegisterComponent_Conditional_48_Template, 2, 0)(49, RegisterComponent_Conditional_49_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 17)(51, "p");
        \u0275\u0275text(52, "Already registered? ");
        \u0275\u0275elementStart(53, "a", 18);
        \u0275\u0275text(54, "Sign in");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(36);
        \u0275\u0275conditional(45, ctx.form.hasError("passwordMismatch") && ((tmp_1_0 = ctx.form.get("confirmPassword")) == null ? null : tmp_1_0.touched) ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(46, ctx.errorMsg() ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(48, ctx.loading() ? 48 : 49);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0a2e1a 0%,\n      #0d3d24 50%,\n      #0a2e1a 100%);\n  padding: 1.5rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 2.5rem;\n  width: 100%;\n  max-width: 560px;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0d3d24;\n  margin: 0;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.35rem;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.6rem 0.875rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  outline: none;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #16a34a;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  border-radius: 8px;\n  padding: 0.75rem;\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  background: #16a34a;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.25rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n  text-decoration: none;\n}\n/*# sourceMappingURL=register.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/features/auth/components/register/register.component.ts", lineNumber: 105 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-FELMKN7T.js.map
