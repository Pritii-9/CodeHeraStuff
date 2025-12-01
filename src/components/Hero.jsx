import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = ({ onExplore }) => {
  return (
    <section className="pt-40 pb-20 bg-linear-to-b from-blue-50 via-white to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-left space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 text-sm font-semibold mb-2">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Hiring Batch 2025 Now Open
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              Code your future <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600">
                from anywhere.
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Access premium remote internships at top tech startups. 
              Build real features, get mentored by seniors, and graduate with experience that matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button onClick={onExplore} className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center justify-center group">
                Find Internships <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition flex items-center justify-center hover:border-gray-300">
                Hire Talent
              </button>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] overflow-hidden`}>
                     <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+20}`} alt="user" />
                   </div>
                 ))}
              </div>
              <p>Trusted by 2,000+ students</p>
            </div>
          </div>

          {/* Right: Visual Mockup */}
          <div className="hidden lg:block relative h-[500px]">
            {/* Floating Card 1: Code Editor */}
            <div className="absolute top-0 right-10 w-96 bg-gray-900 rounded-2xl shadow-2xl p-4 border border-gray-700 transform -rotate-2 animate-float z-20">
               <div className="flex gap-2 mb-4">
                 <div className="w-3 h-3 rounded-full bg-red-500"/>
                 <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                 <div className="w-3 h-3 rounded-full bg-green-500"/>
               </div>
               <div className="space-y-2 font-mono text-xs">
                 <div className="text-gray-400">// Applying for React Internship</div>
                 <div className="text-purple-400">const <span className="text-blue-400">intern</span> = <span className="text-yellow-400">await</span> codeHera.<span className="text-blue-300">apply</span>({'{'}</div>
                 <div className="pl-4 text-green-300">role: <span className="text-white">'Frontend Dev'</span>,</div>
                 <div className="pl-4 text-green-300">mode: <span className="text-white">'Remote'</span>,</div>
                 <div className="pl-4 text-green-300">skills: [<span className="text-white">'React'</span>, <span className="text-white">'Tailwind'</span>]</div>
                 <div className="text-purple-400">{'}'});</div>
                 <div className="text-gray-500 mt-2">Running tests... <span className="text-green-400">Passed</span></div>
               </div>
            </div>

            {/* Floating Card 2: Success Notification */}
            <div className="absolute bottom-20 left-10 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-30 animate-float" style={{animationDelay: '1s'}}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <CheckCircle size={24} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Offer Letter Received</p>
                <p className="text-xs text-gray-500">TechFlow • $500/mo</p>
              </div>
            </div>

            {/* Abstract blobs/shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-linear-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-[80px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;