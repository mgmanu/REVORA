
import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";

import "../../styles/auth-form.css";

export default function SignupForm({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  isInactive,
  onSubmit,
  onLogin,
}) {
  const [showPassword, setShowPassword] = useState(false);

  function togglePasswordVisibility() {
    setShowPassword((previous) => !previous);
  }

  return (
    <form
      className="auth-form"
      onSubmit={onSubmit}
      noValidate
      aria-labelledby="signup-heading"
    >
      <div className="form-overline">JOIN REVORA</div>

      <h2 id="signup-heading">
        Create account<span>.</span>
      </h2>

      <p className="form-description">
        Your REVA University document workflow, all in one place.
      </p>

      <label className="field-label" htmlFor="signup-name">
        Full name
      </label>

      <div className="input-wrap">
        <input
          id="signup-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={isInactive}
          maxLength={100}
          required
        />

        <UserRound size={13} aria-hidden="true" />
      </div>

      <label className="field-label" htmlFor="signup-email">
        University email
      </label>

      <div className="input-wrap">
        <input
          id="signup-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@reva.edu.in"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={isInactive}
          required
        />

        <Mail size={13} aria-hidden="true" />
      </div>

      <label className="field-label" htmlFor="signup-password">
        Create password
      </label>

      <div className="input-wrap">
        <input
          id="signup-password"
          name="new-password"
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          placeholder="Create a strong password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={isInactive}
          minLength={8}
          required
          aria-describedby="signup-password-help"
        />

        <button
          type="button"
          className="password-toggle"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
          aria-pressed={showPassword}
          disabled={isInactive}
        >
          {showPassword ? (
            <EyeOff size={13} aria-hidden="true" />
          ) : (
            <Eye size={13} aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        className="signup-security-note"
        id="signup-password-help"
      >
        <LockKeyhole size={12} aria-hidden="true" />
        <span>Use at least 8 characters for your password.</span>
      </div>

      <button
        className="auth-submit"
        type="submit"
        disabled={isInactive}
      >
        <span>Create your REVORA account</span>
        <ArrowRight size={16} aria-hidden="true" />
      </button>

      <div className="form-switch-note">
        <span>Already have an account?</span>

        <button
          type="button"
          onClick={onLogin}
          disabled={isInactive}
        >
          Sign in
        </button>
      </div>
    </form>
  );
}
