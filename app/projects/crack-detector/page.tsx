import ProjectLayout from "@/components/ProjectLayout";
import Image from "next/image";

export default function CrackDetectorPage() {
    return (
        <ProjectLayout
            title="Crack Detector Web Application"
            summary="A computer vision application for detecting and enhancing cracks in images using advanced image processing techniques."
            problem="Detecting fine cracks in structures (buildings, roads, bridges) is critical for safety inspections, but manual inspection is time-consuming and cracks are often difficult to see with the naked eye. Automated detection systems need to handle varying lighting conditions, noise, and maintain thin crack edges while connecting broken segments."
            solution="Developed a web application using Python, OpenCV, and NumPy that applies a multi-stage image processing pipeline to detect and enhance cracks. The system uses Gaussian blur subtraction for enhancement, Sobel filters for edge detection, orientation-aware non-max suppression to retain thin edges, and morphological closing to connect broken segments."
            architecture="The application follows a pipeline architecture: (1) Image preprocessing with Gaussian blur subtraction to enhance fine cracks, (2) Gradient computation using Sobel filters to calculate magnitude and direction, (3) Orientation-aware non-max suppression to retain only the thinnest crack edges, and (4) Morphological closing operations to connect broken crack segments and improve visual continuity. The web interface allows users to upload images and view processed results."
            techStack={[
                "Python - Core application logic and image processing",
                "NumPy - Numerical computations and array operations",
                "OpenCV - Computer vision and image processing library",
                "Gaussian blur - Noise reduction and crack enhancement",
                "Sobel filters - Edge detection and gradient computation",
                "Non-max suppression - Edge thinning and refinement",
                "Morphological operations - Crack segment connection"
            ]}
            keyWork={[
                "Led a team of 4 engineers to ensure smooth development and deployment",
                "Implemented Gaussian blur subtraction technique to enhance fine cracks while reducing noise",
                "Applied Sobel filters to compute gradient magnitude and direction for edge detection",
                "Developed orientation-aware non-max suppression algorithm to retain thin crack edges",
                "Used morphological closing operations to connect broken crack segments",
                "Optimized image processing pipeline for performance and accuracy",
                "Built web interface for easy image upload and result visualization"
            ]}
            decisions={[
                "Chose Gaussian blur subtraction over simple thresholding for better crack enhancement in varying lighting",
                "Used Sobel filters for their effectiveness in detecting edges at different orientations",
                "Implemented orientation-aware non-max suppression to preserve crack direction information",
                "Applied morphological closing to improve visual continuity without over-smoothing",
                "Selected OpenCV for its comprehensive computer vision capabilities and performance",
                "Designed multi-stage pipeline to handle each aspect of crack detection separately for easier tuning"
            ]}
            results={[
                "Successfully deployed a functional crack detection system",
                "Achieved improved crack visibility through Gaussian blur subtraction",
                "Maintained thin crack edges using orientation-aware non-max suppression",
                "Connected broken crack segments effectively using morphological operations",
                "Led team of 4 to successful project completion and deployment",
                "Created reusable image processing pipeline applicable to similar detection tasks"
            ]}
            learnings={[
                "Gained deep understanding of computer vision techniques for edge detection",
                "Learned importance of multi-stage processing pipelines for complex image analysis",
                "Developed skills in tuning image processing parameters for optimal results",
                "Understood trade-offs between noise reduction and feature preservation",
                "Improved team leadership and project management skills",
                "Learned to combine multiple techniques (blur, gradients, morphology) for robust detection"
            ]}
            githubUrl="https://github.com/Geethaasree/crack-detector-app"
            category="ai"
            projectDiagram={
                <div className="my-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Detection Results</h3>
                    <div className="space-y-6">
                        {/* First Output Image */}
                        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                            <Image
                                src="/crack detector.png"
                                alt="Crack detection output showing identified cracks in concrete structure"
                                width={1024}
                                height={768}
                                className="w-full h-auto rounded"
                            />
                            <p className="text-gray-400 text-sm mt-4">
                                Detection output showing identified cracks with bounding boxes and confidence scores.
                            </p>
                        </div>

                        {/* Second Output Image */}
                        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                            <Image
                                src="/f2.png"
                                alt="Additional crack detection result with analysis visualization"
                                width={1024}
                                height={768}
                                className="w-full h-auto rounded"
                            />
                            <p className="text-gray-400 text-sm mt-4">
                                Detailed analysis visualization showing crack patterns and severity assessment.
                            </p>
                        </div>
                    </div>
                </div>
            }
        />
    );
}
