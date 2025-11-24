import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const languageSkills = ["Python", "JavaScript", "Java", "C", "C#", "GDScript"];

    const technologySkills = ["Linux", "Windows", "Whireshark", "SQL", "Docker"];

    /*const conceptSkills = ["XSS", "JWT", "ReverseShell", "Poisoning", "CSRF", "SQLi"];*/

    return <section id="about" className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-amber-400 bg-clip-text text-transparent text-center">
                {" "}
                About Me
            </h2>

            <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Dedicated student of Applied Computer Science with a keen interest in IT security and initial practical experience
                    from a cybersecurity hackathon. Familiar with topics such as web vulnerabilities (XSS, CSRF), authentication mechanisms (JWT),
                    and basic attack techniques (reverse shells, poisoning).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Language</h3>
                        <div className="flex flex-wrap gap-2">
                            {languageSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Technology</h3>
                        <div className="flex flex-wrap gap-2">
                            {technologySkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Education </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> B.S. in Computer Science </strong> - Ravensburg-Weingarten University of Education (Oct. 2021 - Jul. 2026)
                        </li>
                        
                        <li>
                            <strong>Exchange Semester </strong> - Seinäjoki University of Applied Sciences (July 2023 - Dec. 2023)
                        </li>

                        <li>
                            <strong>Relevant Coursework:</strong> Data Structures, System Security, Data Security, System Administration,
                            Cloud Computing, Operating Systems and Software Development
                        </li>
                    </ul>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> Work Experience </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4>
                                <strong>Internship at NDSatcom GmbH</strong> - (Mar. 2025 - Aug. 2025)
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Security Checks of comanpy products</li>
                                    <li>Programming GUI elements in Java Swing/FX</li>
                                </ul>
                            </h4>

                            <h4>
                                <strong>Liebherr x RWU Hackathon</strong> (Oct. 2024)
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>...</li>
                                    <li>...</li>
                                </ul>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </RevealOnScroll>
    </section>
}