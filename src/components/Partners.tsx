
import React from 'react';
import { Award, Handshake, Star, Target, Building, Heart, Wrench, Users } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: "ERPNext Foundation",
      description: "Official certified partner for ERPNext implementations and consulting services",
      icon: Award,
      category: "Technology Partner"
    },
    {
      name: "AD3 Infotech",
      description: "Strategic technology partnership for innovative ERP solutions and digital transformation",
      logo: "/lovable-uploads/82c693fe-cbd7-4b1a-8dd3-183a6945fcd4.png",
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
    }
  ];

  const featuredClients = [
    {
      name: "Drops Chemicals",
      logo: "/lovable-uploads/3fdc73a5-e9cb-4cfa-a394-2c410d43400a.png",
      sector: "Chemical Manufacturing",
      description: "Complete ERP implementation for chemical manufacturing operations"
    }
  ];

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
    <section id="partners" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Trusted <span className="text-gradient">Partners & Clients</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Collaborating with industry leaders and serving organizations across Manufacturing, Service, and Healthcare sectors
          </p>
        </div>

        {/* Partners Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Strategic Partners</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => {
              const IconComponent = partner.icon;
              return (
                <div key={index} className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 card-hover text-center">
                  <div className="flex justify-center mb-4">
                    {partner.logo ? (
                      <div className="p-4 bg-white rounded-xl">
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="h-12 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="p-4 bg-blue-600/20 rounded-xl">
                        <IconComponent className="text-blue-400" size={32} />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-blue-400 text-sm font-semibold mb-3">{partner.category}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{partner.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Clients */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Featured Clients</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {featuredClients.map((client, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 card-hover text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-xl">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{client.name}</h4>
                <p className="text-blue-400 text-sm font-semibold mb-3">{client.sector}</p>
                <p className="text-slate-400 text-sm">{client.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {clientStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 card-hover text-center">
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
              <div key={index} className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 card-hover">
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
        <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8 text-center mb-16">
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

        {/* Partnership Opportunities */}
        <div className="text-center">
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
