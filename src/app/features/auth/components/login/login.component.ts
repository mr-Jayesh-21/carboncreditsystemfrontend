import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="auth-page">
      <div class="auth-card">
        <div class="auth-header">
          <div class="logo-icon">🌿</div>
          <h1>CarbonChain</h1>
          <p>Blockchain Carbon Credit Registry</p>
        </div>

        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="auth-form">
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              id="email"
              type="email"
              formControlName="email"
              placeholder="ops&#64;company.in"
              [class.invalid]="form.get('email')?.invalid && form.get('email')?.touched"
            />
            @if (form.get('email')?.invalid && form.get('email')?.touched) {
              <span class="field-error">Valid email is required</span>
            }
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              formControlName="password"
              placeholder="••••••••"
              [class.invalid]="form.get('password')?.invalid && form.get('password')?.touched"
            />
            @if (form.get('password')?.invalid && form.get('password')?.touched) {
              <span class="field-error">Password is required (min 6 chars)</span>
            }
          </div>

          @if (errorMsg()) {
            <div class="alert-error">{{ errorMsg() }}</div>
          }

          <button type="submit" class="btn-primary" [disabled]="loading()">
            @if (loading()) { <span class="spinner"></span> Signing in... }
            @else { Sign In }
          </button>
        </form>

        <div class="auth-footer">
          <p>New company? <a routerLink="/auth/register">Register here</a></p>
        </div>

        <div class="demo-credentials">
          <p class="demo-title">Demo Credentials</p>
          <div class="demo-row">
            <span>Admin:</span>
            <code>admin&#64;carbonchain.io / Admin&#64;123</code>
          </div>
          <div class="demo-row">
            <span>Company:</span>
            <code>ops&#64;steelco.in / SteelCo&#64;123</code>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0a2e1a 0%, #0d3d24 50%, #0a2e1a 100%);
      padding: 1rem;
    }
    .auth-card {
      background: #ffffff;
      border-radius: 16px;
      padding: 2.5rem;
      width: 100%;
      max-width: 420px;
      box-shadow: 0 25px 50px rgba(0,0,0,0.3);
    }
    .auth-header { text-align: center; margin-bottom: 2rem; }
    .logo-icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
    .auth-header h1 { font-size: 1.75rem; font-weight: 700; color: #0d3d24; margin: 0; }
    .auth-header p { color: #6b7280; font-size: 0.875rem; margin: 0.25rem 0 0; }
    .form-group { margin-bottom: 1.25rem; }
    label { display: block; font-size: 0.875rem; font-weight: 600; color: #374151; margin-bottom: 0.4rem; }
    input {
      width: 100%; padding: 0.65rem 0.875rem; border: 1.5px solid #d1d5db;
      border-radius: 8px; font-size: 0.9rem; transition: border-color 0.2s;
      box-sizing: border-box; outline: none;
    }
    input:focus { border-color: #16a34a; box-shadow: 0 0 0 3px rgba(22,163,74,0.1); }
    input.invalid { border-color: #ef4444; }
    .field-error { color: #ef4444; font-size: 0.75rem; margin-top: 0.25rem; display: block; }
    .alert-error { background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; border-radius: 8px; padding: 0.75rem; font-size: 0.875rem; margin-bottom: 1rem; }
    .btn-primary {
      width: 100%; padding: 0.75rem; background: #16a34a; color: white;
      border: none; border-radius: 8px; font-size: 1rem; font-weight: 600;
      cursor: pointer; transition: background 0.2s; display: flex; align-items: center; justify-content: center; gap: 0.5rem;
    }
    .btn-primary:hover:not(:disabled) { background: #15803d; }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
    .spinner { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.7s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .auth-footer { text-align: center; margin-top: 1.25rem; font-size: 0.875rem; color: #6b7280; }
    .auth-footer a { color: #16a34a; font-weight: 600; text-decoration: none; }
    .demo-credentials { margin-top: 1.5rem; padding: 1rem; background: #f0fdf4; border-radius: 8px; border: 1px dashed #86efac; }
    .demo-title { font-size: 0.75rem; font-weight: 700; color: #15803d; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 0.5rem; }
    .demo-row { display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; margin-bottom: 0.25rem; color: #374151; }
    .demo-row code { background: #dcfce7; padding: 0.1rem 0.4rem; border-radius: 4px; font-family: monospace; }
  `],
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  loading = signal(false);
  errorMsg = signal('');

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading.set(true);
    this.errorMsg.set('');

    this.auth.login(this.form.value as any).subscribe({
      next: (res) => {
        this.loading.set(false);
        this.router.navigate([res.profile.role === 'ADMIN' ? '/admin' : '/dashboard']);
      },
      error: (err) => {
        this.loading.set(false);
        this.errorMsg.set(err.error?.message || 'Invalid credentials. Please try again.');
      },
    });
  }
}
