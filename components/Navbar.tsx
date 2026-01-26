"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu when pathname changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const isActive = (path: string) => {
        return pathname === path;
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Software", href: "/software" },
        { name: "AI / ML", href: "/ai" },
    ];

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? "backdrop-blur-md bg-gray-900/80 shadow-lg shadow-black/20"
                : "bg-gray-900"
                } border-b border-gray-700`}
        >
            <div className="max-w-[1100px] mx-auto px-6 py-4 md:py-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-2xl md:text-3xl font-bold text-white transition-colors hover:text-blue-400 truncate mr-4">
                        Koneru Geethaa Sree
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-12 text-lg">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="relative group">
                                <span className={`transition-colors ${isActive(link.href) ? "text-white" : "text-gray-400 hover:text-white"}`}>
                                    {link.name}
                                </span>
                                {isActive(link.href) && (
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 animate-fadeIn"></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-64 opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-lg py-2 transition-colors ${isActive(link.href) ? "text-blue-400 font-medium" : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
