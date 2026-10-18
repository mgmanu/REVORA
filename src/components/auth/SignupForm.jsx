
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

  return (
    <form className="auth-form" onSubmit={onSubmit} noValidate>
      <div className="form-overline">JOIN THE CAMPUS</div>

      <h2>
        Create account<span>.</span>
      </h2>

      <p className="form-description">
        Your university workflow, all in one place.
      </p>

      <label className="field-label" htmlFor="signup-name">
        Full name
      </label>

      <div className="input-wrap">
        <input
          id="signup-name"
          type="text"
          autoComplete="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          disabled={isInactive}
          required
        />
        <UserRound size={13} />
      </div>

      <label className="field-label" htmlFor="signup-email">
        University email
      </label>

      <div className="input-wrap">
        <input
          id="signup-email"
          type="email"
          autoComplete="email"
          placeholder="you@reva.edu.in"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={isInactive}
          required
        />
        <Mail size={13} />
      </div>

      <label className="field-label" htmlFor="signup-password">
        Create password
      </label>

      <div className="input-wrap">
        <input
          id="signup-password"
          type={showPassword ? "text" : "password"}
          autoComplete="new-password"
          placeholder="Create a strong password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={isInactive}
          minLength={8}
          required
        />

        <button
          type="button"
          className="password-toggle"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          tabIndex={isInactive ? -1 : 0}
        >
          {showPassword ? <EyeOff size={13} /> : <Eye size={13} />}
        </button>
      </div>

      <div className="signup-security-note">
        <LockKeyhole size={12} />
        Use at least 8 characters for your password.
      </div>

      <button
        className="auth-submit"
        type="submit"
        disabled={isInactive}
      >
        <span>Create your REVORA account</span>
        <ArrowRight size={16} />
      </button>

      <div className="form-switch-note">
        Already have an account?
        <button type="button" onClick={onLogin}>
          Sign in
        </button>
      </div>
    </form>
  );
}
