import React from 'react';
// 1. Add this import line at the top
import heroImg from '../assets/hero-dev.svg'; 

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center bg-white px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-4">
            Hi, I'm <br />
            <span className="text-purple-600">Fahmina Zannat Khan Zebin</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-bold text-gray-800 mb-8 border-l-4 border-purple-500 pl-4">
            Computer Science Student | Frontend Developer | Java | ML | React
          </p>

          <div className="flex gap-4">
            <a href="#projects" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          {/* 2. Change the src to use the imported heroImg */}
          <img 
            src={heroImg} 
            alt="Fahmina Developer Illustration" 
            className="w-full max-w-[500px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;