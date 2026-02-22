import { useReveal } from "../hooks/useReveal";

function Tech() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <SkillCard
          title="Programming"
          items={["Java", "JavaScript", "SQL"]}
        />

        <SkillCard
          title="Frontend"
          items={["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"]}
        />

        <SkillCard
          title="Backend"
          items={["Node.js", "Express.js", "REST APIs", "JWT Authentication"]}
        />

        <SkillCard
          title="Database"
          items={["MongoDB", "MySQL", "Data Modeling"]}
        />

        <SkillCard
          title="DevOps & Tools"
          items={["Git", "GitHub", "Docker", "Kubernetes", "CI/CD", "Postman"]}
        />

        <SkillCard
          title="Core CS"
          items={["Data Structures & Algorithms", "OOPs", "Problem Solving"]}
        />

      </div>
    </section>
  );
}

function SkillCard({ title, items }) {
  return (
    <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <span
            key={index}
            className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Tech;