import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const languageSkills = [
    "Python",
    "JavaScript",
    "Java",
    "C",
    "C#",
    "GDScript",
    "SQL",
  ];

  const technologySkills = [
    "Linux",
    "Windows",
    "Whireshark",
    "SQLDeveloper",
    "Docker",
    "MQTT",
    "YoloCam",
  ];

  const frameworkSkills = [
    "React.js",
    "Node.js",
    "Spring Boot",
    "ROS2",
    "JavaFX",
    "Java Swing",
    "Express.js",
  ];

  const securityConcepts = [
    "XSS",
    "JWT Auth",
    "Reverse Shell",
    "Poisoning",
    "CSRF",
    "SQL Injection",
  ];

  const workExperiences = [
    {
      title: "Volunteer Worker at Virteum",
      date: "Mar. 2024 - present",
      tasks: [
        "Advising on website features and usability, ensuring practical needs are met",
        "Supporting the team with everyday IT issues and troubleshooting",
        "Collaborating with developers to provide guidance on user-focused improvements",
      ],
    },
    {
      title: "Internship at NDSatCom GmbH",
      date: "Mar. 2025 - Aug. 2025",
      tasks: [
        "Security checks of company products",
        "Programming GUI elements in Java Swing/FX",
      ],
    },
    {
      title: "Liebherr Hackathon",
      date: "Oct. - Nov. 2024",
      tasks: [
        "Main Round 6th Place (21st Nov. 2024)",
        "Qualification Round 2nd Place (24th Oct. 2024)",
      ],
    },
  ];

  const education = [
    {
      title: "B.S. in Computer Science",
      date: "Oct. 2021 - Jul. 2026",
      details: "Ravensburg-Weingarten University of Applied Sciences",
      coursework: [
        "Data Structures",
        "Data Security",
        "System Security",
        "System Programming",
        "System Administration",
        "Cloud Computing",
        "Operating Systems",
        "Network Engineering",
        "Software Development",
        "Databse Programming",
      ],
    },
    {
      title: "Exchange Semester",
      date: "Jul. 2023 - Dec. 2023",
      details: "Seinäjoki University of Applied Sciences",
      coursework: [
        "Basics of Electronics",
        "Robotics",
        "Automation Technology",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-800 to-amber-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Dedicated student of Applied Computer Science with a keen interest
              in IT security and initial practical experience from a
              cybersecurity hackathon. Familiar with topics such as web
              vulnerabilities (XSS, CSRF), authentication mechanisms (JWT), and
              basic attack techniques (reverse shells, poisoning, SQLi).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languageSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-800 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
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
                      className="bg-purple-500/10 text-purple-800 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Framework & Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frameworkSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-800 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
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
                      className="bg-purple-500/10 text-purple-800 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              {education.map((uni, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
                >
                  <h4 className="text-lg font-bold text-purple-800">
                    {uni.title}
                  </h4>
                  <p className="text-gray-300 mb-2">{uni.details}</p>
                  <p className="text-sm text-gray-300 italic mb-2">
                    {uni.date}
                  </p>
                  <p className="text-gray-300 mb-2">Relevant Coursework: </p>
                  {uni.coursework.length > 0 && (
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {uni.coursework.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              {workExperiences.map((job, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all"
                >
                  <h4 className="text-lg font-bold text-purple-800">
                    {job.title}
                  </h4>
                  <p className="text-sm text-gray-300 italic mb-2">
                    {job.date}
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {job.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
