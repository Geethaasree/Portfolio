import Link from "next/link";
import Image from "next/image";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import SVGDivider from "@/components/SVGDivider";

export default function Home() {
    return (
        <div className="max-w-[1100px] mx-auto px-6">
            {/* Hero Section */}
            <section className="relative w-full min-h-screen flex items-center justify-center py-20">
                <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-6 animate-fadeIn">
                        <p className="text-sm text-gray-400 uppercase tracking-wider">Software Development Engineer</p>

                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-2">
                                Hello I'm
                            </h1>
                            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                                Koneru Geethaa Sree
                            </h1>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                            Entry-level engineer building backend systems and machine learning applications with a focus on reliability, performance, and clean design.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/software"
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 shadow-lg shadow-blue-500/30 text-center rounded-lg"
                            >
                                View My Work
                            </Link>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 shadow-lg shadow-blue-500/30 text-center rounded-lg"
                            >
                                Resume
                            </a>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
                            <div className="animate-fadeIn animation-delay-200">
                                <div className="text-4xl font-bold text-white mb-1">3+</div>
                                <div className="text-sm text-gray-400">Projects Completed</div>
                            </div>
                            <div className="animate-fadeIn animation-delay-400">
                                <div className="text-4xl font-bold text-white mb-1">6+</div>
                                <div className="text-sm text-gray-400">Certifications</div>
                            </div>
                            <div className="animate-fadeIn animation-delay-600">
                                <div className="text-4xl font-bold text-white mb-1">2</div>
                                <div className="text-sm text-gray-400">Awards Won</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Profile Photo with Animated Ring */}
                    <div className="flex justify-center md:justify-end animate-fadeIn animation-delay-400">
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            {/* Animated Glowing Ring */}
                            <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                                <defs>
                                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                                        <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="48"
                                    fill="none"
                                    stroke="url(#ringGradient)"
                                    strokeWidth="2"
                                    strokeDasharray="10 5"
                                    filter="url(#glow)"
                                    className="animate-pulse"
                                />
                            </svg>

                            {/* Profile Photo */}
                            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/50">
                                <Image
                                    src="/profile.jpeg"
                                    alt="Koneru Geethaa Sree"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Particles */}
                            <div className="absolute top-10 right-10 w-3 h-3 bg-blue-400 rounded-full animate-float opacity-60"></div>
                            <div className="absolute bottom-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-float animation-delay-200 opacity-60"></div>
                            <div className="absolute top-1/2 right-5 w-2 h-2 bg-blue-500 rounded-full animate-float animation-delay-400 opacity-60"></div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </section>

            {/* Section Divider */}
            <SVGDivider variant="line" className="my-4" />
            <SVGDivider variant="line" className="my-4" />
        </div>
    );
}
