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
          
          {/* Added a small CTA button to make it look more professional */}
          <div className="flex gap-4">
            <a href="#projects" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img 
               src="https://cdni.iconscout.com/illustration/premium/thumb/female-developer-working-on-project-illustration-download-in-svg-png-gif-file-formats--girl-lady-woman-character-pack-people-illustrations-5381862.png" 
               alt="Fahmina Cartoon Developer" 
               className="w-full max-w-[500px] drop-shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;