import React, { useState } from 'react';
import { Search, Briefcase, MapPin } from 'lucide-react';

const InternshipExplorer = ({ internships, domains, onApply }) => {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInternships = internships.filter(job => {
    const matchesDomain = selectedDomain === 'all' || job.domain === selectedDomain;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <div className="py-32 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Explore Opportunities</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Filter by domain or search for specific technologies to find your perfect match.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 mb-12 items-center justify-between">
          <div className="flex overflow-x-auto pb-2 hide-scrollbar gap-2 w-full lg:w-auto">
             <button 
                onClick={() => setSelectedDomain('all')}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap ${selectedDomain === 'all' ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
              >
                View All
              </button>
              {domains.map(domain => (
                <button 
                  key={domain.id}
                  onClick={() => setSelectedDomain(domain.id)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition whitespace-nowrap flex items-center gap-2 ${selectedDomain === domain.id ? 'bg-gray-900 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
                >
                  {domain.name}
                </button>
              ))}
          </div>

          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search e.g. React, Python..." 
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map(job => (
            <div key={job.id} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center font-bold text-gray-700 text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {job.company.substring(0, 2).toUpperCase()}
                </div>
                {job.deadline.includes('day') && (
                  <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-bold rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    Urgent
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{job.title}</h3>
              <p className="text-gray-500 text-sm mb-6">{job.company}</p>
              
              <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
                <div className="flex items-center text-gray-500 text-xs font-medium bg-gray-50 px-2 py-1.5 rounded-lg">
                  <Briefcase size={14} className="mr-2 text-gray-400" /> {job.type}
                </div>
                <div className="flex items-center text-gray-500 text-xs font-medium bg-gray-50 px-2 py-1.5 rounded-lg">
                  <MapPin size={14} className="mr-2 text-gray-400" /> {job.duration}
                </div>
                <div className="flex items-center text-gray-500 text-xs font-medium bg-gray-50 px-2 py-1.5 rounded-lg col-span-2">
                   <span className="text-green-600 font-bold mr-2 text-sm">$</span> {job.stipend}
                </div>
              </div>
              
              <button 
                onClick={() => onApply(job)}
                className="w-full py-3 rounded-xl font-bold text-sm bg-gray-900 text-white hover:bg-blue-600 transition-colors shadow-lg shadow-gray-200 group-hover:shadow-blue-200"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipExplorer;