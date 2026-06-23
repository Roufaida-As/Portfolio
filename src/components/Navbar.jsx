import { useState, useEffect } from "react";
import { useTheme } from "../../themeProvider";

const ScrollLink = ({ to, children, isActive, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (to === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(to);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    if (onClick) onClick();
  };

  return (
    <a
      href={`#${to}`}
      onClick={handleClick}
      style={{
        fontSize: "0.8125rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        fontWeight: 500,
        color: isActive ? "var(--accent)" : "var(--ink-muted)",
        transition: "color 0.2s",
        padding: "4px 0",
        borderBottom: isActive ? "1px solid var(--accent)" : "1px solid transparent",
      }}
      onMouseEnter={e => { if (!isActive) e.target.style.color = "var(--ink)"; }}
      onMouseLeave={e => { if (!isActive) e.target.style.color = "var(--ink-muted)"; }}
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", route: "/" },
    { name: "About", route: "about" },
    { name: "Projects", route: "projects" },
    { name: "Experience", route: "experience" },
    { name: "Contact", route: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const pos = window.scrollY + 120;
      if (pos < 300) { setActiveSection("/"); return; }
      for (const s of ["about", "projects", "experience", "contact"]) {
        const el = document.getElementById(s);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s); return;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      background: scrolled ? "var(--bg)" : "transparent",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "background 0.3s, border-color 0.3s",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a
          href="/"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--ink)",
            letterSpacing: "-0.01em",
          }}
        >
          R.A
        </a>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden md:flex">
          {links.map(l => (
            <ScrollLink key={l.route} to={l.route} isActive={activeSection === l.route}>
              {l.name}
            </ScrollLink>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--ink-muted)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "border-color 0.2s, color 0.2s",
            }}
            title="Toggle theme"
          >
            {darkMode ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden" style={{ gap: "1rem", alignItems: "center" }}>
          <button
            onClick={toggleTheme}
            style={{
              width: 32, height: 32, borderRadius: "50%",
              border: "1px solid var(--border)", background: "transparent",
              color: "var(--ink-muted)", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {darkMode ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"/></svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/></svg>
            )}
          </button>

          <button
            onClick={() => setMobileOpen(o => !o)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--ink)", padding: "4px" }}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: "var(--bg)",
          borderTop: "1px solid var(--border)",
          padding: "1.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}>
          {links.map(l => (
            <ScrollLink
              key={l.route}
              to={l.route}
              isActive={activeSection === l.route}
              onClick={() => setMobileOpen(false)}
            >
              {l.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;