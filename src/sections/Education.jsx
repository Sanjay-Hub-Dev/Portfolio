import { useReveal } from "../hooks/useReveal";

function Education() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className={`max-w-6xl mx-auto px-6 py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >



{/* // function Education() {
//   return (
//     <section className="max-w-6xl mx-auto px-6 py-24"> */}

      <h2 className="text-4xl font-bold text-center mb-16">
        Education
      </h2>

      <div className="space-y-8">

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-semibold">
            B.Tech in Information Technology
          </h3>
          <p className="text-gray-400">
            JB Institute of Engineering and Technology, JNTU Hyderabad
          </p>
          <p className="text-gray-400">
            CGPA: 8.59 (till 7th semester)
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-semibold">
            Intermediate (MPC)
          </h3>
          <p className="text-gray-400">
            Narayana Junior College, Telangana — 79.4% (2022)
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-semibold">
            SSC
          </h3>
          <p className="text-gray-400">
            Bhashyam High School, Telangana — CGPA: 10 (2020)
          </p>
        </div>

      </div>
    </section>
  );
}

export default Education;