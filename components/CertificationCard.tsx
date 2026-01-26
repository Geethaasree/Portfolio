'use client';

import Image from 'next/image';

interface CertificationCardProps {
    logo: string;
    title: string;
    issuer: string;
    year: string;
    pdfUrl: string;
    delay?: number;
    logoSize?: number;
}

export default function CertificationCard({
    logo,
    title,
    issuer,
    year,
    pdfUrl,
    delay = 0,
    logoSize = 112
}: CertificationCardProps) {
    return (
        <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-800/40 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-800/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group text-center"
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Logo Container */}
            <div className="flex justify-center mb-5">
                <div className="w-24 h-24 relative flex items-center justify-center">
                    <Image
                        src={logo}
                        alt={issuer}
                        width={logoSize}
                        height={logoSize}
                        className="object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    />
                </div>
            </div>

            {/* Title */}
            <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 min-h-[auto] md:min-h-[56px] leading-tight group-hover:text-blue-400 transition-colors duration-300">
                {title}
            </h4>

            {/* Issuer */}
            <p className="text-base text-gray-400 mb-2 font-medium">{issuer}</p>

            {/* Year */}
            <p className="text-lg text-blue-400 font-semibold">{year}</p>
        </a>
    );
}
