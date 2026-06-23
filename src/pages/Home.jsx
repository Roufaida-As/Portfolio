import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../themeProvider";

const TypeWriter = ({ texts }) => {
  const [displayText, setDisplayText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 2200);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setDeleting(false);
          setIdx(p => (p + 1) % texts.length);
        }
      }
    }, deleting ? 40 : 90);
    return () => clearTimeout(timeout);
  }, [displayText, idx, deleting, texts]);

  return (
    <span>
      {displayText}
      <span style={{
        display: "inline-block",
        width: "2px",
        height: "1.1em",
        background: "var(--accent)",
        marginLeft: "2px",
        verticalAlign: "middle",
        animation: "blink 1s step-end infinite",
      }} />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
};

const Home = () => {
  const { darkMode } = useTheme();
  const [visible, setVisible] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "assets/ASBAR_ROUFAIDA_CV.pdf";
    link.download = "Asbar-Roufaida CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--bg)",
        paddingTop: "64px",
      }}
    >
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "5rem 2rem",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
      }}
      className="home-grid"
      >
        {/* Left: text */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}>
          {/* Eyebrow */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--accent-warm)",
            marginBottom: "1.25rem",
            fontWeight: 500,
          }}>
            Computer Science Student · Algeria
          </p>

          {/* Name */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            lineHeight: 1.05,
            fontWeight: 700,
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
          }}>
            Roufaida<br />
            <span style={{ fontStyle: "italic", fontWeight: 400 }}>Asbar</span>
          </h1>

          {/* Thin rule */}
          <div style={{
            width: "40px",
            height: "1px",
            background: "var(--accent)",
            marginBottom: "1.5rem",
          }} />

          {/* Typewriter role */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.125rem",
            color: "var(--ink-muted)",
            fontWeight: 300,
            marginBottom: "1.75rem",
            minHeight: "2rem",
          }}>
            <TypeWriter texts={["Software Engineering Student","Web Developer", "Flutter Developer"]} />
          </p>

          {/* Bio */}
          <p style={{
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            color: "var(--ink-muted)",
            marginBottom: "2.5rem",
            maxWidth: "480px",
          }}>
            Fourth-year student at ESI (Higher National School of Computer Science) in Algeria. I care about the full picture — 
            from the first whiteboard sketch to architectural decisions to the final line of code. I'm drawn to the early 
            stages of a project: defining the problem, shaping the structure, making the calls that everything else will 
            be built on. That's why I naturally gravitate toward leadership in team projects — not to delegate, but 
            to own the direction. I build full-stack web apps, distributed systems, and mobile experiences, with a habit
             of thinking before typing.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => scrollTo("projects")}
              style={{
                padding: "0.75rem 2rem",
                background: "var(--ink)",
                color: "var(--bg)",
                border: "1px solid var(--ink)",
                borderRadius: "2px",
                fontSize: "0.8125rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 500,
                cursor: "pointer",
                transition: "opacity 0.2s",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={e => e.target.style.opacity = "0.8"}
              onMouseLeave={e => e.target.style.opacity = "1"}
            >
              View Projects
            </button>
            <button
              onClick={downloadCV}
              style={{
                padding: "0.75rem 2rem",
                background: "transparent",
                color: "var(--ink)",
                border: "1px solid var(--border)",
                borderRadius: "2px",
                fontSize: "0.8125rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 500,
                cursor: "pointer",
                transition: "border-color 0.2s",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={e => e.target.style.borderColor = "var(--ink)"}
              onMouseLeave={e => e.target.style.borderColor = "var(--border)"}
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Right: portrait with ink-ring SVG */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
        }}>
          <div style={{ position: "relative", width: "350px", height: "350px" }}>
            {/* Animated SVG ring — the signature element */}
            <svg
              viewBox="0 0 320 320"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            >
              <circle
                cx="160" cy="160" r="150"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1"
                strokeDasharray="942"
                strokeDashoffset="942"
                strokeLinecap="round"
                style={{
                  animation: visible ? "drawRing 1.6s ease-out 0.4s forwards" : "none",
                }}
              />
              {/* Second offset ring for depth */}
              <circle
                cx="160" cy="160" r="146"
                fill="none"
                stroke="var(--accent-warm)"
                strokeWidth="0.5"
                strokeDasharray="30 880"
                strokeDashoffset="-200"
                opacity="0.4"
              />
              <style>{`
                @keyframes drawRing {
                  to { stroke-dashoffset: 0; }
                }
              `}</style>
            </svg>

            {/* Portrait image */}
            <div style={{
              position: "absolute",
              inset: "16px",
              borderRadius: "50%",
              overflow: "hidden",
              background: "var(--bg-alt)",
            }}>
              <img
                src="assets/roufaida.jpg"
                alt="Roufaida Asbar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "2.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        opacity: visible ? 0.5 : 0,
        transition: "opacity 1s ease 1s",
      }}>
        <span style={{ fontSize: "0.6875rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)" }}>Scroll</span>
        <div style={{
          width: "1px",
          height: "40px",
          background: "linear-gradient(to bottom, var(--ink-muted), transparent)",
          animation: "scrollLine 1.5s ease-in-out infinite",
        }}/>
        <style>{`@keyframes scrollLine { 0%{opacity:0;transform:scaleY(0);transform-origin:top} 50%{opacity:1;transform:scaleY(1)} 100%{opacity:0;transform:scaleY(1)} }`}</style>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .home-grid {
            grid-template-columns: 1fr !important;
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;