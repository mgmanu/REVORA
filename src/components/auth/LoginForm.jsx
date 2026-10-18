
import { useState } from "react";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import "../../styles/auth-form.css";

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  isInactive,
  onSubmit,
  onSignup,
  onMessage,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="auth-form" onSubmit={onSubmit} noValidate>
      <div className="form-overline">WELCOME BACK</div>

      <h2>
        Sign in<span>.</span>
      </h2>

      <p className="form-description">
        Pick up where your campus journey left off.
      </p>

      <label className="field-label" htmlFor="login-email">
        University email
      </label>

      <div className="input-wrap">
        <input
          id="login-email"
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

      <label className="field-label" htmlFor="login-password">
        Password
      </label>

      <div className="input-wrap">
        <input
          id="login-password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={isInactive}
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

      <div className="form-options">
        <span className="email-note">
          <LockKeyhole size={12} />
          University email only
        </span>

        <button
          type="button"
          className="text-action"
          onClick={() =>
            onMessage(
              "Password recovery will be available after authentication is connected."
            )
          }
        >
          Forgot password?
        </button>
      </div>

      <button className="auth-submit" type="submit" disabled={isInactive}>
        <span>Sign in to REVORA</span>
        <ArrowRight size={16} />
      </button>

      <div className="form-switch-note">
        New to REVORA?
        <button type="button" onClick={onSignup}>
          Create an account
        </button>
      </div>
    </form>
  );
}
