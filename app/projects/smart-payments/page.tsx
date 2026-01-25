import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";

export default function SmartPaymentsPage() {
    return (
        <ProjectLayout
            title="Smart Payments"
            summary="A banking web application with REST APIs and a conversational interface for account management and transaction tracking."
            problem="Traditional banking interfaces lack intuitive conversational capabilities and require robust backend systems to handle account management, transactions, and real-time monitoring with proper error handling."
            solution="Built a full-stack banking application combining a React frontend with FastAPI backend services. Integrated Dialogflow for conversational queries and implemented comprehensive monitoring using Sentry for error tracking and debugging."
            architecture="The application follows a three-tier architecture: React/TypeScript frontend for user interface, FastAPI backend for business logic and REST APIs, and Appwrite for database and authentication. Dialogflow handles natural language processing for conversational features, while Sentry provides real-time error monitoring and performance tracking."
            techStack={[
                "Python - Backend development and API logic",
                "FastAPI - REST API framework with automatic documentation",
                "React - Frontend user interface",
                "TypeScript - Type-safe frontend development",
                "Tailwind CSS - Responsive styling",
                "Appwrite - Backend-as-a-Service for database and auth",
                "Dialogflow - Conversational AI integration",
                "Sentry - Error monitoring and debugging"
            ]}
            keyWork={[
                "Designed and implemented RESTful API endpoints for account operations (create, read, update, delete)",
                "Built transaction management system with proper validation and error handling",
                "Integrated Dialogflow conversational interface for natural language queries about accounts and transactions",
                "Implemented comprehensive input validation and sanitization to prevent security vulnerabilities",
                "Set up Sentry integration for real-time error tracking and performance monitoring",
                "Created responsive frontend components using React and Tailwind CSS"
            ]}
            decisions={[
                "Chose FastAPI for its automatic API documentation, async support, and type validation using Pydantic",
                "Used Appwrite to accelerate development while maintaining security and scalability",
                "Implemented Dialogflow for conversational features to improve user experience and accessibility",
                "Added Sentry monitoring early in development to catch and debug issues in real-time",
                "Structured API responses with consistent error codes and messages for better frontend integration"
            ]}
            results={[
                "Successfully deployed a functional banking application with account and transaction management",
                "Achieved responsive design working across desktop and mobile devices",
                "Implemented conversational interface allowing users to query account information naturally",
                "Established monitoring pipeline catching errors before they impact users",
                "Created maintainable codebase with clear separation of concerns"
            ]}
            learnings={[
                "Gained hands-on experience with REST API design principles and best practices",
                "Learned importance of comprehensive input validation and error handling in financial applications",
                "Understood trade-offs between building custom backend vs using BaaS solutions like Appwrite",
                "Developed skills in integrating third-party services (Dialogflow, Sentry) into applications",
                "Improved debugging skills using monitoring tools to identify and resolve issues quickly"
            ]}
            githubUrl="https://github.com/Geethaasree/Smart_Payments"
            category="software"
            projectDiagram={
                <div className="my-8">
                    <h3 className="text-xl font-semibold text-white mb-4">System Architecture</h3>
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                        <Image
                            src="/sparch.png"
                            alt="Smart Banking System Architecture Diagram showing Plaid, Monitor transactions, Dwolla, Appwrite, Sentry and their connections"
                            width={1000}
                            height={600}
                            className="w-full h-auto rounded"
                        />
                    </div>
                </div>
            }
        />
    );
}
