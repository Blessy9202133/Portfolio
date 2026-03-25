function Projects() {
  const projects = [
    {
      title: "QC Checklist System",
      desc: "Developed a full-stack quality control checklist system to manage inspection workflows. Implemented form handling, validation, and backend integration using PHP and MySQL to efficiently store and retrieve checklist data.",
      tech: "HTML, CSS, JavaScript, PHP, MySQL",
      keyFeatures: [
        "Form validation to ensure accurate data entry",
        "Dynamic checklist rendering",
        "Database-backed storage and retrieval",
      ],
     
    },
    {
      title: "Weather App",
      desc: "Built a modern React application that fetches real-time weather data from OpenWeatherMap API. Users can search for locations or view default city weather, with dynamic UI updates and local asset integration.",
      tech: "React, Vite, JavaScript, CSS, OpenWeatherMap API",
      keyFeatures: [
        "Async API calls with fetch and async/await",
        "React hooks (useState, useEffect, useRef) for state management",
        "Environment variables for API key security",
        "Deployment-ready with gh-pages",
      ],
      
    },
    {
      title: "Smart Bookmark Manager",
      desc: "Created a full-stack bookmark management app using Next.js and Supabase. Allows users to securely save, organize, and retrieve bookmarks with live updates across devices.",
      tech: "Next.js, React, TypeScript, Tailwind CSS, Supabase (Auth, PostgreSQL, Realtime)",
      keyFeatures: [
        "User authentication with Supabase OAuth",
        "Row Level Security to isolate user data",
        "Realtime updates via Supabase subscriptions",
        "Responsive design with Tailwind CSS",
      ],
      
    },

  ];

  return (
    <section id="projects" className="px-10 py-20 bg-[#0f1d35]">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        My <span className="text-teal-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#112240] p-8 rounded-2xl shadow-lg border border-gray-700 hover:border-teal-400 hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-gray-400 leading-relaxed">{project.desc}</p>

            <ul className="mt-4 list-disc ml-5 text-gray-300 text-sm">
              {project.keyFeatures.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.split(", ").map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#0A192F] text-teal-400 px-3 py-1 rounded-full border border-teal-400"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;