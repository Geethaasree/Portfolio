import Link from "next/link";
import Image from "next/image";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import SVGDivider from "@/components/SVGDivider";
import SkillsCarousel from "@/components/SkillsCarousel";
import TypewriterText from "@/components/TypewriterText";
import CertificationCard from "@/components/CertificationCard";

export default function Home() {
    return (
        <div className="max-w-[1100px] mx-auto px-6">
            {/* Hero Section */}
            <section className="py-16 md:py-24">
                {/* Background Panel for entire section */}
                <div className="corner-light corner-light-blue bg-gray-900/95 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-2xl pointer-events-auto transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <div className="space-y-6">
                            <p className="text-sm text-gray-400 animate-fadeIn">Hello, I'm</p>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-textReveal min-h-[1.2em]">
                                Koneru Geethaa Sree
                            </h1>

                            <TypewriterText />

                            <p className="text-lg text-gray-300 leading-relaxed animate-textReveal animation-delay-400">
                                Early career engineer building backend systems and machine learning applications with a focus on reliability, performance, and clean design.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4 animate-textReveal animation-delay-600">
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
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-700">
                                <div className="animate-fadeIn animation-delay-800 text-center sm:text-left">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">3+</div>
                                    <div className="text-sm text-gray-400">Projects Completed</div>
                                </div>
                                <div className="animate-fadeIn animation-delay-1000 text-center sm:text-left">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">11+</div>
                                    <div className="text-sm text-gray-400">Certifications</div>
                                </div>
                                <div className="animate-fadeIn animation-delay-1200 text-center sm:text-left">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">2</div>
                                    <div className="text-sm text-gray-400">Awards Won</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Profile Photo */}
                        <div className="flex justify-center md:justify-end animate-fadeIn animation-delay-400">
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                {/* Exactly matching reference image: Neon Green Merging Segments (Clockwise Only) */}
                                <div className="absolute inset-0 scale-110 pointer-events-none">
                                    {/* Bottom Glow Effect (Matching reference) */}
                                    <div className="absolute inset-0 rounded-full bg-green-500/10 blur-2xl translate-y-4"></div>

                                    {/* Ring 1: Varied segments, Clockwise 15s */}
                                    <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="47"
                                            fill="none"
                                            stroke="#00ff9d"
                                            strokeWidth="1.2"
                                            strokeDasharray="15 25 35 15"
                                            strokeLinecap="round"
                                            filter="url(#neonGlow)"
                                            className="opacity-70"
                                        />
                                    </svg>

                                    {/* Ring 2: Shorter segments, Clockwise 11s */}
                                    <svg className="absolute inset-0 w-full h-full animate-spin-11s" viewBox="0 0 100 100">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="47"
                                            fill="none"
                                            stroke="#00ff9d"
                                            strokeWidth="1.5"
                                            strokeDasharray="5 20 15 30"
                                            strokeLinecap="round"
                                            className="opacity-50"
                                        />
                                    </svg>

                                    {/* Ring 3: Fast moving segments, Clockwise 7s */}
                                    <svg className="absolute inset-0 w-full h-full animate-spin-7s" viewBox="0 0 100 100">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="47"
                                            fill="none"
                                            stroke="#00ff9d"
                                            strokeWidth="1.2"
                                            strokeDasharray="10 50 15 25"
                                            strokeLinecap="round"
                                            filter="url(#neonGlow)"
                                            className="opacity-40"
                                        />
                                    </svg>

                                    {/* Ring 4: Very slow base segments, Clockwise 25s */}
                                    <svg className="absolute inset-0 w-full h-full animate-spin-very-slow" viewBox="0 0 100 100">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="47"
                                            fill="none"
                                            stroke="#00ff9d"
                                            strokeWidth="1.4"
                                            strokeDasharray="50 150"
                                            strokeLinecap="round"
                                            className="opacity-30"
                                        />
                                    </svg>

                                    {/* Specialized Glow Filter for Neon Effect */}
                                    <svg className="absolute hidden">
                                        <defs>
                                            <filter id="neonGlow">
                                                <feGaussianBlur stdDeviation="1.5" result="blur" />
                                                <feFlood floodColor="#00ff9d" floodOpacity="1" result="color" />
                                                <feComposite in="color" in2="blur" operator="in" result="glow" />
                                                <feMerge>
                                                    <feMergeNode in="glow" />
                                                    <feMergeNode in="SourceGraphic" />
                                                </feMerge>
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>

                                {/* Floating Badge Icons */}
                                <div className="absolute -top-2 -right-2 w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-500/30 animate-fadeIn animation-delay-800 shadow-[0_0_15px_rgba(34,197,94,0.3)]" style={{ animation: 'fadeIn 0.8s ease-out 0.8s both, floatBadge1 4s ease-in-out infinite' }}>
                                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                    </svg>
                                </div>

                                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-500/30 animate-fadeIn animation-delay-800 shadow-[0_0_15px_rgba(34,197,94,0.3)]" style={{ animation: 'fadeIn 0.8s ease-out 1s both, floatBadge2 5s ease-in-out infinite' }}>
                                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </div>

                                <div className="absolute top-1/2 -right-5 w-12 h-12 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-500/30 animate-fadeIn animation-delay-800 shadow-[0_0_15px_rgba(34,197,94,0.3)]" style={{ animation: 'fadeIn 0.8s ease-out 1.2s both, floatBadge3 4.5s ease-in-out infinite' }}>
                                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                    </svg>
                                </div>

                                {/* Profile Image */}
                                <div className="absolute inset-3 rounded-full overflow-hidden bg-gray-900 shadow-2xl">
                                    <Image
                                        src="/profile.jpeg"
                                        alt="Koneru Geethaa Sree"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Status Text */}
                <p className="text-xs text-gray-400 mt-8 text-center md:text-left animate-fadeIn animation-delay-800">
                    Actively seeking for early career Software Engineer and AI / ML roles
                </p>

                {/* Scroll Indicator */}
                <div className="flex justify-center mt-16 animate-fadeIn animation-delay-800">
                    <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ animation: 'fadeIn 0.8s ease-out 0.8s both, bounce 2s ease-in-out infinite' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-16">
                <div className="corner-light corner-light-purple bg-gray-900/95 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-2xl pointer-events-auto transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                    <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>
                    <ScrollAnimationWrapper>
                        <div className="relative pl-8">
                            {/* Timeline SVG */}
                            <svg className="absolute left-0 top-0 h-full w-1" viewBox="0 0 2 100" preserveAspectRatio="none">
                                <line
                                    x1="1"
                                    y1="0"
                                    x2="1"
                                    y2="100"
                                    stroke="#3b82f6"
                                    strokeWidth="2"
                                    className="animate-strokeDraw"
                                    strokeDasharray="100"
                                    strokeDashoffset="100"
                                />
                            </svg>
                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-0 w-3 h-3 -ml-1 bg-blue-500 rounded-full animate-fadeIn animation-delay-400"></div>

                            <div className="bg-gray-800/20 p-6 rounded-r-lg transition-all duration-300 hover:bg-gray-800/30">
                                <div className="mb-2">
                                    <h3 className="text-xl font-semibold text-white">AI Agent Development Intern</h3>
                                    <p className="text-lg text-gray-300">SocioSquares (Remote)</p>
                                    <p className="text-sm text-gray-400 mb-4">Jun 2025 - Aug 2025</p>
                                </div>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    <li>Built and tested LLM integrated agent workflows using LangChain and Google ADK for internal automation use cases in SDLC.</li>
                                    <li>Worked on prompt design, validation rules, and evaluation of LLM outputs, reducing inconsistent responses by 30% during testing.</li>
                                    <li>Analyzed application logs and trace data to identify latency bottlenecks, helping reduce average response time by 20%.</li>
                                </ul>
                            </div>
                        </div>
                    </ScrollAnimationWrapper>
                </div>
            </section>

            {/* Core Competencies Section */}
            <section className="py-16">
                <div className="corner-light corner-light-cyan bg-gray-900/95 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-2xl pointer-events-auto transition-all duration-300 hover:translate-x-2 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                    <h2 className="text-3xl font-bold text-white mb-12">My Core Competencies</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <ScrollAnimationWrapper delay={0}>
                            <div className="border border-gray-700 border-l-4 border-l-blue-500 p-6 hover:border-gray-500 hover:border-l-blue-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 bg-gray-800/30 rounded-lg h-full">
                                <h3 className="text-xl font-semibold text-white mb-4">
                                    Software Engineering
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Backend development using Python with strong emphasis on data structures, REST APIs, debugging, and performance-aware design.
                                </p>
                            </div>
                        </ScrollAnimationWrapper>

                        {/* Card 2 */}
                        <ScrollAnimationWrapper delay={100}>
                            <div className="border border-gray-700 border-l-4 border-l-blue-500 p-6 hover:border-gray-500 hover:border-l-blue-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 bg-gray-800/30 rounded-lg h-full">
                                <h3 className="text-xl font-semibold text-white mb-4">
                                    Applied AI & Machine Learning
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Practical ML and LLM systems including RAG pipelines, conversational agents, evaluation workflows, and NLP fundamentals.
                                </p>
                            </div>
                        </ScrollAnimationWrapper>

                        {/* Card 3 */}
                        <ScrollAnimationWrapper delay={200}>
                            <div className="border border-gray-700 border-l-4 border-l-blue-500 p-6 hover:border-gray-500 hover:border-l-blue-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 bg-gray-800/30 rounded-lg h-full">
                                <h3 className="text-xl font-semibold text-white mb-4">
                                    Systems & Deployment
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Deployable services using FastAPI and Docker with logging, monitoring, and cloud-based deployment practices.
                                </p>
                            </div>
                        </ScrollAnimationWrapper>
                    </div>
                </div>
            </section>

            {/* Section Divider */}
            {/* Skills Section */}
            <section className="py-16">
                <div className="corner-light corner-light-green bg-gray-900/95 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-2xl pointer-events-auto transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/20">
                    <SkillsCarousel />
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-16">
                <div className="corner-light corner-light-yellow bg-gray-900/95 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-2xl pointer-events-auto transition-all duration-300 hover:-translate-x-2 hover:translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/20">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">📜</span>
                        <h2 className="text-3xl font-bold text-white">Certifications</h2>
                    </div>
                    <p className="text-gray-300 mb-12 leading-relaxed">Professional certifications and specialized training</p>

                    {/* AI & Machine Learning */}
                    <div className="mb-12">
                        <h3 className="text-xl font-semibold text-blue-400 mb-6">AI & Machine Learning</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ScrollAnimationWrapper threshold={0.1} delay={0}>
                                <CertificationCard
                                    logo="/nptel.png"
                                    title="Large Language Models"
                                    issuer="NPTEL"
                                    year="2025"
                                    pdfUrl="/Introduction to Large Language Models (LLMs) - NPTEL.pdf"
                                    logoSize={90}
                                />
                            </ScrollAnimationWrapper>

                            <ScrollAnimationWrapper threshold={0.1} delay={100}>
                                <CertificationCard
                                    logo="/nptel.png"
                                    title="Computer Vision & Image Processing"
                                    issuer="NPTEL"
                                    year="2025"
                                    pdfUrl="/Computer Vision And Image Processing - Fundamentals And Applications - NPTEL.pdf"
                                    logoSize={90}
                                />
                            </ScrollAnimationWrapper>

                            <ScrollAnimationWrapper threshold={0.1} delay={200}>
                                <CertificationCard
                                    logo="/GUVI.webp"
                                    title="Generative AI Foundations"
                                    issuer="GUVI"
                                    year="2024"
                                    pdfUrl="/GenerativeAI - GUVI.pdf"
                                    logoSize={140}
                                />
                            </ScrollAnimationWrapper>


                            <ScrollAnimationWrapper threshold={0.1} delay={400}>
                                <CertificationCard
                                    logo="/AICTE.webp"
                                    title="AI & ML Virtual Internship"
                                    issuer="Google"
                                    year="2024"
                                    pdfUrl="/AI-ML VIRTUAL INTERNSHIP - Google.pdf"
                                    logoSize={60}
                                />
                            </ScrollAnimationWrapper>

                            <ScrollAnimationWrapper threshold={0.1} delay={500}>
                                <CertificationCard
                                    logo="/AICTE.webp"
                                    title="AI & ML Short Term Internship"
                                    issuer="AWS"
                                    year="2024"
                                    pdfUrl="/AWS AI-ML Short Term Internship.pdf"
                                    logoSize={60}
                                />
                            </ScrollAnimationWrapper>

                            <ScrollAnimationWrapper threshold={0.1} delay={600}>
                                <CertificationCard
                                    logo="/AICTE.webp"
                                    title="Android Developer & AIML Internship"
                                    issuer="Google"
                                    year="2024"
                                    pdfUrl="/Google Android Developer & Google AIML Long Term Internship.pdf"
                                    logoSize={60}
                                />
                            </ScrollAnimationWrapper>
                        </div>
                    </div>

                    {/* Data & Backend Systems */}
                    <div>
                        <h3 className="text-xl font-semibold text-blue-400 mb-6">Data & Backend Systems</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <ScrollAnimationWrapper threshold={0.1} delay={0}>
                                <CertificationCard
                                    logo="/IBM.webp"
                                    title="Apache Spark for Data Engineering"
                                    issuer="IBM"
                                    year="2024"
                                    pdfUrl="/Apache Spark for Data Engineering and Machine Learning - IBM.pdf"
                                    logoSize={90}
                                />
                            </ScrollAnimationWrapper>

                            <ScrollAnimationWrapper threshold={0.1} delay={100}>
                                <CertificationCard
                                    logo="/GCP.webp"
                                    title="Cloud Data Analytics with BigQuery Badge"
                                    issuer="Google Cloud"
                                    year="2025"
                                    pdfUrl="https://www.skills.google/public_profiles/77a51677-3133-4455-ab23-839830a841ec/badges/14361040"
                                    logoSize={100}
                                />
                            </ScrollAnimationWrapper>

                            <ScrollAnimationWrapper threshold={0.1} delay={200}>
                                <CertificationCard
                                    logo="/IBM.webp"
                                    title="MongoDB for Students"
                                    issuer="MongoDB"
                                    year="2024"
                                    pdfUrl="/Introduction to MongoDB for Students - MongoDB.pdf"
                                    logoSize={90}
                                />
                            </ScrollAnimationWrapper>

                            <ScrollAnimationWrapper threshold={0.1} delay={300}>
                                <CertificationCard
                                    logo="/IBM.webp"
                                    title="NoSQL Database Basics"
                                    issuer="IBM"
                                    year="2024"
                                    pdfUrl="/NoSQL Database Basics - IBM.pdf"
                                    logoSize={90}
                                />
                            </ScrollAnimationWrapper>

                            <ScrollAnimationWrapper threshold={0.1} delay={400}>
                                <CertificationCard
                                    logo="/571a.webp"
                                    title="Cloud Computing Workshop"
                                    issuer="IIT Hyderabad"
                                    year="2024"
                                    pdfUrl="/IIT Hyderabad Cloud Workshop.pdf"
                                    logoSize={70}
                                />
                            </ScrollAnimationWrapper>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16">
                <div className="corner-light corner-light-pink bg-gray-900/95 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-2xl pointer-events-auto transition-all duration-300 hover:translate-x-2 hover:translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20">
                    <h2 className="text-3xl font-bold text-white mb-4">Achievements</h2>
                    <p className="text-gray-300 mb-12 leading-relaxed">Recognition for academic excellence and innovation</p>

                    {/* Academic Excellence Awards - Full Width at Top */}
                    <ScrollAnimationWrapper threshold={0.1} delay={0}>
                        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8 hover:border-blue-500/50 transition-all mb-8">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="text-5xl">🥈</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-blue-400 mb-2">Academic Excellence Awards</h3>
                                    <p className="text-gray-300 text-lg">Two Silver Medals for outstanding performance in AI & ML coursework</p>
                                </div>
                            </div>
                            {/* Medal images */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                <div className="relative h-64 bg-gray-800 border-2 border-gray-700 rounded-lg overflow-hidden shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                                    <Image
                                        src="/Medal Image 1.jpeg"
                                        alt="Silver Medal 1"
                                        fill
                                        className="object-contain p-3"
                                    />
                                </div>
                                <div className="relative h-64 bg-gray-800 border-2 border-gray-700 rounded-lg overflow-hidden shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                                    <Image
                                        src="/Medal Image 2.jpeg"
                                        alt="Silver Medal 2"
                                        fill
                                        className="object-contain p-3"
                                    />
                                </div>
                            </div>
                        </div>
                    </ScrollAnimationWrapper >

                    {/* Hackathon Winner - Full Width Below */}
                    <ScrollAnimationWrapper threshold={0.1} delay={100}>
                        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8 hover:border-blue-500/50 transition-all">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="text-5xl">🏆</div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-blue-400 mb-2">Hackathon Winner</h3>
                                    <p className="text-gray-300 text-lg">Winner at college-level hackathon for innovative solution development</p>
                                </div>
                            </div>
                            {/* Hackathon image */}
                            <div className="relative h-80 bg-gray-800 border-2 border-gray-700 rounded-lg overflow-hidden shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] max-w-3xl mx-auto">
                                <Image
                                    src="/hackathon.jpeg"
                                    alt="Hackathon Winner Photo"
                                    fill
                                    className="object-contain p-3"
                                />
                            </div>
                        </div>
                    </ScrollAnimationWrapper>
                </div>
            </section>
        </div>
    );
}
