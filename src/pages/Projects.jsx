import React, { useState, useEffect } from 'react';
import FloatingParticles from '../components/FloatingParticles';
import { useTheme } from "../../themeProvider";


const Projects = () => {
    const { darkMode, toggleTheme } = useTheme();
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: "BagsShop",
            description: "BagsShop is a modern e-commerce web application built using React for the frontend and a backend powered by Node.js, Express and MongoDB. The project allows users to browse, view, and purchase women's bags.",
            image: "src/assets/bagShop.png",
            technologies: ["React.js", "CSS", "Express.js", "MongoDB"],
            category: "web",
            liveUrl: "https://bags-shop.vercel.app/",
            githubRepos: [
                {
                    url: "https://github.com/Roufaida-As/BagsShop",
                    label: " Main Repository"
                },
            ],
            hasLiveUrl: true
        },
        {
            id: 2,
            title: "DonaVita",
            description: "DonaVita is an innovative mobile application built using Flutter and Firebase, Designed to facilitate and enhance the donation process between donators and organisations.",
            image: "src/assets/donavita.jpg",
            technologies: ["Flutter", "Dart", "Firebase"],
            category: "mobile",
            liveUrl: "https://play.google.com/store",
            githubRepos: [
                {
                    url: "https://github.com/Roufaida-As/DonaVita-Donors-side",
                    label: "Donors App"
                },
                {
                    url: "https://github.com/Roufaida-As/DonaVita-Organisations-side",
                    label: "Organizations App"
                }
            ],
            hasLiveUrl: false
        },
        {
            id: 3,
            title: "Sabeel",
            description: "Sabeel is a web application that connects volunteers with local community events. Users can search and filter opportunities by category, date, and location, then join event-specific chat groups for team coordination.",
            image: "src/assets/Sabeel.png",
            technologies: ["React", "CSS", "TypeScript", "Express.js", "Postgresql", "Socket.io",],
            category: "web",
            liveUrl: "",
            githubRepos: [
                {
                    url: "https://github.com/Roufaida-As/Sabeel_backend",
                    label: "Backend Repository"
                },
                {
                    url: "https://github.com/Roufaida-As/Sabeel-frontend",
                    label: "Frontend Repository"
                }
            ],
            hasLiveUrl: false
        },
        {
            id: 4,
            title: "Merchandising AI App",
            description: "This mobile application, developed using Flutter, is designed to optimize merchandising operations through AI-powered image analysis. Proposed by Ramy, the project aims to assist merchandisers and customers in tracking product placement and shelf distribution efficiently.",
            image: "src/assets/ramy.jpg",
            technologies: ["Dart", "Flutter"],
            category: "mobile",
            liveUrl: "",
            githubRepos: [
                {
                    url: "https://github.com/Roufaida-As/AUP_SHE_CODES_MOBILE_APP",
                    label: "Main Repository"
                }
            ],
            hasLiveUrl: false
        },
        {
            id: 5,
            title: "Shifaa",
            description: "A web-based application for managing electronic patient records. It allows healthcare professionals to store, retrieve, and update patient information securely. My role was based on frontend side.",
            image: "src/assets/Shifaa.png",
            technologies: ["Angular", "CSS", "TypeScript", "Django", "MySql"],
            category: "web",
            liveUrl: "",
            githubRepos: [
                {
                    url: "https://github.com/Roufaida-As/Shifaa_Front",
                    label: "Frontend Repository"
                },
                {
                    url: " https://github.com/Roufaida-As/Shifaa_Backend",
                    label: "Backend Repository"
                }

            ],
            hasLiveUrl: false
        },
        {
            id: 6,
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, and optimized performance.",
            image: "src/assets/portfolio.png",
            technologies: ["React", "Tailwind CSS"],
            category: "web",
            liveUrl: "",
            githubRepos: [
                {
                    url: "",
                    label: "Main Repository"
                }
            ],
            hasLiveUrl: false
        }
    ];

    const categories = [
        { key: 'all', label: 'All Projects' },
        { key: 'web', label: 'Web Development' },
        { key: 'mobile', label: 'Mobile Apps' }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section
            id="projects"
            className={`py-16 px-4 md:px-8 relative ${darkMode
                ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
                : 'bg-gradient-to-br from-slate-50 via-white to-purple-50'
                }`}
        >
            {/* Floating particles */}
            <FloatingParticles darkMode={darkMode} />
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode
                        ? 'text-white'
                        : 'text-slate-800'
                        }`}>
                        My Projects
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    <p className={`mt-4 text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        Here are some of my recent projects that showcase my skills and creativity
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.key}
                            onClick={() => setFilter(category.key)}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${filter === category.key
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                                : darkMode
                                    ? 'bg-slate-800/50 text-purple-600 border border-slate-700/50 hover:bg-slate-700/50'
                                    : 'bg-white/70 text-slate-700 border border-purple-100/50 hover:bg-purple-50/70'
                                } backdrop-blur-sm hover:shadow-lg`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${darkMode
                                ? 'bg-slate-800/50 border border-slate-700/50'
                                : 'bg-white/70 border border-purple-100/50'
                                } backdrop-blur-sm`}
                        >

                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Project Links Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {/* Conditionally render live URL button */}
                                    {project.hasLiveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/90 rounded-full text-slate-700 hover:bg-white transition-colors duration-300"
                                            title="View Live Site"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}

                                    {/* GitHub repositories */}
                                    {project.githubRepos.map((repo, index) => (
                                        <a
                                            key={index}
                                            href={repo.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/90 rounded-full text-slate-700 hover:bg-white transition-colors duration-300"
                                            title={`View ${repo.label} on GitHub`}
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-slate-800'}`}>
                                    {project.title}
                                </h3>
                                <p className={`text-sm mb-4  ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode
                                                ? 'bg-slate-700 text-slate-300'
                                                : 'bg-purple-50 text-purple-700'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>


                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default Projects;