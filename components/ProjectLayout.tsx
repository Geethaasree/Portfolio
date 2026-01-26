import Link from "next/link";
import BackToHome from "@/components/BackToHome";

interface ProjectLayoutProps {
    title: string;
    summary: string;
    problem: string;
    solution: string;
    architecture: string;
    techStack: string[];
    keyWork: string[];
    decisions: string[];
    results: string[];
    learnings: string[];
    githubUrl?: string;
    projectDiagram?: React.ReactNode;
    category?: 'software' | 'ai';
}

export default function ProjectLayout({
    title,
    summary,
    problem,
    solution,
    architecture,
    techStack,
    keyWork,
    decisions,
    results,
    learnings,
    githubUrl = "#",
    projectDiagram,
    category = 'software'
}: ProjectLayoutProps) {
    const backUrl = category === 'ai' ? '/ai' : '/software';
    const backLabel = 'Back';

    return (
        <>
            <BackToHome backUrl={backUrl} backLabel={backLabel} />
            <div className="max-w-[1100px] mx-auto px-6 py-16 pointer-events-auto">
                {/* Header - Full Width */}
                <div className="mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {title}
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        {summary}
                    </p>
                </div>

                {/* Problem & Solution - Side by Side */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="corner-light corner-light-red bg-gray-900/95 backdrop-blur-xl p-8 rounded-2xl border border-red-500/30 shadow-lg shadow-red-500/10 transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
                        <h2 className="text-2xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                            <span className="text-3xl">⚠️</span> Problem
                        </h2>
                        <p className="text-gray-300 leading-relaxed">{problem}</p>
                    </div>

                    <div className="corner-light corner-light-green bg-gray-900/95 backdrop-blur-xl p-8 rounded-2xl border border-green-500/30 shadow-lg shadow-green-500/10 transition-all duration-300 hover:translate-x-2 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20">
                        <h2 className="text-2xl font-semibold text-green-400 mb-4 flex items-center gap-2">
                            <span className="text-3xl">✓</span> Solution
                        </h2>
                        <p className="text-gray-300 leading-relaxed">{solution}</p>
                    </div>
                </div>

                {/* Architecture Overview - Full Width */}
                <div className="corner-light corner-light-blue bg-gray-900/95 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-500/10 mb-12 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20">
                    <h2 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                        <span className="text-3xl">🏗️</span> Architecture Overview
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-6">{architecture}</p>
                    {projectDiagram || (
                        <div className="border border-gray-700 bg-gray-800 p-8 text-center text-gray-400 rounded-lg">
                            [Architecture Diagram Placeholder]
                        </div>
                    )}
                </div>

                {/* Tech Stack & Key Work - Side by Side */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="corner-light corner-light-purple bg-gray-900/95 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/30 shadow-lg shadow-purple-500/10 transition-all duration-300 hover:-translate-x-3 hover:shadow-2xl hover:shadow-purple-500/20">
                        <h2 className="text-2xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                            <span className="text-3xl">🛠️</span> Tech Stack
                        </h2>
                        <ul className="space-y-3">
                            {techStack.map((tech, index) => (
                                <li key={index} className="text-gray-300 flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">▸</span>
                                    <span>{tech}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="corner-light corner-light-cyan bg-gray-900/95 backdrop-blur-xl p-8 rounded-2xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:translate-x-3 hover:shadow-2xl hover:shadow-cyan-500/20">
                        <h2 className="text-2xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                            <span className="text-3xl">⚙️</span> Key Engineering Work
                        </h2>
                        <ul className="space-y-3">
                            {keyWork.map((work, index) => (
                                <li key={index} className="text-gray-300 flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">▸</span>
                                    <span>{work}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Engineering Decisions - Full Width */}
                <div className="corner-light corner-light-yellow bg-gray-900/95 backdrop-blur-xl p-8 rounded-2xl border border-yellow-500/30 shadow-lg shadow-yellow-500/10 mb-12 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-500/20">
                    <h2 className="text-2xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                        <span className="text-3xl">💡</span> Engineering Decisions
                    </h2>
                    <ul className="space-y-3">
                        {decisions.map((decision, index) => (
                            <li key={index} className="text-gray-300 flex items-start gap-2">
                                <span className="text-yellow-400 mt-1">▸</span>
                                <span>{decision}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Results & Learnings - Side by Side */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="corner-light corner-light-emerald bg-gray-900/95 backdrop-blur-xl p-8 rounded-2xl border border-emerald-500/30 shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:-translate-x-2 hover:translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20">
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                            <span className="text-3xl">🎯</span> Results
                        </h2>
                        <ul className="space-y-3">
                            {results.map((result, index) => (
                                <li key={index} className="text-gray-300 flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">▸</span>
                                    <span>{result}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="corner-light corner-light-pink bg-gray-900/95 backdrop-blur-xl p-8 rounded-2xl border border-pink-500/30 shadow-lg shadow-pink-500/10 transition-all duration-300 hover:translate-x-2 hover:translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20">
                        <h2 className="text-2xl font-semibold text-pink-400 mb-4 flex items-center gap-2">
                            <span className="text-3xl">📚</span> What I Learned
                        </h2>
                        <ul className="space-y-3">
                            {learnings.map((learning, index) => (
                                <li key={index} className="text-gray-300 flex items-start gap-2">
                                    <span className="text-pink-400 mt-1">▸</span>
                                    <span>{learning}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* GitHub Link - Full Width */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-xl p-8 rounded-2xl border border-gray-700 shadow-xl">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105"
                    >
                        <span className="text-2xl">→</span>
                        <span>View Source Code on GitHub</span>
                    </a>
                </div>
            </div>
        </>
    );
}
