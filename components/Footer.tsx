import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="mt-20">
            <div className="bg-gray-900/95 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-2xl pointer-events-auto max-w-[1100px] mx-auto">
                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        Built with Next.js
                    </p>
                    <p className="text-gray-400 text-sm">
                        © 2026 Koneru Geethaa Sree
                    </p>
                </div>
            </div>
        </footer>
    );
}
