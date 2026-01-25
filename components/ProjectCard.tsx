import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    image?: string;
}

export default function ProjectCard({ title, description, tags, link, image }: ProjectCardProps) {
    return (
        <Link
            href={link}
            className="block bg-gray-800/30 border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 rounded-lg overflow-hidden group"
        >
            {/* Thumbnail Image */}
            {image && (
                <div className="relative h-56 bg-gray-900 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            {/* Content */}
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm rounded hover:bg-blue-500/20 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
