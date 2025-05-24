
import React from 'react';
import { Building, Heart, Wrench, Users } from 'lucide-react';

const Clients = () => {
  const clientStats = [
    {
      icon: Building,
      sector: "Manufacturing",
      count: "25+",
      description: "Manufacturing companies with streamlined operations"
    },
    {
      icon: Users,
      sector: "Service",
      count: "15+",
      description: "Service organizations with optimized workflows"
    },
    {
      icon: Heart,
      sector: "Healthcare",
      count: "10+",
      description: "Healthcare facilities with integrated systems"
    },
    {
      icon: Wrench,
      sector: "Others",
      count: "20+",
      description: "Various industries across different sectors"
    }
  ];

  const testimonials = [
    {
      quote: "Ganapathyram's expertise in ERPNext implementation transformed our manufacturing processes. The efficiency gains have been remarkable.",
      author: "Manufacturing Director",
      company: "Global Manufacturing Ltd.",
      sector: "Manufacturing"
    },
    {
      quote: "The business development strategies and ERP implementation significantly improved our operational efficiency and client satisfaction.",
      author: "Operations Manager",
      company: "ServiceTech Solutions",
      sector: "Service"
    },
    {
      quote: "Outstanding project management and attention to detail. Our healthcare facility now operates with unprecedented efficiency.",
      author: "IT Director",
      company: "Regional Healthcare Network",
      sector: "Healthcare"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Trusted by organizations across Manufacturing, Service, and Healthcare sectors
          </p>
        </div>

        {/* Client Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {clientStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-slate-900/50 rounded-2xl border border-slate-700 p-6 card-hover text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-xl">
                    <IconComponent className="text-blue-400" size={28} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.count}</div>
                <h3 className="text-lg font-bold text-white mb-2">{stat.sector}</h3>
                <p className="text-slate-400 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Client Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-900/50 rounded-2xl border border-slate-700 p-6 card-hover">
                <div className="mb-4">
                  <div className="text-blue-400 text-4xl mb-4">"</div>
                  <p className="text-slate-300 leading-relaxed italic">{testimonial.quote}</p>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-slate-400 text-sm">{testimonial.company}</p>
                  <span className="inline-block mt-2 bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">
                    {testimonial.sector}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Success Metrics */}
        <div className="bg-slate-900/50 rounded-2xl border border-slate-700 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Client Success Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <p className="text-slate-400">Average Efficiency Improvement</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
              <p className="text-slate-400">Client Retention Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">30 Days</div>
              <p className="text-slate-400">Average Implementation Time</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <p className="text-slate-400">Post-Implementation Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
