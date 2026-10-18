
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";
import "../../styles/welcome-panel.css";

export default function WelcomePanel({ isSignup, onToggle }) {
  return (
    <section className={`welcome-panel ${isSignup ? "signup-mode" : ""}`}>
      <div className="welcome-content">
        <div className="welcome-brand-mark">
          <GraduationCap size={25} strokeWidth={1.5} />
        </div>

        <div className="welcome-overline">
          {isSignup ? "YOUR CAMPUS. CONNECTED." : "THE CAMPUS, SIMPLIFIED."}
        </div>

        <h2>
          {isSignup ? (
            <>
              Welcome
              <br />
              back to <span>REVORA.</span>
            </>
          ) : (
            <>
              One campus.
              <br />
              <span>One seamless</span>
              <br />
              experience.
            </>
          )}
        </h2>

        <p>
          {isSignup
            ? "Your university documents, requests and updates are right where you need them."
            : "Move university paperwork forward with clarity, accountability and less waiting."}
        </p>

        <div className="welcome-features">
          <div>
            <CheckCircle2 size={15} />
            <span>Track every document</span>
          </div>
          <div>
            <CheckCircle2 size={15} />
            <span>Know what's happening next</span>
          </div>
          <div>
            <CheckCircle2 size={15} />
            <span>Stay connected to your campus</span>
          </div>
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
        <span className="decoration-label">RV / 01</span>
      </div>
    </section>
  );
}
