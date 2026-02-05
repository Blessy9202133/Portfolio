function Skills() {
  const skillGroups = {
    "Frontend": [
      "HTML", "CSS", "JavaScript", "TypeScript",
      "React", "Angular","Tailwind CSS", "Responsive Design", "UI/UX Principles"
    ],
    "Backend & Integration": [
      "PHP", "Express","REST APIs"
    ],
    "Databases": [
      "MySQL", "MongoDB"
    ],
    "Tools & Platforms": [
      "Git", "GitLab", "VS Code", "Postman"
    ],
    "Productivity & AI Tools": [
      "GitHub Copilot", "ChatGPT"
    ]
  }

  return (
    <section id="skills" className="px-10 py-20 bg-[#0A192F]">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        My <span className="text-teal-400">Skills</span>
      </h2>

      <div className="space-y-8">
        {Object.entries(skillGroups).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-lg text-teal-400 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#112240] text-gray-300 rounded-full border border-gray-700 hover:border-teal-400 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
