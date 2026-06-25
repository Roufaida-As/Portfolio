import React from "react";
import { useTheme } from "../../themeProvider";

const About = () => {
  const { darkMode } = useTheme();

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      ],
    },
    {
      title: "Web & Frameworks",
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
        { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
      ],
    },
    {
      title: "Architecture",
      skills: [
        { name: "MVC" },
        { name: "MVVM" },
        { name: "REST APIs" },
        { name: "WebSocket" },
        { name: "Microservices" },
        { name: "Event-Driven" },
        { name: "Layered" },
        { name: "Master-Slave" },
        { name: "P2P" },
      ],
    },
    {
      title: "DevOps & Infra",
      skills: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Apache Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
        { name: "MQTT" },
      ],
    },
    {
      title: "Compilation",
      skills: [
        { name: "Flex" },
        { name: "Bison" },
        { name: "Yacc" },
        { name: "OCaml", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      ],
    },
  ];

  return (
    <section
      id="about"
      style={{
        background: "var(--bg-alt)",
        borderTop: "1px solid var(--border)",
        padding: "6rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section label */}
        <p style={{
          fontSize: "0.75rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--accent-warm)",
          fontWeight: 500,
          marginBottom: "1rem",
        }}>
          About
        </p>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          color: "var(--ink)",
          letterSpacing: "-0.02em",
          marginBottom: "0.5rem",
        }}>
          Building things that matter.
        </h2>

        <div style={{
          width: "40px",
          height: "1px",
          background: "var(--accent)",
          marginBottom: "3rem",
        }} />

        

        {/* Skills */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {skillCategories.map((cat, i) => (
            <div key={i}>
              <p style={{
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                fontWeight: 500,
                marginBottom: "1rem",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "0.5rem",
              }}>
                {cat.title}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
                {cat.skills.map((skill, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.4rem 0.875rem",
                      border: "1px solid var(--border)",
                      borderRadius: "2px",
                      background: "var(--card)",
                      fontSize: "0.8125rem",
                      color: "var(--ink)",
                      cursor: "default",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
                  >
                    {skill.logo && (
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        style={{ width: "16px", height: "16px", flexShrink: 0 }}
                        onError={e => { e.target.style.display = "none"; }}
                      />
                    )}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-bio-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default About;