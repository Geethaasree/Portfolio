"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => {
        return pathname === path;
    };

    return (
        <nav
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                ? "backdrop-blur-md bg-gray-900/80 shadow-lg shadow-black/20"
                : "bg-gray-900"
                } border-b border-gray-700`}
        >
            <div className="max-w-[1100px] mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-3xl font-bold text-white transition-colors hover:text-blue-400">
                        Koneru Geethaa Sree
                    </Link>
                    <div className="flex gap-12 text-lg">
                        <Link href="/" className="relative group">
                            <span className={`transition-colors ${isActive("/") ? "text-white" : "text-gray-400 hover:text-white"}`}>
                                Home
                            </span>
                            {isActive("/") && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 animate-fadeIn"></span>
                            )}
                        </Link>
                        <Link href="/software" className="relative group">
                            <span className={`transition-colors ${isActive("/software") ? "text-white" : "text-gray-400 hover:text-white"}`}>
                                Software
                            </span>
                            {isActive("/software") && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 animate-fadeIn"></span>
                            )}
                        </Link>
                        <Link href="/ai" className="relative group">
                            <span className={`transition-colors ${isActive("/ai") ? "text-white" : "text-gray-400 hover:text-white"}`}>
                                AI / ML
                            </span>
                            {isActive("/ai") && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 animate-fadeIn"></span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
