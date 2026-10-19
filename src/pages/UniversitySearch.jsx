
import { useState } from "react";
import { ArrowRight, GraduationCap, Search, ShieldCheck } from "lucide-react";
import "../styles/discovery.css";

export default function UniversitySearch({ onSelectUniversity }) {
  const [query, setQuery] = useState("");

  const universities = [
    {
      name: "REVA University",
      location: "Bengaluru, Karnataka",
      domain: "reva.edu.in",
    },
  ];

  const searchTerm = query.trim().toLowerCase();

  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm) ||
    university.location.toLowerCase().includes(searchTerm) ||
    university.domain.toLowerCase().includes(searchTerm)
  );

  return (
    <main className="discovery-page">
      <div className="discovery-orb discovery-orb-one" />
      <div className="discovery-orb discovery-orb-two" />

      <header className="discovery-header">
        <a className="discovery-logo" href="/" aria-label="REVORA home">
          <span className="logo-symbol">
            <GraduationCap size={23} />
          </span>
          <span>REVORA<span className="logo-period">.</span></span>
        </a>

        <div className="discovery-header-note">
          <ShieldCheck size={15} />
          <span>University-secured workspace</span>
        </div>
      </header>

      <section className="discovery-content">
        <div className="discovery-eyebrow">
          <span className="status-dot" />
          YOUR CAMPUS, REIMAGINED
        </div>

        <h1>
          REVA University.
            <br />
            <span>One connected workflow.</span>
        </h1>

        <p className="discovery-description">
          Access document requests, faculty approvals, signature tracking,
          and status updates through one connected REVA University workspace.
        </p>

        <div className="university-search">
          <Search size={19} />

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search REVA University..."
            aria-label="Search universities"
          />

          <span className="search-shortcut">SEARCH</span>
        </div>

        <div className="university-list-heading">
          <span>REGISTERED UNIVERSITY</span>
          <span>{filteredUniversities.length.toString().padStart(2, "0")}</span>
        </div>

        <div className="university-results">
          {filteredUniversities.map((university) => (
            <button
              className="university-card"
              key={university.domain}
              type="button"
              onClick={() => onSelectUniversity(university)}
            >
              <span className="university-icon">
                <GraduationCap size={24} />
              </span>

              <span className="university-details">
                <strong>{university.name}</strong>
                <span>{university.location}</span>
                <small>{university.domain}</small>
              </span>

              <span className="university-arrow">
                <ArrowRight size={18} />
              </span>
            </button>
          ))}

          {filteredUniversities.length === 0 && (
            <div className="no-universities">
              No university found. Try searching for REVA University.
            </div>
          )}
        </div>

        <div className="discovery-footnote">
          <ShieldCheck size={14} />
          <span>Your university access is protected by role-based permissions.</span>
        </div>
      </section>

      <footer className="discovery-footer">
        <span>REVORA © 2026</span>
        <span>BUILT FOR BETTER CAMPUS WORKFLOWS</span>
      </footer>
    </main>
  );
}
