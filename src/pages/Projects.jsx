import React, { useState } from "react";
import { useTheme } from "../../themeProvider";

const Projects = () => {
  const { darkMode } = useTheme();
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "BagsShop",
      description: "E-commerce web app for women's bags. Built with React, Node.js, Express and MongoDB. Features product browsing, cart management, and a clean shopping experience.",
      image: "assets/bagShop.png",
      technologies: ["React.js", "Express.js", "MongoDB"],
      category: "web",
      liveUrl: "https://bags-shop.vercel.app/",
      githubRepos: [{ url: "https://github.com/Roufaida-As/BagsShop", label: "GitHub" }],
      hasLiveUrl: true,
    },
    {
      id: 2,
      title: "DonaVita",
      description: "Mobile donation platform built with Flutter and Firebase, connecting donors with organizations for a smoother, more transparent giving process.",
      image: "assets/donavita.jpg",
      technologies: ["Flutter", "Dart", "Firebase"],
      category: "mobile",
      githubRepos: [
        { url: "https://github.com/Roufaida-As/DonaVita-Donors-side", label: "Donors" },
        { url: "https://github.com/Roufaida-As/DonaVita-Organisations-side", label: "Orgs" },
      ],
      hasLiveUrl: false,
    },
    {
      id: 3,
      title: "Sabeel",
      description: "Volunteer-event matching web app. Users find and join community opportunities, then coordinate via event-specific real-time chat groups.",
      image: "assets/Sabeel.png",
      technologies: ["React", "TypeScript", "Express.js", "PostgreSQL", "Socket.io"],
      category: "web",
      githubRepos: [
        { url: "https://github.com/Roufaida-As/Sabeel_backend", label: "Backend" },
        { url: "https://github.com/Roufaida-As/Sabeel-frontend", label: "Frontend" },
      ],
      hasLiveUrl: false,
    },
    {
      id: 4,
      title: "Merchandising AI App",
      description: "Flutter app that uses AI-powered image analysis to help merchandisers track product placement and shelf distribution in retail environments.",
      image: "assets/ramy.jpg",
      technologies: ["Flutter", "Dart"],
      category: "mobile",
      githubRepos: [{ url: "https://github.com/Roufaida-As/AUP_SHE_CODES_MOBILE_APP", label: "GitHub" }],
      hasLiveUrl: false,
    },
    {
      id: 5,
      title: "Shifaa",
      description: "Electronic patient records system for healthcare professionals. I led the frontend using Angular and TypeScript, integrated with a Django + MySQL backend.",
      image: "assets/Shifaa.png",
      technologies: ["Angular", "TypeScript", "Django", "MySQL"],
      category: "web",
      githubRepos: [
        { url: "https://github.com/Roufaida-As/Shifaa_Front", label: "Frontend" },
        { url: "https://github.com/Roufaida-As/Shifaa_Backend", label: "Backend" },
      ],
      hasLiveUrl: false,
    },
    {
      id: 6,
      title: "Linkly",
      description: "Full-stack URL shortener that transforms long links into clean, shareable short URLs. Built with React, Express, and MongoDB.",
      image: "assets/linkly.png",
      technologies: ["React", "Tailwind CSS", "Express", "MongoDB"],
      category: "web",
      liveUrl: "https://linky-url-shortener.vercel.app/",
      githubRepos: [{ url: "https://github.com/Roufaida-As/Linkly-URL-Shortener", label: "GitHub" }],
      hasLiveUrl: true,
    },
  ];

  const categories = [
    { key: "all", label: "All" },
    { key: "web", label: "Web" },
    { key: "mobile", label: "Mobile" },
  ];

  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);

  return (
    <section
      id="projects"
      style={{
        background: "var(--bg)",
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
          Work
        </p>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          color: "var(--ink)",
          letterSpacing: "-0.02em",
          marginBottom: "0.5rem",
        }}>
          Selected Projects
        </h2>

        <div style={{ width: "40px", height: "1px", background: "var(--accent)", marginBottom: "2.5rem" }} />

        {/* Filter tabs */}
        <div style={{ display: "flex", gap: "0", marginBottom: "3rem", borderBottom: "1px solid var(--border)" }}>
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              style={{
                padding: "0.625rem 1.5rem",
                background: "none",
                border: "none",
                borderBottom: filter === cat.key ? "2px solid var(--accent)" : "2px solid transparent",
                marginBottom: "-1px",
                fontSize: "0.8125rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: filter === cat.key ? "var(--accent)" : "var(--ink-muted)",
                cursor: "pointer",
                transition: "color 0.2s",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}>
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--card)",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        borderRadius: "4px",
        overflow: "hidden",
        transition: "border-color 0.25s, box-shadow 0.25s",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.08)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
        {/* Category badge */}
        <span style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          padding: "3px 10px",
          background: "var(--bg)",
          border: "1px solid var(--border)",
          borderRadius: "2px",
          fontSize: "0.6875rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--ink-muted)",
          fontWeight: 500,
        }}>
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "var(--ink)",
          marginBottom: "0.625rem",
          letterSpacing: "-0.01em",
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: "0.875rem",
          lineHeight: 1.7,
          color: "var(--ink-muted)",
          marginBottom: "1.25rem",
          flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "1.25rem" }}>
          {project.technologies.map((tech, i) => (
            <span key={i} style={{
              padding: "2px 8px",
              background: "var(--bg-alt)",
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

        {/* Links */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
          {project.hasLiveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "var(--accent)",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              Live Demo
            </a>
          )}
          {project.githubRepos.map((repo, i) => (
            <a
              key={i}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "var(--ink-muted)",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--ink)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--ink-muted)"}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              {repo.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;