import { useReveal } from "../hooks/useReveal";

function About() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref} id="about"
      className={`max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >

      <div className="w-64 h-64 flex-shrink-0">
        <img
          src="/profile.jpg"
          alt="Sanjay Dhavanam"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-400 leading-relaxed mb-4">
          I am an Information Technology undergraduate at JB Institute of Engineering
          and Technology (CGPA: 8.59) with a strong focus on full-stack development,
          DevOps practices, and problem-solving.
        </p>

        <p className="text-gray-400 leading-relaxed mb-4">
          Through the Apna College Sigma Program, I built multiple production-style
          full-stack applications including trading platforms, video conferencing systems,
          version control systems, and AI-integrated tools.
        </p>

        <p className="text-gray-400 leading-relaxed">
          I have solved 300+ LeetCode problems and actively participate in hackathons
          and coding challenges, constantly strengthening my backend architecture
          and DSA skills.
        </p>
      </div>
    </section>
  );
}

export default About;