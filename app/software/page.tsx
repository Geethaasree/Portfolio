import ProjectCard from "@/components/ProjectCard";
import BackToHome from "@/components/BackToHome";

export default function SoftwarePage() {
    return (
        <>
            <BackToHome backUrl="/" backLabel="Back to Home" />
            <div className="max-w-[1100px] mx-auto px-6 py-16">
                <div className="bg-gray-900/95 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-2xl pointer-events-auto">
                    <h1 className="text-4xl font-bold text-white mb-4">Software Engineering Work</h1>
                    <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                        Backend-focused projects emphasizing Python, data structures, API design, debugging, and system reliability.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProjectCard
                            title="Smart Payments"
                            description="Banking web application with REST APIs for account and transaction management."
                            tags={["Python", "FastAPI", "REST APIs", "Databases"]}
                            link="/projects/smart-payments"
                            image="/ebanking.jpg"
                        />
                        <ProjectCard
                            title="Conversational PDF RAG QA"
                            description="FastAPI-based backend service with modular ingestion, retrieval, and generation pipelines."
                            tags={["APIs", "System Design", "Performance"]}
                            link="/projects/rag-qa"
                            image="/images.jpg"
                        />
                        <ProjectCard
                            title="Crack Detector Web Application"
                            description="Computer vision application using advanced image processing for crack detection and enhancement."
                            tags={["Python", "OpenCV", "NumPy", "Computer Vision"]}
                            link="/projects/crack-detector"
                            image="/crackai.png"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
