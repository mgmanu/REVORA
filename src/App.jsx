
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Eye,
  EyeOff,
  GraduationCap,
  LockKeyhole,
  Mail,
  Search,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("discover");
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const isSignup = mode === "signup";
  const showReva = "reva university".includes(
    search.trim().toLowerCase()
  );

  function openUniversity() {
    setScreen("university");
    setMode("login");
    setMessage("");
    setShowPassword(false);
  }

  function changeMode(nextMode) {
    setMode(nextMode);
    setMessage("");
    setShowPassword(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.toLowerCase().endsWith("@reva.edu.in")) {
      setMessage(
        "Use your REVA University email address ending in @reva.edu.in."
      );
      return;
    }

    if (isSignup && name.trim().length < 2) {
      setMessage("Please enter your full name.");
      return;
    }

    setMessage(
      isSignup
        ? "The interface is ready. Account creation will work after backend authentication is connected."
        : "The interface is ready. Sign-in will work after backend authentication is connected."
    );
  }

  return (
    <main className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <button
          className="brand-lockup"
          onClick={() => setScreen("discover")}
          aria-label="Return to university search"
        >
          <span className="brand-symbol">
            <GraduationCap size={23} strokeWidth={1.7} />
          </span>
          <span className="brand-copy">
            <span className="brand-name">REVORA</span>
            <span className="brand-tagline">CAMPUS, CONNECTED.</span>
          </span>
        </button>

        <div className="topbar-right">
          <span className="secure-label">
            <ShieldCheck size={15} />
            A more connected campus
          </span>
          <span className="topbar-divider" />
          <span className="topbar-status">
            <span className="status-dot" />
            Early access
          </span>
        </div>
      </header>

      {screen === "discover" ? (
        <section className="discovery-page">
          <div className="discovery-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              YOUR CAMPUS. ONE PLACE.
            </div>

            <h1>
              University life,
              <br />
              <span>without the</span>
              <br />
              <span className="accent-text">runaround.</span>
            </h1>

            <p className="discovery-description">
              Documents, approvals and the people who make
              things happen. Start with your university.
            </p>

            <div className="search-label">FIND YOUR UNIVERSITY</div>

            <div className="university-search">
              <Search size={19} className="search-icon" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search university name..."
                aria-label="Search university"
              />
              <button
                className="search-submit"
                onClick={() => {
                  if (showReva && search.trim()) openUniversity();
                }}
                aria-label="Search"
              >
                <ArrowRight size={19} />
              </button>
            </div>

            <div className="search-hint">
              <span className="hint-dot" />
              Currently welcoming REVA University
            </div>

            <div className="discovery-rule" />

            <div className="trust-row">
              <div className="trust-icon">
                <LockKeyhole size={17} />
              </div>
              <div>
                <strong>Your campus, your access.</strong>
                <span>University-specific access and workflows.</span>
              </div>
            </div>
          </div>

          <div className="discovery-visual">
            <div className="visual-orbit orbit-outer" />
            <div className="visual-orbit orbit-inner" />

            <div className="visual-index">
              <span>01 / DISCOVER</span>
              <span>REVORA PLATFORM</span>
            </div>

            <div className="campus-emblem">
              <div className="emblem-ring">
                <Building2 size={43} strokeWidth={1.1} />
              </div>
              <span className="emblem-caption">YOUR UNIVERSITY</span>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-card-icon">
                <ShieldCheck size={17} />
              </span>
              <span>
                <strong>One connected campus</strong>
                <small>People, documents, progress</small>
              </span>
              <ArrowUpRight size={16} className="floating-arrow" />
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="mini-status" />
              <span>
                <strong>Built around your workflow</strong>
                <small>From submission to completion</small>
              </span>
            </div>

            <div className="visual-footer">
              <span>LESS CHASING.</span>
              <span>MORE PROGRESS.</span>
            </div>
          </div>

          <div className="discovery-results">
            <div className="results-heading">
              <span>YOUR UNIVERSITY</span>
              <span>{showReva ? "01 RESULT" : "NO RESULTS"}</span>
            </div>

            {showReva && (
              <button
                className="university-result"
                onClick={openUniversity}
              >
                <span className="result-monogram">R</span>
                <span className="result-info">
                  <strong>REVA University</strong>
                  <small>Bengaluru, Karnataka, India</small>
                </span>
                <span className="result-open">
                  <ArrowUpRight size={20} />
                </span>
              </button>
            )}

            {!showReva && (
              <div className="empty-results">
                No matching university yet. Try “REVA University”.
              </div>
            )}
          </div>

          <footer className="page-footer">
            <span>© 2026 REVORA</span>
            <span>DESIGNED FOR A BETTER CAMPUS EXPERIENCE</span>
          </footer>
        </section>
      ) : (
        <section className="university-page">
          <button
            className="back-link"
            onClick={() => setScreen("discover")}
          >
            <ArrowLeft size={16} />
            Back to universities
          </button>

          <div className="university-heading">
            <div className="university-crest">R</div>
            <div>
              <div className="eyebrow university-eyebrow">
                YOUR CAMPUS WORKSPACE
              </div>
              <h1>REVA University</h1>
              <p>Bengaluru, Karnataka</p>
            </div>
            <div className="verified-mark" title="University selected">
              <CheckCircle2 size={19} />
            </div>
          </div>

          <div className={`auth-card ${isSignup ? "is-signup" : ""}`}>
            <section
              className={`auth-form-panel login-form-panel ${
                !isSignup ? "form-active" : ""
              }`}
              aria-hidden={isSignup}
            >
              <form
                className="auth-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="form-overline">WELCOME BACK</div>
                <h2>Sign in<span>.</span></h2>
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
                    disabled={isSignup}
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
                    disabled={isSignup}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    tabIndex={isSignup ? -1 : 0}
                  >
                    {showPassword ? <EyeOff size={13} /> : <Eye size={13} />}
                  </button>
                </div>


                <div className="form-options">
                  <span className="email-note">
                    <ShieldCheck size={14} />
                    University email only
                  </span>
                  <button
                    type="button"
                    className="text-action"
                    onClick={() =>
                      setMessage("Password recovery will be available after authentication is connected.")
                    }
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  className="auth-submit"
                  type="submit"
                  disabled={isSignup}
                >
                  <span>Sign in to REVORA</span>
                  <ArrowRight size={18} />
                </button>

                <div className="form-switch-note">
                  New to REVORA?
                  <button
                    type="button"
                    onClick={() => changeMode("signup")}
                  >
                    Create an account
                  </button>
                </div>
              </form>
            </section>

            <section
              className={`auth-form-panel signup-form-panel ${
                isSignup ? "form-active" : ""
              }`}
              aria-hidden={!isSignup}
            >
              <form
                className="auth-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="form-overline">GET STARTED</div>
                <h2>Create account<span>.</span></h2>
                <p className="form-description">
                  Your university journey starts here.
                </p>

                <label className="field-label" htmlFor="signup-name">
                  Full name
                </label>
                <div className="input-wrap">
                  <UserRound size={17} />
                  <input
                    id="signup-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    disabled={!isSignup}
                    required
                  />
                </div>

                <label className="field-label" htmlFor="signup-email">
                  University email
                </label>
                <div className="input-wrap">
                  <Mail size={17} />
                  <input
                    id="signup-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@reva.edu.in"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={!isSignup}
                    required
                  />
                </div>

                <label className="field-label" htmlFor="signup-password">
                  Create password
                </label>
                <div className="input-wrap">
                  <LockKeyhole size={17} />
                  <input
                    id="signup-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Create a password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    disabled={!isSignup}
                    minLength={8}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    tabIndex={!isSignup ? -1 : 0}
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>

                <p className="password-hint">
                  Use at least 8 characters.
                </p>

                <button
                  className="auth-submit"
                  type="submit"
                  disabled={!isSignup}
                >
                  <span>Create your account</span>
                  <ArrowRight size={18} />
                </button>

                <div className="form-switch-note">
                  Already registered?
                  <button
                    type="button"
                    onClick={() => changeMode("login")}
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </section>

            <div className="welcome-panel">
              <div className="welcome-grid" />
              <div className="welcome-content">
                <div className="welcome-mark">
                  <GraduationCap size={27} strokeWidth={1.5} />
                </div>

                <div className="welcome-kicker">
                  {isSignup ? "YOUR CAMPUS. YOUR SPACE." : "WELCOME TO REVORA"}
                </div>

                <h2>
                  {isSignup ? (
                    <>
                      Your campus.
                      <br />
                      Your <span>next step.</span>
                    </>
                  ) : (
                    <>
                      Make campus
                      <br />
                      work <span>for you.</span>
                    </>
                  )}
                </h2>

                <p>
                  {isSignup
                    ? "Connect with your university community and make every document, request and approval easier to manage."
                    : "A simpler way to connect with faculty, manage documents and follow every approval."}
                </p>

                <div className="welcome-divider" />

                <div className="welcome-feature">
                  <span className="feature-check">
                    <CheckCircle2 size={16} />
                  </span>
                  <span>
                    <strong>Everything in one place</strong>
                    <small>Requests, updates and campus connections</small>
                  </span>
                </div>

                <button
                  className="welcome-switch"
                  onClick={() => changeMode(isSignup ? "login" : "signup")}
                >
                  <span>
                    {isSignup
                      ? "Already have an account?"
                      : "Don't have an account?"}
                  </span>
                  <strong>
                    {isSignup ? "Sign in" : "Create account"}
                  </strong>
                  <ArrowRight size={16} />
                </button>
              </div>

              <span className="welcome-coordinate">REVORA / REVA</span>
            </div>
          </div>

          {message && (
            <div className="auth-message" role="status">
              <span className="message-indicator" />
              {message}
              <button
                onClick={() => setMessage("")}
                aria-label="Dismiss message"
              >
                ×
              </button>
            </div>
          )}

          <div className="auth-footnote">
            <LockKeyhole size={13} />
            <span>University access · Private by design</span>
            <span className="footnote-separator">/</span>
            <span>REVORA 2026</span>
          </div>
        </section>
      )}
    </main>
  );
}
