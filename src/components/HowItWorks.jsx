import React from 'react';
import { Code, User } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Your path to a <br/>dream career.</h2>
            <p className="text-lg text-gray-500 mb-8">Stop applying to hundreds of ghost jobs. We streamline the process so you can focus on coding.</p>
            
            <div className="space-y-8">
              {[
                { step: '01', title: 'Create Profile', desc: 'Connect your GitHub and LinkedIn. Showcase your best repos.' },
                { step: '02', title: 'One-Click Apply', desc: 'Apply to verified startups with a single click. No cover letters needed.' },
                { step: '03', title: 'Get Certified', desc: 'Pass the code challenge, interview, and start earning.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                   <div className="shrink-0 w-12 h-12 rounded-full border-2 border-blue-100 flex items-center justify-center font-bold text-blue-600">
                     {item.step}
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                     <p className="text-gray-500">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-linear-to-br from-gray-100 to-gray-50 rounded-[40px] p-8 lg:p-12 relative overflow-hidden">
             {/* Abstract visualization of the process */}
             <div className="bg-white rounded-3xl shadow-xl p-6 relative z-10">
                <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">JD</div>
                    <div>
                      <div className="font-bold text-gray-900">John Doe</div>
                      <div className="text-xs text-gray-500">React Developer</div>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">HIRED</span>
                </div>
                <div className="space-y-3">
                   <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                   <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                   <div className="h-2 bg-gray-100 rounded w-full"></div>
                </div>
                <div className="mt-6 flex gap-3">
                  <div className="flex-1 bg-gray-50 h-20 rounded-xl border border-gray-100 flex items-center justify-center flex-col">
                     <Code size={20} className="text-gray-400 mb-1"/>
                     <span className="text-xs font-medium text-gray-500">Code Test</span>
                  </div>
                  <div className="flex-1 bg-gray-50 h-20 rounded-xl border border-gray-100 flex items-center justify-center flex-col">
                     <User size={20} className="text-gray-400 mb-1"/>
                     <span className="text-xs font-medium text-gray-500">Interview</span>
                  </div>
                </div>
             </div>
             
             {/* Background decorative circle */}
             <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;