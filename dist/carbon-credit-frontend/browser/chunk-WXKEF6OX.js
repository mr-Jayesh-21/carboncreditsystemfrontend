import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
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
  ɵɵclassProp,
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
import "./chunk-J4B6MK7R.js";

// src/app/features/auth/components/login/login.component.ts
function LoginComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Valid email is required");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "Password is required (min 6 chars)");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg());
  }
}
function LoginComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
    \u0275\u0275text(1, " Signing in... ");
  }
}
function LoginComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sign In ");
  }
}
var LoginComponent = class _LoginComponent {
  constructor(fb, auth, router) {
    this.fb = fb;
    this.auth = auth;
    this.router = router;
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
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
    this.auth.login(this.form.value).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.router.navigate([res.profile.role === "ADMIN" ? "/admin" : "/dashboard"]);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMsg.set(err.error?.message || "Invalid credentials. Please try again.");
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 10, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-header"], [1, "logo-icon"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", "placeholder", "ops@company.in"], [1, "field-error"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], [1, "alert-error"], ["type", "submit", 1, "btn-primary", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/auth/register"], [1, "demo-credentials"], [1, "demo-title"], [1, "demo-row"], [1, "spinner"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "\u{1F33F}");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h1");
        \u0275\u0275text(6, "CarbonChain");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p");
        \u0275\u0275text(8, "Blockchain Carbon Credit Registry");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "form", 4);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275elementStart(10, "div", 5)(11, "label", 6);
        \u0275\u0275text(12, "Email Address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "input", 7);
        \u0275\u0275template(14, LoginComponent_Conditional_14_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 5)(16, "label", 9);
        \u0275\u0275text(17, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "input", 10);
        \u0275\u0275template(19, LoginComponent_Conditional_19_Template, 2, 0, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, LoginComponent_Conditional_20_Template, 2, 1, "div", 11);
        \u0275\u0275elementStart(21, "button", 12);
        \u0275\u0275template(22, LoginComponent_Conditional_22_Template, 2, 0)(23, LoginComponent_Conditional_23_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 13)(25, "p");
        \u0275\u0275text(26, "New company? ");
        \u0275\u0275elementStart(27, "a", 14);
        \u0275\u0275text(28, "Register here");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "div", 15)(30, "p", 16);
        \u0275\u0275text(31, "Demo Credentials");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 17)(33, "span");
        \u0275\u0275text(34, "Admin:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "code");
        \u0275\u0275text(36, "admin@carbonchain.io / Admin@123");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(37, "div", 17)(38, "span");
        \u0275\u0275text(39, "Company:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "code");
        \u0275\u0275text(41, "ops@steelco.in / SteelCo@123");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        \u0275\u0275advance(9);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("invalid", ((tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.touched));
        \u0275\u0275advance();
        \u0275\u0275conditional(14, ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.touched) ? 14 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("invalid", ((tmp_3_0 = ctx.form.get("password")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.form.get("password")) == null ? null : tmp_3_0.touched));
        \u0275\u0275advance();
        \u0275\u0275conditional(19, ((tmp_4_0 = ctx.form.get("password")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.form.get("password")) == null ? null : tmp_4_0.touched) ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(20, ctx.errorMsg() ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275conditional(22, ctx.loading() ? 22 : 23);
      }
    }, dependencies: [CommonModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #0a2e1a 0%,\n      #0d3d24 50%,\n      #0a2e1a 100%);\n  padding: 1rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 16px;\n  padding: 2.5rem;\n  width: 100%;\n  max-width: 420px;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.logo-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.5rem;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: #0d3d24;\n  margin: 0;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin: 0.25rem 0 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 0.4rem;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 0.875rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  transition: border-color 0.2s;\n  box-sizing: border-box;\n  outline: none;\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-color: #16a34a;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);\n}\ninput.invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.field-error[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 0.75rem;\n  margin-top: 0.25rem;\n  display: block;\n}\n.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  color: #dc2626;\n  border-radius: 8px;\n  padding: 0.75rem;\n  font-size: 0.875rem;\n  margin-bottom: 1rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  background: #16a34a;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #15803d;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-top-color: white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.25rem;\n  font-size: 0.875rem;\n  color: #6b7280;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 600;\n  text-decoration: none;\n}\n.demo-credentials[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  padding: 1rem;\n  background: #f0fdf4;\n  border-radius: 8px;\n  border: 1px dashed #86efac;\n}\n.demo-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #15803d;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin: 0 0 0.5rem;\n}\n.demo-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  margin-bottom: 0.25rem;\n  color: #374151;\n}\n.demo-row[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  padding: 0.1rem 0.4rem;\n  border-radius: 4px;\n  font-family: monospace;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/components/login/login.component.ts", lineNumber: 126 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-WXKEF6OX.js.map
