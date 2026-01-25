import ProjectCard from "@/components/ProjectCard";
import BackToHome from "@/components/BackToHome";

export default function AIPage() {
    return (
        <>
            <BackToHome backUrl="/" backLabel="Back to Home" />
            <div className="max-w-[1100px] mx-auto px-6 py-16">
                <div className="bg-gray-900/95 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-2xl pointer-events-auto">
                    <h1 className="text-4xl font-bold text-white mb-4">AI & Machine Learning work</h1>
                    <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                        Applied machine learning and LLM systems with a focus on evaluation, reliability, and production readiness.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProjectCard
                            title="Conversational PDF RAG QA"
                            description="Retrieval-augmented generation system for querying multiple PDFs using embeddings and LLMs."
                            tags={["LLMs", "RAG", "Embeddings"]}
                            link="/projects/rag-qa"
                            image="/images.jpg"
                        />
                        <ProjectCard
                            title="Crack Detector Web Application"
                            description="Computer vision system using image processing techniques for automated crack detection."
                            tags={["Computer Vision", "OpenCV", "Image Processing"]}
                            link="/projects/crack-detector"
                            image="/crackai.png"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
