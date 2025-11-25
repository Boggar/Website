import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-700 to-amber-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-1-y hover:border-purple-500/30 hover:sahdow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Python Keylogger</h3>
              <p className="text-gray-400 mb-4">
                A minimalistic Python keylogger, developed solely for
                educational and demonstration purposes. The project shows how
                global keystrokes can be intercepted and stored locally using
                pynput.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Event Handling",
                  "Data Operations",
                  "System Programming",
                  "Python",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Boggar/Keylogger"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-1-y hover:border-purple-500/30 hover:sahdow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">OCR Detection Tool</h3>
              <p className="text-gray-400 mb-4">
                A Python-based OCR tool with a user-friendly GUI for extracting
                text from PDFs and image files (.png, .jpg, .jpeg, .tiff, etc.).
                It converts PDFs to images (pdf2image), recognizes text using
                pytesseract, and exports results as PDF files (ReportLab). The
                GUI is built with PySimpleGUI to select files, set output
                folders, and choose languages.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "OCR Processing",
                  "Multi-Threading",
                  "File-Handling",
                  "GUI Design",
                  "Python",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Boggar/OCR_Detection"
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-1-y hover:border-purple-500/30 hover:sahdow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Smart Alarmclock</h3>
              <p className="text-gray-400 mb-4">
                A smart alarm clock that uses image recognition to detect
                whether a person is still in bed. As long as the person does not
                get up, the alarm tone becomes more annoying. As soon as the
                person gets up, the alarm stops. Optionally, a Telegram bot can
                notify the person that they have successfully gotten up. The
                alarm times are set via Google Calendar.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "YoloCam", "MQTT", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href=""
                  className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
