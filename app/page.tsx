"use client";

import { useState, useEffect } from "react";
import Name from "./_components/Name";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div id="main" className="bg-[#00162b] relative px-6 py-12 md:px-12 md:py-12 lg:px-24 lg:py-12">
      <div
        className="pointer-events-none absolute -inset-px opacity-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29,718,296, 0.15), transparent 80%)`,
        }}
      />
      <div className="flex flex-col lg:flex-row relative z-10 w-full">
        <div className="lg:w-1/2 lg:fixed">
          <Name />
        </div>

        <div className="pt-14 lg:pt-0 lg:w-1/2 lg:ml-auto overflow-y-auto">
          <div id="about" className="lg:pt-12">
            <About />
            <Experience />
            <Projects/>
          </div>
        </div>
      </div>
    </div>
  );
}
