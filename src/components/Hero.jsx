import React from 'react';

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
        </div>

        <div className="flex-1 flex justify-center">
          {/* This Unsplash link is reliable and won't change! */}
          <img 
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80" 
            alt="Fahmina Software Engineering" 
            className="w-full max-w-[450px] rounded-3xl shadow-2xl border-4 border-purple-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;