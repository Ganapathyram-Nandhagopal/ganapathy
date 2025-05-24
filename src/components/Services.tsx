
import React from 'react';
import { Settings, Code, Star, Briefcase } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "ERP Consulting & Implementation",
      description: "Complete ERPNext solutions tailored to your business needs, from initial consultation to full deployment and training.",
      features: ["Custom ERPNext setup", "Business process optimization", "Data migration", "Staff training & support"],
      price: "Starting at $5,000"
    },
    {
      icon: Code,
      title: "Mobile App Development",
      description: "Cross-platform Flutter applications that deliver exceptional user experiences across iOS and Android devices.",
      features: ["Flutter development", "UI/UX design", "API integration", "App store deployment"],
      price: "Starting at $8,000"
    },
    {
      icon: Star,
      title: "RFID Integration Solutions",
      description: "Advanced RFID systems for inventory management, asset tracking, and automated data collection.",
      features: ["RFID system design", "Hardware integration", "Custom software development", "Real-time tracking"],
      price: "Starting at $3,000"
    },
    {
      icon: Briefcase,
      title: "Digital Marketing Strategy",
      description: "Comprehensive digital marketing solutions to boost your online presence and drive business growth.",
      features: ["SEO optimization", "Social media strategy", "Content marketing", "Analytics & reporting"],
      price: "Starting at $2,000"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-slate-900/50 rounded-2xl border border-slate-700 p-8 card-hover group">
                {/* Service Header */}
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-blue-600/20 rounded-xl mr-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                    <IconComponent className="text-blue-400" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-blue-400 font-semibold">{service.price}</p>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-300 flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-slate-900/50 rounded-2xl border border-slate-700 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose BUDE Global Enterprise?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <p className="text-slate-400">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                <p className="text-slate-400">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                <p className="text-slate-400">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
