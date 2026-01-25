import type { Metadata } from "next";
import "./globals.css";
import "./animations.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import HexBackground from "@/components/HexBackground";
import SocialSidebar from "@/components/SocialSidebar";

export const metadata: Metadata = {
    title: "Koneru Geethaa Sree - Software Development Engineer",
    description: "Entry-level Software Development Engineer with strong foundations in Python and applied AI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-gradient-to-b from-[#0a0e27] via-[#111827] to-[#1a1d2e] text-gray-100 relative">
                <HexBackground />
                <CustomCursor />
                <Navbar />
                <SocialSidebar />
                <main className="min-h-screen relative z-10 pointer-events-none">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
