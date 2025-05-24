
import React from 'react';
import { Github, Code, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Enterprise ERP Solution",
      description: "Complete ERPNext implementation for a manufacturing company with 500+ employees, including inventory management, accounting, and HR modules.",
      techStack: ["ERPNext", "Python", "MariaDB", "Docker"],
      role: "Lead ERP Consultant",
      achievements: ["40% efficiency improvement", "Real-time inventory tracking", "Automated reporting"],
      image: "bg-gradient-to-br from-blue-600 to-purple-600"
    },
    {
      title: "RFID Inventory Management App",
      description: "Flutter-based mobile application with RFID integration for real-time inventory tracking and management in warehouses.",
      techStack: ["Flutter", "Dart", "RFID Technology", "Firebase"],
      role: "Full-Stack Developer",
      achievements: ["99.9% accuracy in tracking", "50% faster inventory counts", "Cross-platform compatibility"],
      image: "bg-gradient-to-br from-green-600 to-blue-600"
    },
    {
      title: "Digital Marketing Dashboard",
      description: "Comprehensive analytics dashboard for tracking multi-channel marketing campaigns with real-time performance metrics.",
      techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
      role: "Tech Lead & UI/UX Designer",
      achievements: ["360° campaign visibility", "25% ROI improvement", "Automated reporting"],
      image: "bg-gradient-to-br from-orange-600 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Showcasing innovative solutions that have transformed businesses and driven measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden card-hover group">
              {/* Project Image/Placeholder */}
              <div className={`h-48 ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Code className="text-white" size={20} />
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-blue-400 font-semibold mb-2">Role: {project.role}</h4>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2 flex items-center">
                    <Star className="text-yellow-400 mr-2" size={16} />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-slate-400 text-sm">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 text-sm font-semibold">
                    View Details
                  </button>
                  <button className="p-2 border border-slate-600 hover:border-blue-500 text-slate-400 hover:text-blue-400 rounded-lg transition-colors duration-300">
                    <Github size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">Interested in seeing more of my work?</p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
