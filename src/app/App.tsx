import { useEffect, useState } from "react";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { StatsSection } from "./components/StatsSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [showDesktopEffects, setShowDesktopEffects] = useState(false);

  useEffect(() => {
    const checkViewport = () => setShowDesktopEffects(window.innerWidth >= 768);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-br from-[#f9f7f3] via-[#faf8f5] to-[#f5f3ed]">
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a4d2e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Radial gradient overlays for depth */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden md:block">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#1a4d2e]/[0.02] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#f4d03f]/[0.03] rounded-full blur-[100px] translate-x-1/3" />
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-[#1a4d2e]/[0.015] rounded-full blur-[120px]" />
      </div>

      {showDesktopEffects && (
        <>
          <AnimatedBackground />
        </>
      )}
      
      <main className="relative z-10">
        <HeroSection />
        <ExperienceSection />
        <StatsSection />
      </main>
      
      <Footer />
    </div>
  );
}
