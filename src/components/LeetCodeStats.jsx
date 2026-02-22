import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

function LeetCodeStats() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref} id="leetcode"
      className={`max-w-6xl mx-auto px-6 py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >



{/* 
function LeetCodeStats() {
  return (
    <section id="leetcode" className="max-w-6xl mx-auto px-6 py-24"> */}

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-4 text-center"
      >
        LeetCode Progress
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-400 text-center mb-12"
      >
        300+ problems solved • Strong foundation in DSA & Problem Solving
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-xl hover:shadow-orange-500/20 transition duration-300">
          <img
            src="https://leetcard.jacoblin.cool/3yAoFkCbQC?theme=dark&font=Nunito&ext=heatmap"
            alt="LeetCode Stats"
            className="rounded-xl"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-10"
      >
        <a
          href="https://leetcode.com/u/3yAoFkCbQC/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 border border-orange-500 text-orange-400 rounded-lg hover:bg-orange-500 hover:text-black transition duration-300"
        >
          Visit My LeetCode Profile →
        </a>
      </motion.div>

    </section>
  );
}

export default LeetCodeStats;