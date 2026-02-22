import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Emotion Analyser using AI",
      description: "Machine Learning model using Logistic Regression.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/manartouf/emotion-analyser-by-zebin-n-manar",
    },
    {
      title: "Movie & Book Recommender",
      description: "Recommendation system for movies and books.",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/Sabikun-Naher-353/movie-and-book-recommender",
    },
  ];

  return (
    <section id="projects" className="py-32 bg-white text-center">
      <h2 className="text-4xl font-extrabold mb-12 text-purple-600 uppercase">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-purple-50 rounded-3xl overflow-hidden shadow-lg border border-purple-100">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
              <p className="text-gray-700 mb-6 font-medium">{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-700 transition-all">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;