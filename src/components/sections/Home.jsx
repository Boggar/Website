import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (<section id="home" className="min-h-screen flex items-center justify-center relative"
    >
        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-950 to-violet-100 bg-clip-text text-transparent clipleading-right">
                Hi, I'm Manuel
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I am a Computer Science Student at <a href="https://www.rwu.de" className="text-purple-500">RWU </a>
                specializing in software development and cyber security. My passion lies in understanding complex
                systems, identifying vulnerabilities, and creating solutions that make technology safer for everyone.
            </p>
        

        <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-purple-900 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5
             hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
                View Projects
            </a>

            <a href="#contact" className="border border-yellow-300/50 text-yellow-300 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5
             hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-yellow-600/10"
            >
                Contact Me
            </a>
        </div>
            </div>
        </RevealOnScroll>
    </section>
    );
}