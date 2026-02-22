import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Tech from "./sections/Tech";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Achievements from "./sections/Acheivements";
import Education from "./sections/Education";
import LeetCodeStats from "./components/LeetCodeStats";

function App() {
	return (
		<div className="relative bg-black text-white min-h-screen overflow-x-hidden">
			<Navbar />
			<div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none"></div>
			<Hero />
			<About />
			<Tech />
			<Projects />
            <LeetCodeStats  />
			<Achievements />
			<Education />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
