import React, { useState } from 'react';
import { useTheme } from "../../themeProvider";
import FloatingParticles from "../components/FloatingParticles";

const About = () => {
    const { darkMode, toggleTheme } = useTheme();

    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
                { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
                { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
            ]
        },
        {
            title: "Web Technologies",
            skills: [
                { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "Angular.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
                { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
                { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            ]
        },
        {
            title: "Mobile Technologies",
            skills: [
                { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" }
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
                { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
            ]
        },
        {
            title: "Tools & Services",
            skills: [
                { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
                { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
                { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
            ]
        }
    ];

    return (
        <section
            id="about"
            className={`py-16 px-4 md:px-8 relative ${darkMode
                ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-purple-900'
                : 'bg-gradient-to-br from-slate-50 via-white to-purple-50'
                }`}
        >

            {/* Floating particles */}
            <FloatingParticles darkMode={darkMode} />

            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode
                        ? 'text-white'
                        : 'text-slate-800'
                        }`}>
                        About Me
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                {/* About Description - Centered on mobile */}
                                <div className="grid grid-cols-1  gap-6 mb-12">
                                    <div className={`p-6 rounded-2xl mx-auto md:mx-0 max-w-2xl md:max-w-none ${darkMode
                                        ? 'bg-slate-800/50 border border-slate-700/50'
                                        : 'bg-white/70 border border-purple-100/50'
                                        } backdrop-blur-sm`}>
                                        <p className={`text-lg leading-relaxed text-center  ${darkMode
                                            ? 'text-slate-300'
                                            : 'text-slate-600'
                                            }`}>
                                            I'm a passionate web and flutter developer with a love for creating
                                            intuitive user experiences. From concept to deployment, I enjoy creating efficient, scalable
                                            solutions and bringing ideas to life through clean and maintainable code, I'm always eager to learn new technologies
                                            and tackle challenging problems that push the boundaries of
                                            what's possible in software development.
                                        </p>
                                    </div>
                                </div>

                                {/* Skills Grid - Centered on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-2xl ${darkMode
                                ? 'bg-slate-800/50 border border-slate-700/50'
                                : 'bg-white/70 border border-purple-100/50'
                                } backdrop-blur-sm`}
                        >
                            <h3 className={`text-lg font-semibold mb-4 text-center md:text-left ${darkMode
                                ? 'text-white'
                                : 'text-slate-800'
                                }`}>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg ${darkMode
                                            ? 'bg-slate-700 text-slate-300 border border-slate-600 hover:bg-slate-600'
                                            : 'bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100'
                                            }`}
                                    >
                                        <img
                                            src={skill.logo}
                                            alt={skill.name}
                                            className="w-5 h-5 hover:animate-none transition-all duration-300"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                        <span className="text-sm font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;