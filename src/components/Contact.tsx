function Contact() {
  return (
    <section id="contact" className="px-10 py-20 bg-[#0A192F] text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Get In <span className="text-teal-400">Touch</span>
      </h2>

    <p className="text-gray-400 max-w-xl mx-auto mb-10">
  I’m currently open to Application Developer, Frontend Developer, or UI-focused
  roles. If you have an opportunity, project, or collaboration in mind — feel
  free to reach out.
</p>


      <div className="flex flex-col md:flex-row justify-center gap-6">
        <a
          href="mailto:sushmaviasblessy@gmail.com"
          className="bg-teal-400 text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
        >
          Email Me
        </a>

        <a
          href="https://github.com/Blessy9202133"
          target="_blank"
          className="border border-teal-400 text-teal-400 px-6 py-3 rounded-lg hover:bg-teal-400 hover:text-black transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/onapakala-sushma-1606102a2/"
          target="_blank"
          className="border border-teal-400 text-teal-400 px-6 py-3 rounded-lg hover:bg-teal-400 hover:text-black transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

export default Contact
