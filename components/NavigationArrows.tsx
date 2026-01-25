'use client';

import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function NavigationArrows() {
    const router = useRouter();

    return (
        <div className="fixed top-24 left-6 z-[60] flex gap-2 pointer-events-auto">
            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="w-12 h-12 rounded-full bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 shadow-lg hover:bg-gray-800 hover:border-gray-600 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                aria-label="Go back"
                title="Go back"
            >
                <FaArrowLeft className="text-gray-300 text-lg group-hover:text-white group-hover:-translate-x-0.5 transition-all duration-300" />
            </button>

            {/* Forward Button */}
            <button
                onClick={() => router.forward()}
                className="w-12 h-12 rounded-full bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 shadow-lg hover:bg-gray-800 hover:border-gray-600 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                aria-label="Go forward"
                title="Go forward"
            >
                <FaArrowRight className="text-gray-300 text-lg group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
            </button>
        </div>
    );
}
