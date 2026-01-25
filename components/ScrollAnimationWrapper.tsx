"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollAnimationWrapperProps {
    children: ReactNode;
    className?: string;
    threshold?: number;
    delay?: number;
}

export default function ScrollAnimationWrapper({
    children,
    className = "",
    threshold = 0.1,
    delay = 0,
}: ScrollAnimationWrapperProps) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                    }, delay);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [threshold, delay]);

    return (
        <div
            ref={elementRef}
            className={`${className} ${isVisible ? "animate-slideUp" : "opacity-0"}`}
        >
            {children}
        </div>
    );
}
