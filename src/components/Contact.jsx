import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaCheckCircle } from 'react-icons/fa'; 

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mjgeaplr", {
      method: "POST",
      body: new FormData(e.target),
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 shadow-xl border border-purple-100">
          <div className="flex-1">
            <h2 className="text-5xl font-extrabold mb-10 text-gray-900">Contact</h2>
            <div className="space-y-6 text-xl text-gray-800 font-semibold">
              <p><span className="text-purple-600 block text-sm uppercase">Email</span> fahminazebin@gmail.com</p>
              <p><span className="text-purple-600 block text-sm uppercase">Location</span> Sylhet, Bangladesh</p>
            </div>
            <div className="flex gap-6 mt-12 text-4xl text-purple-600">
              <a href="https://www.linkedin.com/in/fahmina-zebin" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/231-115-341" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
          <div className="flex-1">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" required placeholder="Your Name" className="w-full p-4 rounded-xl bg-purple-50 border-2 border-purple-100 focus:border-purple-500 outline-none text-gray-900 font-bold" />
                <input type="email" name="email" required placeholder="Your Email" className="w-full p-4 rounded-xl bg-purple-50 border-2 border-purple-100 focus:border-purple-500 outline-none text-gray-900 font-bold" />
                <textarea name="message" required placeholder="Your Message" rows="4" className="w-full p-4 rounded-xl bg-purple-50 border-2 border-purple-100 focus:border-purple-500 outline-none text-gray-900 font-bold"></textarea>
                <button type="submit" className="w-full bg-purple-600 text-white font-black py-4 rounded-xl hover:bg-purple-700 shadow-lg">Send Message</button>
              </form>
            ) : (
              <div className="text-center py-10">
                <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Message Sent!</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;