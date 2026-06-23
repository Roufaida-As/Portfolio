import React from "react";
import { useTheme } from "../../themeProvider";

const Footer = () => {
  const { darkMode } = useTheme();

  const socials = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/asbar-roufaida-658b50254/" },
    { name: "GitHub", url: "https://github.com/Roufaida-As" },
    { name: "Instagram", url: "https://instagram.com/roufaida-as" },
  ];

  return (
    <footer style={{
      background: "var(--bg)",
      borderTop: "1px solid var(--border)",
      padding: "2rem",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}>
        <span style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1rem",
          fontWeight: 600,
          color: "var(--ink)",
        }}>
          R.A
        </span>

        <p style={{ fontSize: "0.8125rem", color: "var(--ink-muted)" }}>
          © 2025 Roufaida Asbar
        </p>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.target.style.color = "var(--ink)"}
              onMouseLeave={e => e.target.style.color = "var(--ink-muted)"}
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;