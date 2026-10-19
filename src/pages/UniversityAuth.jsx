
import { useState } from "react";
import {
  ArrowLeft,
  GraduationCap,
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";

import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";
import WelcomePanel from "../components/layout/WelcomePanel";

import "../styles/university-auth.css";

export default function UniversityAuth({ university, onBack }) {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const isSignup = mode === "signup";

  const universityName = university?.name || "REVA University";
  const universityLocation =
    university?.location || "Bengaluru, Karnataka";
  const universityDomain = university?.domain || "reva.edu.in";

  function changeMode(nextMode) {
    if (nextMode === mode) return;

    setMode(nextMode);
    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (isSignup && !name.trim()) {
      setMessage("Please enter your full name.");
      return;
    }

    if (!normalizedEmail || !emailPattern.test(normalizedEmail)) {
      setMessage("Please enter a valid university email address.");
      return;
    }

    const permittedDomain = `@${universityDomain.toLowerCase()}`;

    if (!normalizedEmail.endsWith(permittedDomain)) {
      setMessage(
        `Please use an email address ending in ${permittedDomain}.`
      );
      return;
    }

    if (!password) {
      setMessage("Please enter your password.");
      return;
    }

    if (isSignup && password.length < 8) {
      setMessage("Your password must contain at least 8 characters.");
      return;
    }

    setMessage(
      isSignup
        ? "Your details are valid. Account creation requires backend authentication, which is not connected yet."
        : "Your details are valid. Sign-in requires backend authentication, which is not connected yet."
    );
  }

  function showMessage(text) {
    setMessage(text);
  }

  return (
    <main className="university-auth-page">
      <header className="auth-topbar">
        <button
          type="button"
          className="auth-back-button"
          onClick={onBack}
        >
          <ArrowLeft size={16} />
          <span>Back to universities</span>
        </button>

        <div className="auth-logo" aria-label="REVORA">
          <GraduationCap size={23} />
          <span>
            REVORA<span className="logo-period">.</span>
          </span>
        </div>

        <div className="auth-security">
          <ShieldCheck size={15} />
          <span>UNIVERSITY ACCESS</span>
        </div>
      </header>

      <section
        className={`auth-shell ${isSignup ? "signup-active" : ""}`}
      >
        <div className="auth-form-side">
          <div className="auth-university-tag">
            <span className="auth-university-dot" />
            <span>
              {universityName.toUpperCase()} · SECURE ACCESS
            </span>
          </div>

          {isSignup ? (
            <SignupForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              isInactive={false}
              onSubmit={handleSubmit}
              onLogin={() => changeMode("login")}
            />
          ) : (
            <LoginForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              isInactive={false}
              onSubmit={handleSubmit}
              onSignup={() => changeMode("signup")}
              onMessage={showMessage}
            />
          )}

          {message && (
            <div className="auth-message" role="status">
              <span>{message}</span>
              <button
                type="button"
                onClick={() => setMessage("")}
                aria-label="Dismiss message"
              >
                ×
              </button>
            </div>
          )}

          <p className="auth-legal-note">
            This is a prototype interface. Your account and
            university access will be available after the
            authentication backend is connected.
          </p>
        </div>

        <WelcomePanel
          isSignup={isSignup}
          onToggle={() =>
            changeMode(isSignup ? "login" : "signup")
          }
        />
      </section>

      <footer className="auth-page-footer">
        <span>REVORA © 2026</span>

        <span>
          <LockKeyhole size={12} />
          {universityLocation}
        </span>

        <span>BUILT FOR BETTER UNIVERSITY WORKFLOWS</span>
      </footer>
    </main>
  );
}
