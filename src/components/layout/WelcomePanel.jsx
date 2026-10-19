
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

import "../../styles/welcome-panel.css";

export default function WelcomePanel({ isSignup, onToggle }) {
  const features = [
    "Document tracking",
    "Approval progress",
    "Physical signature coordination",
  ];

  return (
    <section
      className={`welcome-panel ${isSignup ? "signup-mode" : "login-mode"}`}
      aria-label="REVORA welcome panel"
    >
      <div className="welcome-glass-layer" aria-hidden="true" />
      <div className="welcome-grid-layer" aria-hidden="true" />

      <div className="welcome-content">
        <div className="welcome-brand-mark">
          <GraduationCap size={26} strokeWidth={1.6} />
        </div>

        <div className="welcome-overline">
          REVA UNIVERSITY
        </div>

        <h2>
          {isSignup ? (
            <>
              WELCOME
              <span> TO REVORA!</span>
            </>
          ) : (
            <>
              WELCOME
              <span> BACK!</span>
            </>
          )}
        </h2>

        <p>
          {isSignup
            ? "Bring your university documents, approvals and signature coordination into one connected workspace."
            : "Your REVA University document workflow, approvals and updates are all in one place."}
        </p>

        <div className="welcome-features">
          {features.map((feature) => (
            <div key={feature}>
              <CheckCircle2 size={15} />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="welcome-switch"
          onClick={onToggle}
        >
          <span>
            {isSignup ? "Back to sign in" : "Create your account"}
          </span>
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="welcome-decoration" aria-hidden="true">
        <div className="decoration-ring ring-one" />
        <div className="decoration-ring ring-two" />
        <div className="decoration-orb" />
        <span className="decoration-label">REVORA / 01</span>
      </div>
    </section>
  );
}
