import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-center max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold mb-8 text-purple-600 uppercase tracking-tight">
        About Me
      </h2>
      <div className="space-y-6 text-gray-900 text-xl font-medium leading-relaxed">
        <p>
          Hi! I’m <span className="text-purple-600 font-bold">Fahmina Zannat Khan Zebin</span>, 
          a Computer Science student passionate about building innovative web applications 
          and exploring the world of Machine Learning and React.
        </p>
        <p>
          I have experience in Java, Python, and full-stack development, and I love 
          creating projects that make an impact and solve real-world problems.
        </p>
        <p>
          Recently, I’ve been diving deep into <span className="text-purple-600 font-bold">Cybersecurity</span>, 
          learning how to secure applications and protect systems.
        </p>
      </div>
    </section>
  );
};

export default About;