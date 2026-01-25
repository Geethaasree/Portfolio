"use client";

import { useEffect, useState } from "react";

export default function TypewriterText() {
    const titles = [
        "Software Development Engineer",
        "Artificial Intelligence Engineer",
        "Machine Learning Engineer"
    ];

    const [displayText, setDisplayText] = useState("");
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentTitle = titles[titleIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = isDeleting ? 500 : 2000;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (charIndex < currentTitle.length) {
                    setDisplayText(currentTitle.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    // Finished typing, pause then start deleting
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                // Deleting
                if (charIndex > 0) {
                    setDisplayText(currentTitle.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    // Finished deleting, move to next title
                    setIsDeleting(false);
                    setTitleIndex((titleIndex + 1) % titles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, titleIndex, titles]);

    return (
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent min-h-24 md:min-h-28 flex items-start">
            {displayText}
            <span className="animate-pulse ml-1">|</span>
        </h2>
    );
}
