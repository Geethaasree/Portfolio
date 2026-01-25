"use client";

import { useEffect, useRef, useState } from 'react';

interface ActiveHex {
    id: string;
    timestamp: number;
    color: string;
}

export default function HexBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
    const [mounted, setMounted] = useState(false);
    const [activeHexes, setActiveHexes] = useState<ActiveHex[]>([]);
    const [pulsePhase, setPulsePhase] = useState(0);

    useEffect(() => {
        setMounted(true);
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleChange);

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Continuous pulse animation
    useEffect(() => {
        if (prefersReducedMotion) return;

        const interval = setInterval(() => {
            setPulsePhase(prev => (prev + 0.02) % (Math.PI * 2));
        }, 50);

        return () => clearInterval(interval);
    }, [prefersReducedMotion]);

    useEffect(() => {
        if (prefersReducedMotion || !mounted) return;

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prefersReducedMotion, mounted]);

    // Fade out active hexes
    useEffect(() => {
        if (activeHexes.length === 0) return;

        const interval = setInterval(() => {
            const now = Date.now();
            setActiveHexes(prev =>
                prev.filter(hex => now - hex.timestamp < 2000) // 2 second fade
            );
        }, 50);

        return () => clearInterval(interval);
    }, [activeHexes.length]);

    if (!mounted) {
        return null;
    }

    const createHexPath = (cx: number, cy: number, size: number) => {
        const points = [];
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = cx + size * Math.cos(angle);
            const y = cy + size * Math.sin(angle);
            points.push(`${x},${y}`);
        }
        return `M ${points.join(' L ')} Z`;
    };

    const getDistanceFromMouse = (hexX: number, hexY: number) => {
        if (prefersReducedMotion) return 999;
        const dx = mousePos.x - hexX;
        const dy = mousePos.y - hexY;
        return Math.sqrt(dx * dx + dy * dy);
    };

    const getNeighbors = (row: number, col: number): Array<{ id: string, distance: number }> => {
        const neighbors = [];
        const offsets = col % 2 === 0
            ? [[-1, -1], [-1, 0], [0, -1], [0, 1], [1, -1], [1, 0]]
            : [[-1, 0], [-1, 1], [0, -1], [0, 1], [1, 0], [1, 1]];

        for (const [dr, dc] of offsets) {
            neighbors.push({ id: `hex-${row + dr}-${col + dc}`, distance: 1 });
        }

        // Add second ring
        const secondRing = col % 2 === 0
            ? [[-2, -1], [-2, 0], [-1, -2], [-1, 1], [0, -2], [0, 2], [1, -2], [1, 1], [2, -1], [2, 0]]
            : [[-2, 0], [-2, 1], [-1, -1], [-1, 2], [0, -2], [0, 2], [1, -1], [1, 2], [2, 0], [2, 1]];

        for (const [dr, dc] of secondRing) {
            neighbors.push({ id: `hex-${row + dr}-${col + dc}`, distance: 2 });
        }

        return neighbors;
    };

    const handleHexClick = (hexId: string, row: number, col: number, hexColor: string, e: React.MouseEvent) => {
        if (prefersReducedMotion) return;
        e.stopPropagation();

        const now = Date.now();
        const neighbors = getNeighbors(row, col);

        // Use the actual hexagon's color instead of random
        const clickColor = hexColor;

        // Create triangle pattern: clicked hex + 2 neighbors (3 total)
        const immediateNeighbors = neighbors.filter(n => n.distance === 1);
        const triangleNeighbors = immediateNeighbors.slice(0, 2); // Take only first 2 neighbors

        const newActiveHexes: ActiveHex[] = [
            { id: hexId, timestamp: now, color: clickColor }
        ];

        for (const neighbor of triangleNeighbors) {
            newActiveHexes.push({
                id: neighbor.id,
                timestamp: now,
                color: clickColor
            });
        }

        setActiveHexes(prev => [...prev, ...newActiveHexes]);
    };

    // Hexagon grid configuration
    const hexSize = 30; // Decreased from 35 to 30
    const hexWidth = hexSize * 2;
    const hexHeight = Math.sqrt(3) * hexSize;
    const cols = Math.ceil(dimensions.width / (hexWidth * 0.75)) + 2;
    const rows = Math.ceil(dimensions.height / hexHeight) + 4;

    // Smooth color transition from left to right
    const getColorForPosition = (x: number): string => {
        const progress = x / dimensions.width;

        if (progress < 0.2) {
            // Left side: Yellow to Amber
            return '#eab308';
        } else if (progress < 0.4) {
            // Amber to Purple
            return '#d97706';
        } else if (progress < 0.6) {
            // Purple to Cyan
            return '#a855f7';
        } else if (progress < 0.8) {
            // Cyan to Blue
            return '#06b6d4';
        } else {
            // Right side: Blue
            return '#3b82f6';
        }
    };

    const hexagons = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const x = col * hexWidth * 0.75;
            const y = row * hexHeight + (col % 2 === 1 ? hexHeight / 2 : 0);

            const parallaxOffset = prefersReducedMotion ? 0 : scrollY * 0.03;
            const adjustedY = y - parallaxOffset;

            const hexId = `hex-${row}-${col}`;
            const distance = getDistanceFromMouse(x, adjustedY);
            const isNearMouse = distance < 100;

            // Smooth color transition based on horizontal position
            const strokeColor = getColorForPosition(x);

            // Pulsing brightness effect
            const pulseOffset = (row * 0.3 + col * 0.5) % (Math.PI * 2);
            const pulseValue = Math.sin(pulsePhase + pulseOffset) * 0.5 + 0.5;
            const pulseOpacity = 0.2 + pulseValue * 0.25; // Oscillates between 0.2 and 0.45

            // Active hex state
            const activeHex = activeHexes.find(ah => ah.id === hexId);
            const timeSinceActivation = activeHex ? Date.now() - activeHex.timestamp : 0;
            const fadeProgress = activeHex ? Math.min(timeSinceActivation / 2000, 1) : 0;
            const fillOpacity = activeHex ? (0.25 * (1 - fadeProgress)) : 0;

            // Hover effect
            const hoverOpacity = isNearMouse ? Math.max(0.4, 0.7 - distance / 300) : pulseOpacity;
            const strokeOpacity = Math.max(hoverOpacity, pulseOpacity);

            hexagons.push({
                id: hexId,
                row,
                col,
                path: createHexPath(x, adjustedY, hexSize),
                strokeColor: activeHex ? activeHex.color : strokeColor,
                fillColor: activeHex ? activeHex.color : 'none',
                strokeOpacity,
                fillOpacity,
                isActive: !!activeHex,
                glow: isNearMouse || !!activeHex,
            });
        }
    }

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 overflow-hidden pointer-events-none"
            style={{ zIndex: 5 }}
            aria-hidden="true"
        >
            <svg
                className="w-full h-full pointer-events-auto"
                style={{
                    filter: 'blur(0.2px)',
                }}
            >
                <defs>
                    <filter id="hexGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {hexagons.map((hex) => (
                    <path
                        key={hex.id}
                        d={hex.path}
                        fill={hex.fillColor}
                        fillOpacity={hex.fillOpacity}
                        stroke={hex.strokeColor}
                        strokeWidth="0.8"
                        strokeOpacity={hex.strokeOpacity}
                        filter={hex.glow ? 'url(#hexGlow)' : undefined}
                        style={{
                            transition: prefersReducedMotion ? 'none' : 'fill-opacity 0.3s ease-out, stroke 0.3s ease-out',
                            cursor: 'pointer',
                            pointerEvents: 'all',
                        }}
                        onClick={(e) => handleHexClick(hex.id, hex.row, hex.col, hex.strokeColor, e)}
                    />
                ))}
            </svg>
        </div>
    );
}
