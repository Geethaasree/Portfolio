import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";

export default function RAGQAPage() {
    return (
        <ProjectLayout
            title="Conversational PDF RAG QA"
            summary="A FastAPI service enabling conversational querying over multiple PDFs using retrieval-augmented generation."
            problem="Users need to extract information from multiple PDF documents efficiently, but manual searching is time-consuming and traditional search doesn't understand context or answer questions conversationally."
            solution="Developed a FastAPI-based RAG (Retrieval-Augmented Generation) system that processes PDFs, creates vector embeddings, retrieves relevant context, and generates accurate answers using LLMs. The system is modular, separating ingestion, retrieval, and generation for maintainability and performance."
            architecture="The system consists of three main pipelines: (1) Ingestion pipeline that extracts text from PDFs and creates embeddings using Hugging Face models, (2) Retrieval pipeline that finds relevant document chunks using vector similarity search, and (3) Generation pipeline that uses Groq API to generate contextual answers. FastAPI serves as the orchestration layer with separate endpoints for each operation."
            techStack={[
                "Python - Core application logic and data processing",
                "FastAPI - High-performance API framework with async support",
                "Groq API - Fast LLM inference for answer generation",
                "Hugging Face - Embedding models for semantic search",
                "Vector embeddings - Semantic similarity and retrieval",
                "PDF processing libraries - Text extraction and parsing"
            ]}
            keyWork={[
                "Built modular pipeline architecture separating ingestion, retrieval, and generation concerns",
                "Implemented efficient PDF text extraction and chunking strategy for optimal context windows",
                "Integrated Hugging Face embedding models for semantic search capabilities",
                "Designed retrieval system using vector similarity to find most relevant document sections",
                "Optimized LLM prompts and context construction for accurate answer generation",
                "Implemented caching and optimization strategies to reduce latency"
            ]}
            decisions={[
                "Separated pipelines into distinct modules to enable independent testing and optimization",
                "Chose Groq API for its low-latency LLM inference compared to other providers",
                "Used Hugging Face embeddings for cost-effectiveness and control over the embedding process",
                "Implemented chunking strategy balancing context size with retrieval precision",
                "Added evaluation metrics to measure answer quality and retrieval accuracy",
                "Designed API to support both single-query and conversational multi-turn interactions"
            ]}
            results={[
                "Successfully deployed a working RAG system capable of answering questions across multiple PDFs",
                "Achieved 15% improvement in response time through pipeline optimization and caching",
                "Implemented evaluation framework showing consistent answer quality across test queries",
                "Created maintainable codebase with clear separation between ingestion, retrieval, and generation",
                "Built scalable API that can handle multiple concurrent requests efficiently"
            ]}
            learnings={[
                "Gained deep understanding of RAG architecture and its components",
                "Learned importance of chunking strategy and its impact on retrieval quality",
                "Developed skills in prompt engineering for consistent LLM outputs",
                "Understood trade-offs between embedding model size, speed, and accuracy",
                "Learned to measure and optimize latency in multi-stage AI pipelines",
                "Improved ability to evaluate and tune LLM-based systems systematically"
            ]}
            githubUrl="https://github.com/Geethaasree/Conversational-QA-PDF-RAG-Application"
            category="ai"
            projectDiagram={
                <div className="my-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Application Output</h3>
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                        <Image
                            src="/crag.jpeg"
                            alt="Conversational PDF QA application showing upload interface and transformer explanation response"
                            width={1024}
                            height={768}
                            className="w-full h-auto rounded"
                        />
                        <p className="text-gray-400 text-sm mt-4">
                            The application interface showing PDF upload functionality and a detailed response explaining the Transformer architecture, demonstrating the system's ability to extract and synthesize information from uploaded documents.
                        </p>
                    </div>
                </div>
            }
        />
    );
}
