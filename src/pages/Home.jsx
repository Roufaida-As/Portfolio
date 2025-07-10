import React, { useState, useEffect } from "react";
import { useTheme } from "../../themeProvider";
import FloatingParticles from "../components/FloatingParticles";

// Typing animation component
const TypeWriter = ({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[currentIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentText.length) {
                    setDisplayText(currentText.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? deleteSpeed : speed);

        return () => clearTimeout(timeout);
    }, [displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

    return <span>{displayText}<span className="animate-pulse">|</span></span>;
};



// Contact links data
// const contactLinks = [
//     {
//         name: "LinkedIn",
//         url: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg",
//         link: "https://www.linkedin.com/in/asbar-roufaida-658b50254/"
//     },
//     {
//         name: "GitHub",
//         url: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg",
//         link: "https://github.com/Roufaida-As"
//     },
//     {
//         name: "Email",
//         url: "https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg",
//         link: "mr_asbar@esi.dz"
//     }
// ];

const Home = () => {
    const { darkMode, toggleTheme } = useTheme(); 
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = 'src/assets/Asbar-Roufaida CV.pdf';
        link.download = 'Asbar-Roufaida CV.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Dynamic background */}
            <div className={`absolute inset-0 transition-all duration-1000 ${darkMode
                ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-900'
                : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'
                }`}>
                {/* Animated gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 animate-pulse"></div> */}
            </div>

            {/* Interactive cursor effect */}
            <div
                className="fixed w-4 h-4 bg-gradient-to-r from-[#ec4899] to-[#f97316] rounded-full pointer-events-none z-50 mix-blend-difference"
                style={{
                    left: mousePosition.x - 8,
                    top: mousePosition.y - 8,
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.1s ease-out'
                }}
            />

            {/* Floating particles */}
            <FloatingParticles darkMode={darkMode} />

            {/* Main content */}
            <main className="relative z-10 min-h-screen flex items-center justify-center w-full">
                <div className="w-full px-8 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-8 lg:gap-16">

                        {/* Left side - Text content */}
                        <div className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}>

                            {/* Greeting */}
                            <div className="mb-8 ml-6">
                                <h2 className={`text-2xl md:text-3xl font-light mt-8 ${darkMode ? 'text-purple-300' : 'text-purple-600'
                                    }`}>
                                    Hello, I'm
                                </h2>

                                <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-800'
                                    }`}>
                                    <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                                        Roufaida
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        Asbar
                                    </span>
                                </h1>
                            </div>

                            {/* Typing animation */}
                            <div className="mb-8 ml-6">
                                <h2 className={`text-2xl md:text-3xl font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-700'
                                    }`}>
                                    <TypeWriter
                                        texts={[
                                            "Web Developer",
                                            "Flutter Developer",
                                            "Computer Science Student",

                                        ]}
                                        speed={100}
                                        deleteSpeed={50}
                                        pauseTime={2000}
                                    />
                                </h2>
                            </div>

                            {/* Bio */}
                            <p className={`text-lg md:text-xl mb-8 ml-6 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'
                                }`}>
                                I'm a third-year student at the Higher National School of Computer Science,
                                passionate about creating beautiful web experiences and mobile applications.
                                I specialize in modern web technologies and Flutter development.
                            </p>

                            {/* Social links
                            <div className="flex justify-center lg:justify-start ml-6 space-x-6 mb-8">
                                {contactLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.link}
                                        className={`p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl ${darkMode
                                            ? 'bg-slate-800 hover:bg-slate-700 text-white'
                                            : 'bg-white hover:bg-purple-50 text-slate-700'
                                            }`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={link.url}
                                            alt={link.name}
                                            className="w-6 h-6 filter"
                                            style={{ filter: darkMode ? 'invert(1)' : 'invert(0)' }}
                                        />
                                    </a>
                                ))}
                            </div> */}

                            {/* CTA Buttons */}
                            <div className="flex flex-col ml-6 sm:flex-row gap-4 justify-center lg:justify-start">
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                                >
                                    View My Work
                                </button>

                                <button
                                    onClick={downloadCV}
                                    className={`px-8 py-4 font-semibold rounded-full border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 ${darkMode
                                        ? 'border-purple-400 text-purple-600 hover:bg-purple-400 hover:text-purple-600'
                                        : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-purple-600'
                                        }`}
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-5 w-5" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                                        />
                                    </svg>
                                    Download CV
                                </button>
                            </div>
                        </div>

                        {/* Right side - Visual element */}
                        <div className={`w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}>

                            {/* Animated geometric shapes */}
                            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">

                                {/* Main circle */}
                                <div className={`absolute w-105 h-105 rounded-full border-4 animate-spin-slow ${darkMode ? 'border-purple-400/30' : 'border-purple-600/30'
                                    }`} style={{ animationDuration: '20s' }}>
                                </div>

                                { /* Secondary circle */}
                                <div className={`absolute w-90 h-90 rounded-full border-2 animate-spin-slow ${darkMode ? 'border-pink-400/20' : 'border-pink-600/20'
                                    }`} style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                                </div>

                                <div className={` w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl flex items-center justify-center ${darkMode ? 'shadow-purple-500/50' : 'shadow-purple-500/30'
                                    }`}>
                                    <div className="w-76 h-76 rounded-full bg-gradient-to-br from-white to-purple-100 overflow-hidden flex items-center justify-center">
                                        <img
                                            src="assets/roufaida.jpg"
                                            alt="Roufaida"
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Home;