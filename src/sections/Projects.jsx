import ProjectCard from "../components/ProjectCard";
import { useReveal } from "../hooks/useReveal";

function Projects() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref} id="projects"
      className={`max-w-6xl mx-auto px-6 py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
			<h2 className="text-4xl font-bold text-center mb-16">
				Featured Projects
			</h2>

			<div className="space-y-12">
				<ProjectCard
					title="AI-Driven Electricity Theft Detection System"
					description="A smart meter-based anomaly detection system that trains individual AI models for 100 households using historical consumption data. Simulates real-time half-hourly readings and detects abnormal electricity usage patterns using unsupervised machine learning. Designed with secure authentication and adaptive self-learning mechanisms."
					tech={[
						"Python",
						"Django",
						"Machine Learning",
						"Isolation Forest",
						"SQLite/MySQL",
						"HTML",
						"Bootstrap/Tailwind",
						"JWT Authentication",
					]}
					github="https://github.com/Sanjay-Hub-Dev/AI-Driven-Electricity-Theft-Detection-System"
				/>

				<ProjectCard
					title="WanderHub"
					description="A full-stack travel booking platform with authentication, property listings, booking workflow, and REST API backend. Designed with clean MVC structure and scalable backend architecture."
					tech={["React", "Node.js", "Express", "MongoDB", "JWT"]}
					github="https://github.com/Sanjay-Hub-Dev/WanderHub"
				/>

				<ProjectCard
					title="Sports Management System"
					description="A college-level management system to handle sports events, registrations, and admin controls with secure login and structured database handling."
					tech={["PHP", "MySQL", "HTML", "CSS"]}
					github="https://github.com/Sanjay-Hub-Dev/Sports_Management_System"
				/>

				<ProjectCard
					title="Stock Trading Platform"
					description="A full-stack trading dashboard simulating live stock transactions, portfolio tracking, analytics visualization, and secure user authentication. Focused on building structured REST APIs and scalable backend services."
					tech={["React", "Node.js", "Express", "MongoDB", "REST APIs"]}
					github="https://github.com/Sanjay-Hub-Dev/Stock-Trading-Platform"
				/>
			</div>
		</section>
	);
}

export default Projects;
