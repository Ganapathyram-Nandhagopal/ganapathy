
import React, { useEffect, useRef, useState } from 'react';
import { Code, Settings, Star, User } from 'lucide-react';

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
    { name: 'ERPNext', level: 95, icon: Settings },
    { name: 'Flutter Development', level: 90, icon: Code },
    { name: 'RFID Integration', level: 85, icon: Star },
    { name: 'UI/UX Design', level: 88, icon: User },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Passionate about creating innovative solutions that drive business growth and efficiency
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 card-hover">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                As the founder of <span className="text-blue-400 font-semibold">BUDE Global Enterprise</span>, 
                I specialize in transforming business operations through strategic ERP implementations 
                and innovative technology solutions.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                With years of experience in ERPNext consulting, Flutter app development, and RFID integration, 
                I help businesses streamline their processes and achieve sustainable growth.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My approach combines technical expertise with business acumen to deliver solutions 
                that not only meet today's needs but also scale for tomorrow's challenges.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 card-hover">
              <h3 className="text-2xl font-bold text-white mb-4">What Drives Me</h3>
              <p className="text-slate-300 leading-relaxed">
                I believe in the power of technology to transform businesses and improve lives. 
                Every project is an opportunity to create something meaningful and impactful.
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
