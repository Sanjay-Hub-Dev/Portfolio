function Hero() {
	return (
		<section className="flex flex-col items-center justify-center text-center min-h-[85vh] px-6">
			<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
				Dhavanam Sanjay
			</h1>

			<h2 className="mt-4 text-2xl md:text-3xl text-gray-400 font-semibold">
				Full Stack Developer | MERN | DSA Enthusiast
			</h2>

			<p className="mt-6 text-gray-400 max-w-2xl text-lg leading-relaxed">
				B.Tech Information Technology student passionate about building scalable
				full-stack applications, backend systems, and DevOps-driven solutions.
				Strong foundation in Data Structures & Algorithms using Java.
			</p>

			<div className="mt-8 flex gap-4 flex-wrap justify-center">
				<a
					href="https://github.com/Sanjay-Hub-Dev"
					target="_blank"
					className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
				>
					GitHub
				</a>

				<a
					href="https://leetcode.com/u/3yAoFkCbQC/"
					target="_blank"
					className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
				>
					LeetCode (300+ Problems)
				</a>

				<a
					href="mailto:dhavanamsanjay@gmail.com"
					className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
				>
					Contact
				</a>

				<a
					href="/resume.pdf"
					download
					className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
				>
					Download Resume
				</a>
			</div>
			{/* 
			<div className="mt-10">
				<img
					src="https://github-readme-stats.vercel.app/api?username=Sanjay-Hub-Dev&show_icons=true&theme=dark"
					alt="GitHub Stats"
					className="mx-auto"
				/>
			</div> */}

			{/* <div className="mt-10">
				<img
					src="https://leetcard.jacoblin.cool/3yAoFkCbQC?theme=dark&font=Nunito"
					alt="LeetCode Stats"
					className="rounded-xl"
				/>
			</div> */}

			<img
				src="https://github-readme-streak-stats.herokuapp.com/?user=Sanjay-Hub-Dev&theme=dark"
				alt="GitHub Streak"
				className="mx-auto mt-6"
			/>
		</section>
	);
}

export default Hero;
