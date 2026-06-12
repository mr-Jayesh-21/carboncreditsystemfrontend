import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <div class="auth-header">
          <div class="logo-icon">🌿</div>
          <h1>Register Company</h1>
          <p>Join the Carbon Credit Registry</p>
        </div>

        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="auth-form">
          <div class="form-row">
            <div class="form-group">
              <label>Company Name</label>
              <input type="text" formControlName="companyName" placeholder="SteelCo Industries" />
            </div>
            <div class="form-group">
              <label>Company Code</label>
              <input type="text" formControlName="companyCode" placeholder="STEELCO" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Industry</label>
              <input type="text" formControlName="industry" placeholder="Steel Manufacturing" />
            </div>
            <div class="form-group">
              <label>Country</label>
              <input type="text" formControlName="country" placeholder="India" />
            </div>
          </div>

          <div class="form-group">
            <label>Official Email</label>
            <input type="email" formControlName="email" placeholder="ops@company.in" />
          </div>

          <div class="form-group">
            <label>Annual Emission Cap (tonnes CO₂)</label>
            <input type="number" formControlName="emissionCapTonnes" placeholder="12000" />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Password</label>
              <input type="password" formControlName="password" placeholder="••••••••" />
            </div>
            <div class="form-group">
              <label>Confirm Password</label>
              <input type="password" formControlName="confirmPassword" placeholder="••••••••" />
            </div>
          </div>

          @if (form.hasError('passwordMismatch') && form.get('confirmPassword')?.touched) {
            <div class="alert-error">Passwords do not match</div>
          }
          @if (errorMsg()) {
            <div class="alert-error">{{ errorMsg() }}</div>
          }

          <button type="submit" class="btn-primary" [disabled]="loading()">
            @if (loading()) { <span class="spinner"></span> Registering... }
            @else { Create Account }
          </button>
        </form>

        <div class="auth-footer">
          <p>Already registered? <a routerLink="/auth/login">Sign in</a></p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #0a2e1a 0%, #0d3d24 50%, #0a2e1a 100%); padding: 1.5rem; }
    .auth-card { background: white; border-radius: 16px; padding: 2.5rem; width: 100%; max-width: 560px; box-shadow: 0 25px 50px rgba(0,0,0,0.3); }
    .auth-header { text-align: center; margin-bottom: 2rem; }
    .logo-icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
    .auth-header h1 { font-size: 1.75rem; font-weight: 700; color: #0d3d24; margin: 0; }
    .auth-header p { color: #6b7280; font-size: 0.875rem; margin-top: 0.25rem; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .form-group { margin-bottom: 1rem; }
    label { display: block; font-size: 0.8rem; font-weight: 600; color: #374151; margin-bottom: 0.35rem; }
    input { width: 100%; padding: 0.6rem 0.875rem; border: 1.5px solid #d1d5db; border-radius: 8px; font-size: 0.875rem; outline: none; box-sizing: border-box; transition: border-color 0.2s; }
    input:focus { border-color: #16a34a; box-shadow: 0 0 0 3px rgba(22,163,74,0.1); }
    .alert-error { background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; border-radius: 8px; padding: 0.75rem; font-size: 0.875rem; margin-bottom: 1rem; }
    .btn-primary { width: 100%; padding: 0.75rem; background: #16a34a; color: white; border: none; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: background 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-top: 0.5rem; }
    .btn-primary:hover:not(:disabled) { background: #15803d; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    .spinner { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.7s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .auth-footer { text-align: center; margin-top: 1.25rem; font-size: 0.875rem; color: #6b7280; }
    .auth-footer a { color: #16a34a; font-weight: 600; text-decoration: none; }
  `],
})
export class RegisterComponent {
  form = this.fb.group(
    {
      companyName: ['', Validators.required],
      companyCode: ['', Validators.required],
      industry: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      emissionCapTonnes: [null, [Validators.required, Validators.min(1)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
    { validators: (g) => g.get('password')?.value !== g.get('confirmPassword')?.value ? { passwordMismatch: true } : null }
  );

  loading = signal(false);
  errorMsg = signal('');

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading.set(true);
    this.errorMsg.set('');

    const { confirmPassword, ...payload } = this.form.value as any;
    this.auth.register(payload).subscribe({
      next: () => { this.loading.set(false); this.router.navigate(['/dashboard']); },
      error: (err) => { this.loading.set(false); this.errorMsg.set(err.error?.message || 'Registration failed.'); },
    });
  }
}
