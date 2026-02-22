function Skills() {
  const skills = ["Java", "Python", "Machine Learning", "React", "Tailwind CSS"];

  return (
    <section id="skills" className="pt-32 pb-20 bg-purple-50 text-center">
      <h2 className="text-4xl font-extrabold mb-12 text-purple-600 uppercase">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white text-purple-700 border-2 border-purple-200 px-8 py-4 rounded-2xl shadow-sm
                       transform transition duration-300 hover:scale-110 hover:border-purple-500
                       text-xl font-bold"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;