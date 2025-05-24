
import React from 'react';
import { Award, Handshake, Star, Target } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: "ERPNext Foundation",
      description: "Official certified partner for ERPNext implementations and consulting services",
      icon: Award,
      category: "Technology Partner"
    },
    {
      name: "Manufacturing Solutions Group",
      description: "Strategic alliance for manufacturing sector ERP implementations",
      icon: Target,
      category: "Industry Partner"
    },
    {
      name: "Healthcare Tech Alliance",
      description: "Specialized partnership for healthcare industry ERP solutions",
      icon: Star,
      category: "Healthcare Partner"
    },
    {
      name: "Service Excellence Network",
      description: "Collaborative partner network for service industry implementations",
      icon: Handshake,
      category: "Service Partner"
    }
  ];

  return (
    <section id="partners" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver exceptional ERP solutions across multiple sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div key={index} className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 card-hover text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-xl">
                    <IconComponent className="text-blue-400" size={32} />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-blue-400 text-sm font-semibold mb-3">{partner.category}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{partner.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl border border-blue-500/30 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Partnership Opportunities</h3>
            <p className="text-slate-300 mb-6">
              Interested in partnering with us? Let's explore how we can create mutual value and deliver exceptional results together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Handshake className="mr-2" size={20} />
              Explore Partnership
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
