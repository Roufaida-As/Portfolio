import React, { useState, useEffect } from 'react';

const FloatingParticles = ({ darkMode }) => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        // Generate particles with random properties
        const generateParticles = () => {
            return Array.from({ length: 20 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 8 + 3,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.3 + 0.1,
                animationDelay: Math.random() * 4,
                animationDuration: Math.random() * 3 + 2,
            }));
        };

        setParticles(generateParticles());
    }, []);

    useEffect(() => {
        // Animate particles
        const animateParticles = () => {
            setParticles(prevParticles => 
                prevParticles.map(particle => {
                    let newX = particle.x + particle.speedX;
                    let newY = particle.y + particle.speedY;
                    let newSpeedX = particle.speedX;
                    let newSpeedY = particle.speedY;

                    // Bounce off edges
                    if (newX <= 0 || newX >= 100) {
                        newSpeedX = -newSpeedX;
                        newX = Math.max(0, Math.min(100, newX));
                    }
                    if (newY <= 0 || newY >= 100) {
                        newSpeedY = -newSpeedY;
                        newY = Math.max(0, Math.min(100, newY));
                    }

                    return {
                        ...particle,
                        x: newX,
                        y: newY,
                        speedX: newSpeedX,
                        speedY: newSpeedY,
                    };
                })
            );
        };

        const interval = setInterval(animateParticles, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="absolute rounded-full transition-all duration-75 ease-linear"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: particle.opacity,
                        background: darkMode
                            ? `linear-gradient(45deg, #8b5cf6, #ec4899, #f97316)`
                            : `linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899)`,
                        boxShadow: darkMode
                            ? `0 0 ${particle.size * 2}px rgba(139, 92, 246, 0.3)`
                            : `0 0 ${particle.size * 2}px rgba(99, 102, 241, 0.3)`,
                        animation: `pulse ${particle.animationDuration}s ease-in-out infinite`,
                        animationDelay: `${particle.animationDelay}s`,
                    }}
                />
            ))}
            <style jsx>{`
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.3; }
                    50% { transform: scale(1.2); opacity: 0.6; }
                }
            `}</style>
        </div>
    );
};

export default FloatingParticles;