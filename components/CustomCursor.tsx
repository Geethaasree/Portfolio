"use client";

import { useEffect } from "react";

export default function CustomCursor() {
    useEffect(() => {
        const dots: HTMLDivElement[] = [];
        const MAX_DOTS = 3; // Shorter trail
        let mouseX = 0;
        let mouseY = 0;
        let lastDotX = 0;
        let lastDotY = 0;
        const MIN_DISTANCE = 5; // Very small distance before creating new dot
        const DOT_COLOR = '#7c3aed'; // Dark purple color
        let colorIndex = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Calculate distance from last dot
            const distance = Math.sqrt(
                Math.pow(mouseX - lastDotX, 2) + Math.pow(mouseY - lastDotY, 2)
            );

            // Only create dot if moved enough distance
            if (distance < MIN_DISTANCE) {
                return;
            }

            lastDotX = mouseX;
            lastDotY = mouseY;

            // Only create dot if under limit
            if (dots.length >= MAX_DOTS) {
                const oldDot = dots.shift();
                oldDot?.remove();
            }

            // Create colorful dot trail
            const dot = document.createElement("div");
            dot.className = "cursor-dot";
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
            dot.style.backgroundColor = DOT_COLOR;
            document.body.appendChild(dot);
            dots.push(dot);

            // Remove dot after animation
            setTimeout(() => {
                dot.remove();
                const index = dots.indexOf(dot);
                if (index > -1) {
                    dots.splice(index, 1);
                }
            }, 500);
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            dots.forEach(dot => dot.remove());
        };
    }, []);

    return (
        <>
            <style jsx global>{`

                .cursor-dot {
                    position: fixed;
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9998;
                    transform: translate(-2px, -2px);
                    animation: dotFade 0.5s ease-out forwards;
                    box-shadow: 0 0 4px currentColor;
                }

                @keyframes dotFade {
                    0% {
                        opacity: 1;
                        transform: translate(-2px, -2px) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(-2px, -2px) scale(0.1);
                    }
                }
            `}</style>
        </>
    );
}
