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
          <img 
            src="https://raw.githubusercontent.com/gist/adityaswa/780c7b64f3a763c32e5f32eb0047321e/raw/505364816159ca2b58a183d258cc5c2e92c53013/female_developer.svg" 
            alt="Fahmina Coding" 
            className="w-full max-w-[450px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;