import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "../../themeProvider";

const experiences = [
  {
    id: 1,
    role: "Full-Stack Developer Intern",
    company: "Foorweb",
    period: "August 2025",
    type: "Internship",
    description:
      "Built Foorchat — a multi-category chatbot integration platform for social networks. Companies can configure their bots, connect social pages, and monitor performance through a centralized admin dashboard.",
    technologies: ["Django", "SQLite", "Next.js", "Tailwind CSS", "Figma"],
    highlights: [
      "Designed and implemented the admin dashboard architecture",
      "Integrated multi-channel social page connections",
      "Built configurable chatbot flows per business category",
    ],
  },
  {
    id: 2,
    role: "Full-Stack Developer Intern",
    company: "Thynk Tech Dz",
    period: "May – July 2025",
    type: "Internship",
    description:
      "Developed Oulamuna, a web platform dedicated to preserving Algerian scholarly heritage. The platform features scholar profiles, educational article publishing, and content management tools.",
    technologies: ["Express.js", "MongoDB", "React.js", "Tailwind CSS", "REST APIs"],
    highlights: [
      "Architected the content management system for scholarly profiles",
      "Built the article publishing and editorial workflow",
      "Delivered a full REST API with secure authentication",
    ],
  },
];

const ExperienceCard = ({ exp, index }) => {
  const { darkMode } = useTheme();
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "180px 1fr",
        gap: "3rem",
        paddingBottom: "3rem",
        borderBottom: "1px solid var(--border)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
      className="exp-row"
    >
      {/* Left: meta */}
      <div style={{ paddingTop: "2px" }}>
        <p style={{
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--accent-warm)",
          fontWeight: 500,
          marginBottom: "0.375rem",
        }}>
          {exp.type}
        </p>
        <p style={{
          fontSize: "0.8125rem",
          color: "var(--ink-muted)",
          lineHeight: 1.6,
        }}>
          {exp.period}
        </p>
      </div>

      {/* Right: content */}
      <div>
        <div style={{ marginBottom: "0.75rem" }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--ink)",
            letterSpacing: "-0.01em",
            marginBottom: "0.125rem",
          }}>
            {exp.role}
          </h3>
          <p style={{
            fontSize: "0.875rem",
            color: "var(--accent)",
            fontWeight: 500,
          }}>
            {exp.company}
          </p>
        </div>

        <p style={{
          fontSize: "0.9rem",
          lineHeight: 1.75,
          color: "var(--ink-muted)",
          marginBottom: "1.25rem",
        }}>
          {exp.description}
        </p>

        {/* Highlights */}
        <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          {exp.highlights.map((h, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", fontSize: "0.875rem", color: "var(--ink-muted)" }}>
              <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "0.25rem" }}>→</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
          {exp.technologies.map((tech, i) => (
            <span key={i} style={{
              padding: "2px 8px",
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "2px",
              fontSize: "0.6875rem",
              color: "var(--ink-muted)",
              letterSpacing: "0.04em",
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { darkMode } = useTheme();

  return (
    <section
      id="experience"
      style={{
        background: "var(--bg-alt)",
        borderTop: "1px solid var(--border)",
        padding: "6rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <p style={{
          fontSize: "0.75rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--accent-warm)",
          fontWeight: 500,
          marginBottom: "1rem",
        }}>
          Experience
        </p>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          color: "var(--ink)",
          letterSpacing: "-0.02em",
          marginBottom: "0.5rem",
        }}>
          Where I've Worked
        </h2>

        <div style={{ width: "40px", height: "1px", background: "var(--accent)", marginBottom: "4rem" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-row { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;