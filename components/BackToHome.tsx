'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

interface BackToHomeProps {
    backUrl?: string;
    backLabel?: string;
}

export default function BackToHome({ backUrl = "/", backLabel = "Back" }: BackToHomeProps) {
    return (
        <div className="fixed top-24 left-6 z-[60] pointer-events-auto">
            <Link
                href={backUrl}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 shadow-lg hover:bg-gray-800 hover:border-gray-600 hover:shadow-xl transition-all duration-300 group"
                aria-label={backLabel}
                title={backLabel}
            >
                <FaArrowLeft className="text-gray-300 text-xl group-hover:text-white group-hover:-translate-x-1 transition-all duration-300" />
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{backLabel}</span>
            </Link>
        </div>
    );
}
