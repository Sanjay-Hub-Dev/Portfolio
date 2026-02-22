function ProjectCard({ title, description, tech, github }) {
  return (
<div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 transition-all duration-300 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)]">
      {/* Title */}
      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Tech Used */}
      <div className="mb-6">
        <h4 className="text-sm text-gray-500 mb-2 uppercase tracking-wider">
          Tech Used
        </h4>

        <div className="flex flex-wrap gap-3">
          {tech && tech.map((item, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub Link */}
      <a
  href={github}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-white text-black px-5 py-2 rounded-lg font-medium hover:opacity-90 transition"
>
  View Repository →
</a>
    </div>
  );
}

export default ProjectCard;