
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Ganapathi Ram</h3>
            <p className="text-slate-400 leading-relaxed">
              ERP Consultant & Tech Entrepreneur dedicated to transforming businesses through innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">Services</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-slate-400">ERP Consulting</span></li>
              <li><span className="text-slate-400">Mobile App Development</span></li>
              <li><span className="text-slate-400">RFID Integration</span></li>
              <li><span className="text-slate-400">Digital Marketing</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-700">
          <p className="text-slate-400 mb-4 md:mb-0">
            © {currentYear} Ganapathi Ram | BUDE Global Enterprise. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="mailto:ganapathi@budeglobal.com"
              className="p-2 bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white rounded-lg transition-all duration-300"
              title="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white rounded-lg transition-all duration-300"
              title="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white rounded-lg transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
