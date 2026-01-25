"use client";

import { useEffect, useRef, useState } from "react";

interface SVGDividerProps {
    variant?: "line" | "wave" | "diagonal";
    className?: string;
}

export default function SVGDivider({ variant = "line", className = "" }: SVGDividerProps) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, []);

    if (variant === "line") {
        return (
            <svg
                ref={elementRef}
                className={`w-full h-px ${className}`}
                viewBox="0 0 1000 2"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="0"
                    y1="1"
                    x2="1000"
                    y2="1"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-blue-500/30"
                    strokeDasharray="1000"
                    strokeDashoffset={isVisible ? "0" : "1000"}
                    style={{ transition: "stroke-dashoffset 2s cubic-bezier(0.65, 0, 0.35, 1)" }}
                />
            </svg>
        );
    }

    if (variant === "wave") {
        return (
            <svg
                ref={elementRef}
                className={`w-full h-4 ${className}`}
                viewBox="0 0 1000 20"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0,10 Q250,0 500,10 T1000,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-blue-500/30"
                    strokeDasharray="1500"
                    strokeDashoffset={isVisible ? "0" : "1500"}
                    style={{ transition: "stroke-dashoffset 2.5s cubic-bezier(0.65, 0, 0.35, 1)" }}
                />
            </svg>
        );
    }

    if (variant === "diagonal") {
        return (
            <svg
                ref={elementRef}
                className={`w-full h-8 ${className}`}
                viewBox="0 0 1000 40"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <line
                    x1="0"
                    y1="40"
                    x2="1000"
                    y2="0"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-blue-500/20"
                    strokeDasharray="1200"
                    strokeDashoffset={isVisible ? "0" : "1200"}
                    style={{ transition: "stroke-dashoffset 2s cubic-bezier(0.65, 0, 0.35, 1)" }}
                />
            </svg>
        );
    }

    return null;
}

