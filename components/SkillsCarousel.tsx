'use client';

import { useState } from 'react';
import ScrollAnimationWrapper from './ScrollAnimationWrapper';
import {
    SiPython, SiJavascript, SiTypescript, SiHtml5, SiCss3,
    SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy,
    SiOpencv, SiTableau, SiDocker, SiGit, SiGooglecloud, SiHuggingface,
    SiReact, SiNextdotjs, SiNodedotjs, SiFastapi, SiGraphql,
    SiPostgresql, SiMongodb, SiMysql, SiFirebase, SiSupabase, SiAppwrite
} from 'react-icons/si';
import { DiDatabase } from 'react-icons/di';
import {
    FaBrain, FaRobot, FaSearch, FaTools, FaPlug, FaComments,
    FaLanguage, FaBook, FaChartLine, FaSmile, FaAws, FaChartBar, FaBookOpen
} from 'react-icons/fa';
import { IoSparkles, IoChatbubblesSharp } from 'react-icons/io5';
import { GiSouthKorea, GiJapan } from 'react-icons/gi';
import { HiLanguage } from 'react-icons/hi2';

interface Skill {
    name: string;
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

const NativeScriptIcon = (char: string) => {
    return ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
        <div className={`${className} flex items-center justify-center font-bold select-none`} style={style}>
            {char}
        </div>
    );
};

interface SkillCategory {
    title: string;
    subtitle: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        title: 'Programming Languages',
        subtitle: 'Core languages for software development and data processing.',
        skills: [
            { name: 'Python', icon: SiPython },
            { name: 'JavaScript', icon: SiJavascript },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'SQL', icon: DiDatabase },
            { name: 'HTML5', icon: SiHtml5 },
            { name: 'CSS3', icon: SiCss3 },
        ],
    },
    {
        title: 'Data & AI',
        subtitle: 'Specialized in data manipulation, machine learning, and AI frameworks.',
        skills: [
            { name: 'TensorFlow', icon: SiTensorflow },
            { name: 'PyTorch', icon: SiPytorch },
            { name: 'Scikit-learn', icon: SiScikitlearn },
            { name: 'Pandas', icon: SiPandas },
            { name: 'NumPy', icon: SiNumpy },
            { name: 'Matplotlib', icon: FaChartLine },
            { name: 'LangChain', icon: FaRobot },
            { name: 'OpenCV', icon: SiOpencv },
            { name: 'Hugging Face', icon: SiHuggingface },
            { name: 'NLP', icon: FaComments },
            { name: 'Generative AI', icon: IoSparkles },
            { name: 'RAG', icon: FaSearch },
            { name: 'LLM', icon: FaBrain },
            { name: 'Agentic AI', icon: FaRobot },
            { name: 'Google ADK', icon: FaTools },
        ],
    },
    {
        title: 'Tools & Platforms',
        subtitle: 'Proficient with industry-standard tools and platforms.',
        skills: [
            { name: 'Power BI', icon: FaChartBar },
            { name: 'Tableau', icon: SiTableau },
            { name: 'Docker', icon: SiDocker },
            { name: 'Git', icon: SiGit },
            { name: 'AWS', icon: FaAws },
            { name: 'GCP', icon: SiGooglecloud },
        ],
    },
    {
        title: 'Web Development',
        subtitle: 'Building modern, responsive web applications.',
        skills: [
            { name: 'React.js', icon: SiReact },
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'FastAPI', icon: SiFastapi },
            { name: 'REST APIs', icon: FaPlug },
            { name: 'GraphQL', icon: SiGraphql },
        ],
    },
    {
        title: 'Databases',
        subtitle: 'Experience with SQL and NoSQL database systems.',
        skills: [
            { name: 'PostgreSQL', icon: SiPostgresql },
            { name: 'MongoDB', icon: SiMongodb },
            { name: 'MySQL', icon: SiMysql },
            { name: 'Firebase', icon: SiFirebase },
            { name: 'Supabase', icon: SiSupabase },
            { name: 'Appwrite', icon: SiAppwrite },
        ],
    },
    {
        title: 'Spoken Languages',
        subtitle: 'Multilingual communication skills.',
        skills: [
            { name: 'English', icon: NativeScriptIcon('En') },
            { name: 'Hindi', icon: NativeScriptIcon('अ') },
            { name: 'Telugu', icon: NativeScriptIcon('తె') },
            { name: 'Kannada', icon: NativeScriptIcon('ಕ') },
            { name: 'Tamil', icon: NativeScriptIcon('த') },
            { name: 'Korean', icon: NativeScriptIcon('한') },
            { name: 'Japanese', icon: NativeScriptIcon('あ') },
        ],
    },
];

export default function SkillsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? skillCategories.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === skillCategories.length - 1 ? 0 : prev + 1));
    };

    const currentCategory = skillCategories[currentIndex];

    return (
        <div className="relative">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-3">Skills</h2>
                <p className="text-xl text-gray-400">My Tech Stack</p>
            </div>

            {/* Carousel Container */}
            <div className="relative bg-gray-800/30 rounded-2xl p-8 md:p-12 border border-gray-700">
                {/* Category Title */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">
                        {currentCategory.title}
                    </h3>
                    <p className="text-gray-400">{currentCategory.subtitle}</p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
                    {currentCategory.skills.map((skill, index) => {
                        const IconComponent = skill.icon;

                        // Brand color mapping
                        const colorMap: { [key: string]: string } = {
                            'Python': '#3776AB',
                            'JavaScript': '#F7DF1E',
                            'TypeScript': '#3178C6',
                            'HTML5': '#E34F26',
                            'CSS3': '#1572B6',
                            'SQL': '#4479A1',
                            'TensorFlow': '#FF6F00',
                            'PyTorch': '#EE4C2C',
                            'Scikit-learn': '#F7931E',
                            'Pandas': '#150458',
                            'NumPy': '#013243',
                            'Matplotlib': '#11557c',
                            'OpenCV': '#5C3EE8',
                            'Hugging Face': '#FFD21E',
                            'Power BI': '#F2C811',
                            'Tableau': '#E97627',
                            'Docker': '#2496ED',
                            'Git': '#F05032',
                            'AWS': '#FF9900',
                            'GCP': '#4285F4',
                            'React.js': '#61DAFB',
                            'Next.js': '#000000',
                            'Node.js': '#339933',
                            'FastAPI': '#009688',
                            'GraphQL': '#E10098',
                            'PostgreSQL': '#4169E1',
                            'MongoDB': '#47A248',
                            'MySQL': '#4479A1',
                            'Firebase': '#FFCA28',
                            'Supabase': '#3ECF8E',
                            'Appwrite': '#FD366E',
                            'NLP': '#4A90E2',
                            'Generative AI': '#9C27B0',
                            'RAG': '#FF6B6B',
                            'LLM': '#00BCD4',
                            'Agentic AI': '#FF5722',
                            'LangChain': '#1C3C3C',
                            'Google ADK': '#4285F4',
                            'English': '#3B82F6',
                            'Hindi': '#F97316',
                            'Telugu': '#10B981',
                            'Kannada': '#FBBF24',
                            'Tamil': '#F43F5E',
                            'Korean': '#6366F1',
                            'Japanese': '#E11D48',
                        };

                        const iconColor = colorMap[skill.name] || '#FFFFFF';

                        return (
                            <ScrollAnimationWrapper
                                key={`${currentIndex}-${skill.name}`}
                                threshold={0.1}
                                delay={index * 100}
                            >
                                <div className="flex flex-col items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-500/50 hover:bg-gray-800/70 transition-all duration-300 group">
                                    <IconComponent
                                        className="text-5xl group-hover:scale-110 transition-transform"
                                        style={{ color: iconColor }}
                                    />
                                    <p className="text-sm font-medium text-gray-300 text-center">
                                        {skill.name}
                                    </p>
                                </div>
                            </ScrollAnimationWrapper>
                        );
                    })}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrevious}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 z-10"
                    aria-label="Previous category"
                >
                    <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 z-10"
                    aria-label="Next category"
                >
                    <svg
                        className="w-6 h-6 md:w-8 md:h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                    {skillCategories.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-yellow-500 w-8'
                                : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                            aria-label={`Go to category ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
