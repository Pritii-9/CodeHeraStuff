import React from 'react';
import { Cpu, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-gray-800 pb-12 mb-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg"><Cpu size={24} className="text-white"/></div>
              <span className="text-2xl font-bold text-white">CodeHera</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              The premier platform for computer science students to find meaningful, paid remote internships at top global startups.
            </p>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition"><Linkedin size={18}/></button>
              <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition"><Twitter size={18}/></button>
              <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"><Github size={18}/></button>
            </div>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Browse Internships</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">How it Works</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Success Stories</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Pricing</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500">
          &copy; 2024 CodeHera Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;