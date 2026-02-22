import { useReveal } from "../hooks/useReveal";

function Achievements() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >

      <h2 className="text-4xl font-bold text-center mb-16">
        Achievements & Highlights
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* LeetCode */}
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
          <h3 className="text-xl font-semibold mb-4">
            Data Structures & Algorithms
          </h3>
          <p className="text-gray-400 mb-4">
            Solved 300+ problems on LeetCode focusing on core DSA concepts,
            problem-solving, and competitive programming using Java.
          </p>

          <a
            href="https://leetcode.com/u/3yAoFkCbQC/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            View LeetCode Profile →
          </a>
        </div>

        {/* Sigma Certification */}
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
          <h3 className="text-xl font-semibold mb-4">
            Apna College Sigma Program
          </h3>
          <p className="text-gray-400">
            Completed 2 years of structured training in Full Stack Development
            and DSA. Built multiple full-stack projects and learned real-world
            development workflows including version control and deployment.
          </p>
        </div>

        {/* Hackathon */}
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
          <h3 className="text-xl font-semibold mb-4">
            CodeVerse 36-Hour Hackathon
          </h3>
          <p className="text-gray-400">
            Participated in an intensive 36-hour hackathon, gaining experience
            in rapid development, teamwork, and solving real-world problems
            under time constraints.
          </p>
        </div>

        {/* DevOps & AI */}
        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
          <h3 className="text-xl font-semibold mb-4">
            DevOps & AI Integration
          </h3>
          <p className="text-gray-400">
            Hands-on experience with Docker, Kubernetes, CI/CD pipelines, and
            OpenAI API integration in full-stack applications.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Achievements;