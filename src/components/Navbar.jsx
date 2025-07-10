import { useState, useEffect } from "react";
import { useTheme } from "../../themeProvider";

// Custom Link component to replace react-scroll
const ScrollLink = ({ to, children, activeClass, className, onClick, isActive }) => {
    const handleClick = (e) => {
        e.preventDefault();
        if (to === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(to);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        if (onClick) onClick();
    };

    return (
        <a
            href={`#${to}`}
            onClick={handleClick}
            className={`${className} ${isActive ? activeClass : ""}`}
        >
            {children}
        </a>
    );
};

// Custom Hamburger component - FIXED
const CustomHamburger = ({ toggled, toggle, color }) => {
    return (
        <button
            onClick={() => toggle(!toggled)}
            className="relative w-8 h-8 focus:outline-none"
            aria-label="Toggle menu"
        >
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span
                    className={`block h-0.5 w-6 transform transition-all duration-300 ${toggled ? "rotate-45 translate-y-1" : "-translate-y-1"
                        }`}
                    style={{ backgroundColor: color }}
                />
                <span
                    className={`block h-0.5 w-6 transform transition-all duration-300 ${toggled ? "opacity-0" : "opacity-100"
                        }`}
                    style={{ backgroundColor: color }}
                />
                <span
                    className={`block h-0.5 w-6 transform transition-all duration-300 ${toggled ? "-rotate-45 -translate-y-1" : "translate-y-1"
                        }`}
                    style={{ backgroundColor: color }}
                />
            </div>
        </button>
    );
};

const Navbar = () => {
    const { darkMode, toggleTheme } = useTheme();
    const [toggle, setToggle] = useState(false);
    const [activeSection, setActiveSection] = useState("/"); // Default to Home

    const links = [
        {
            name: "Home",
            route: "/",
        },
        {
            name: "About",
            route: "about",
        },
        {
            name: "Projects",
            route: "projects",
        },
        {
            name: "Contact",
            route: "contact",
        },
    ];

    // Function to handle section changes
    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    // Optional: Auto-detect active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            // Check if at top of page
            if (scrollPosition < 200) {
                setActiveSection("/");
                return;
            }

            // Check each section
            const sections = ["about", "services", "projects", "contact"];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const elementTop = element.offsetTop;
                    const elementBottom = elementTop + element.offsetHeight;

                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        setActiveSection(section);
                        return;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={
                darkMode
                    ? "bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900 backdrop-blur-lg bg-opacity-95 border-b border-slate-700/50 z-50 shadow-2xl md:px-8 px-4 fixed w-full top-0"
                    : "bg-gradient-to-r from-white via-purple-50 to-rose-50 backdrop-blur-lg bg-opacity-95 border-b border-purple-200/50 z-50 shadow-2xl md:px-8 px-4 fixed w-full top-0"
            }
        >
            <div className="flex justify-between items-center py-3 md:py-5 md:px-2 mx-auto max-w-7xl">
                {/* Logo with animated gradient */}
                <div className="flex items-center cursor-pointer group">
                    <a
                        href="/"
                        className={
                            darkMode
                                ? "text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent hover:from-purple-300 hover:via-pink-300 hover:to-rose-300 transition-all duration-300 transform group-hover:scale-105"
                                : "text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent hover:from-purple-700 hover:via-pink-700 hover:to-rose-700 transition-all duration-300 transform group-hover:scale-105"
                        }
                        onClick={() => handleSectionChange("/")}
                    >
                        {"{</>}"}
                    </a>
                    <div className="ml-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden justify-between items-center w-full md:flex md:w-auto">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-1 md:mt-0 md:text-sm md:font-medium">
                        {links.map((el, index) => {
                            const isActive = activeSection === el.route;
                            return (
                                <li key={index} className="cursor-pointer relative group">
                                    <ScrollLink
                                        to={el.route}
                                        isActive={isActive}
                                        activeClass={
                                            darkMode
                                                ? "text-purple-400 scale-105 shadow-lg"
                                                : "text-purple-700 scale-105 shadow-lg"
                                        }
                                        spy={true}
                                        smooth={true}
                                        onClick={() => handleSectionChange(el.route)}
                                        className={
                                            darkMode
                                                ? "block py-3 px-6 text-slate-300 hover:text-purple-400 rounded-full relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                                : "block py-3 px-6 text-slate-700 hover:text-purple-700 rounded-full relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                        }
                                    >
                                        <span className="relative z-10">{el.name}</span>
                                        <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full transform transition-transform duration-300 ${isActive ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}></div>
                                    </ScrollLink>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Theme Toggle with enhanced styling */}
                    <div
                        onClick={toggleTheme}
                        className="ml-8 p-2 rounded-full cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-110"
                        style={{
                            background: darkMode
                                ? 'linear-gradient(135deg, #1e293b, #334155)'
                                : 'linear-gradient(135deg, #f8fafc, #e2e8f0)'
                        }}
                    >
                        {darkMode ? (
                            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>
                </div>

                {/* Mobile Controls */}
                <div className="flex md:hidden items-center space-x-4 z-50">
                    <div
                        onClick={toggleTheme}
                        className="p-2 rounded-full cursor-pointer transition-all duration-300 hover:shadow-lg transform hover:scale-110"
                        style={{
                            background: darkMode
                                ? 'linear-gradient(135deg, #1e293b, #334155)'
                                : 'linear-gradient(135deg, #f8fafc, #e2e8f0)'
                        }}
                    >
                        {darkMode ? (
                            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                            </svg>
                        )}
                    </div>

                    <div className="p-1 rounded-full">
                        <CustomHamburger
                            toggled={toggle}
                            toggle={setToggle}
                            color={darkMode ? "#d8b4fe" : "#9333ea"}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {toggle && (
                <div
                    className={
                        darkMode
                            ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-lg bg-opacity-95 border border-slate-700/50 py-4 px-4 z-50 fixed top-20 mt-2 rounded-2xl shadow-2xl right-4 block w-48 animate-in slide-in-from-right-2 duration-300"
                            : "bg-gradient-to-br from-white via-purple-50 to-rose-50 backdrop-blur-lg bg-opacity-95 border border-purple-200/50 py-4 px-4 z-50 fixed top-20 mt-2 rounded-2xl shadow-2xl right-4 block w-48 animate-in slide-in-from-right-2 duration-300"
                    }
                >
                    <ul className="space-y-2">
                        {links.map((el, index) => {
                            const isActive = activeSection === el.route;
                            return (
                                <li key={index} className="group">
                                    <ScrollLink
                                        to={el.route}
                                        isActive={isActive}
                                        activeClass={
                                            darkMode
                                                ? "text-purple-400 bg-gradient-to-r from-purple-900/30 to-pink-900/30 scale-105 shadow-lg"
                                                : "text-purple-700 bg-gradient-to-r from-purple-100 to-pink-100 scale-105 shadow-lg"
                                        }
                                        className={
                                            darkMode
                                                ? "hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-pink-900/30 text-slate-300 hover:text-purple-400 block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                                : "hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 text-slate-700 hover:text-purple-700 block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                        }
                                        spy={true}
                                        smooth={true}
                                        onClick={() => {
                                            handleSectionChange(el.route);
                                            setToggle(false);
                                        }}
                                    >
                                        <span className="relative z-10">{el.name}</span>
                                    </ScrollLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;