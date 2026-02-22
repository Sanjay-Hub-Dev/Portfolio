import { useReveal } from "../hooks/useReveal";

function Contact() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref} id="contact"
      className={`max-w-4xl mx-auto px-6 py-24 text-center flex flex-col md:flex-col items-center gap-9 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
        
      <h2 className="text-4xl font-bold mb-6">
        Let’s Connect
      </h2>

      <p className="text-gray-400 mb-12 max-w-xl mx-auto">
        I'm open to internships, backend roles, and collaborative projects.
        Feel free to reach out if you'd like to work together.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">

        {/* Email */}
        <a
          href="mailto:dhavanamsanjay@gmail.com"
          className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Email Me
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sanjaytechie10"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Sanjay-Hub-Dev"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          GitHub
        </a>

      </div>
    </section>
  );
}

export default Contact;