
import React, { useEffect, useRef, useState } from 'react';
import { Settings, TrendingUp, Users, Briefcase } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'ERPNext Implementation', level: 95, icon: Settings },
    { name: 'Business Development', level: 90, icon: TrendingUp },
    { name: 'Project Management', level: 88, icon: Briefcase },
    { name: 'ERP Consulting', level: 92, icon: Users },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Passionate about delivering high-quality ERP solutions that drive business growth and efficiency
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 card-hover">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                I graduated with a degree in Commerce, specializing in Computer Applications 🎓. 
                This laid the foundation for my journey into the world of ERP solutions. I initially 
                kick-started my career as an ERPNext Implementation Consultant 🛠️, where I gained 
                invaluable experience and insight into the ERP landscape.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                With comprehensive knowledge and hands-on experience in ERPNext Implementation, 
                Business Development 📈, Project Management 📊, and Consulting 💡, I have the skill set 
                to deliver high-quality ERP solutions tailored to meet the unique needs of each client.
              </p>
              <p className="text-slate-300 leading-relaxed">
                At present, my role is laser-focused on spearheading business development initiatives 🚀. 
                I am keenly concentrated on the Manufacturing 🏭, Service 📞, and Healthcare 🏥 sectors, 
                where I aim to implement ERP solutions that streamline operations, enhance productivity, and drive business growth.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 card-hover">
              <h3 className="text-2xl font-bold text-white mb-4">What Drives Me</h3>
              <p className="text-slate-300 leading-relaxed">
                My multidisciplinary expertise ensures that I can offer end-to-end solutions, 
                right from project inception to successful implementation 🌐. I believe in the power 
                of technology to transform businesses and improve operational efficiency across industries.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Core Expertise</h3>
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 card-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-600/20 rounded-lg">
                        <IconComponent className="text-blue-400" size={20} />
                      </div>
                      <span className="text-white font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-blue-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className={`skill-bar h-2 rounded-full ${isVisible ? 'animate' : ''}`}
                      style={{ '--skill-percentage': `${skill.level}%` } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
