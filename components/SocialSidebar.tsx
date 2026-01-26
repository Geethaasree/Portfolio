"use client";

import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function SocialSidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Show button after scrolling down 200px
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
                setIsExpanded(false); // Close menu if scrolling back up
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-10'
            }`}>
            {/* All 4 Icons - Only visible when expanded, appear ABOVE the button */}
            {isExpanded && (
                <div className="flex flex-col gap-4 mb-2 items-end outline-none">
                    {/* GitHub - Top */}
                    <a
                        href="https://github.com/Geethaasree"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-125 transition-all duration-300 animate-fadeIn"
                        title="GitHub"
                    >
                        <FaGithub className="text-xl md:text-2xl text-gray-900" />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/koneru-geethaa-sree-a41607288/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:scale-125 transition-all duration-300 animate-fadeIn"
                        title="LinkedIn"
                        style={{ animationDelay: '50ms' }}
                    >
                        <FaLinkedin className="text-xl md:text-2xl text-white" />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:konerugeethaasree@gmail.com"
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30_rgba(255,255,255,0.5)] hover:scale-125 transition-all duration-300 animate-fadeIn"
                        title="Email"
                        style={{ animationDelay: '100ms' }}
                    >
                        <FaEnvelope className="text-xl md:text-2xl text-gray-900" />
                    </a>

                    {/* WhatsApp - Just above button */}
                    <a
                        href="https://wa.me/919705555767"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30_rgba(34,197,94,0.6)] hover:scale-125 transition-all duration-300 animate-fadeIn"
                        title="WhatsApp"
                        style={{ animationDelay: '150ms' }}
                    >
                        <FaWhatsapp className="text-xl md:text-2xl text-white" />
                    </a>
                </div>
            )}

            {/* Get In Touch Button - Always visible at the BOTTOM (when isVisible is true) */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:shadow-[0_0_40px_rgba(59,130,246,0.8)] hover:scale-110 active:scale-95 transition-all duration-500 animate-pulse-bounce ${isExpanded ? 'bg-gradient-to-r from-purple-500 to-pink-500 rotate-180' : 'bg-gradient-to-r from-blue-500 to-cyan-500 rotate-0'
                    }`}
                title="Get In Touch"
            >
                {isExpanded ? (
                    <span className="text-2xl md:text-3xl text-white font-bold leading-none">×</span>
                ) : (
                    <span className="text-[9px] md:text-[10px] font-black text-white text-center leading-[1] px-1 tracking-tighter uppercase drop-shadow-lg">Get in<br />Touch</span>
                )}
            </button>
        </div>
    );
}
