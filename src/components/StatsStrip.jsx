import React from 'react';
import { Users, Briefcase, Zap } from 'lucide-react';

const STATS = [
  { number: '2,500+', label: 'Active Students', icon: <Users size={20} /> },
  { number: '450+', label: 'Partner Companies', icon: <Briefcase size={20} /> },
  { number: '92%', label: 'Placement Rate', icon: <Zap size={20} /> },
];

const StatsStrip = () => {
  return (
    <div className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {STATS.map((stat, idx) => (
            <div key={idx} className="py-8 flex items-center justify-center md:justify-start md:pl-16 gap-4 group cursor-default">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 tracking-tight">{stat.number}</p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsStrip;