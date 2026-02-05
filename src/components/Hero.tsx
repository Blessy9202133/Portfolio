const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-10 md:px-20 bg-gradient-to-b from-[#0A192F] to-[#020C1B]">
      <p className="text-teal-400 mb-4">Hi, my name is</p>

      <h1 className="text-4xl md:text-6xl font-bold text-white">
        Sushma Onapakala
      </h1>

      <h2 className="text-2xl md:text-4xl font-semibold text-gray-400 mt-2">
        Application Developer <span className="text-teal-400">| UI & Frontend Focused</span>
      </h2>

      <p className="text-gray-400 max-w-xl mt-6 leading-relaxed">
        I develop scalable web applications with a strong focus on frontend
        architecture, user experience, and clean UI design using modern
        technologies like React, Angular, TypeScript, and Tailwind CSS.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="border border-teal-400 text-teal-400 px-6 py-2 rounded hover:bg-teal-400 hover:text-black transition"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="bg-teal-400 text-black px-6 py-2 rounded hover:opacity-80 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Hero
