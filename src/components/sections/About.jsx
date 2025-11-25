import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const languageSkills = ["Python", "JavaScript", "Java", "C", "C#", "GDScript", "SQL"];

    const technologySkills = ["Linux", "Windows", "Whireshark", "SQLDeveloper", "Docker", "MQTT", "YoloCam"];

    const frameworkSkills = ["React.js", "Node.js", "Spring Boot", "ROS2", "JavaFX", "Java Swing", "Express.js"];

    const securityConcepts = ["XSS", "JWT Auth", "Reverse Shell", "Poisoning", "CSRF", "SQL Injection"];

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
                    and basic attack techniques (reverse shells, poisoning, SQLi).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Languages</h3>
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
                        <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
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
                        
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Framework & Libraries</h3>
                        <div className="flex flex-wrap gap-2">
                            {frameworkSkills.map((tech, key) => (
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
                        <h3 className="text-xl font-bold mb-4">Security Concepts</h3>
                        <div className="flex flex-wrap gap-2">
                            {securityConcepts.map((tech, key) => (
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
                            <strong>Exchange Semester </strong> - Seinäjoki University of Applied Sciences (Jul. 2023 - Dec. 2023)
                        </li>

                        <li>
                            <strong>Relevant Coursework:</strong> Data Structures, System Security, Data Security, System Administration,
                            Cloud Computing, Operating Systems, Network Engineering and Software Development
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
                                    <strong>Liebherr Hackathon</strong>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Main Round 6th Place (21st Nov. 2024)</li>   
                                    <li>Qualification Round 2nd Place (24th Oct. 2024)</li>
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