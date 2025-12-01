import React, { useState, useEffect } from 'react';
import { Cpu, Bell, Menu, X } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab, notifications, toggleNotifications, showNotifications }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer group" onClick={() => setActiveTab('home')}>
            <div className="bg-linear-to-br from-blue-600 to-indigo-700 p-2.5 rounded-xl mr-3 shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
              <Cpu className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
              CodeHera
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'explore', 'contact'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`text-sm font-semibold capitalize transition-all duration-200 ${activeTab === tab ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {tab === 'explore' ? 'Internships' : tab}
              </button>
            ))}
            
            {/* Notifications */}
            <div className="relative">
              <button onClick={toggleNotifications} className="p-2 rounded-full hover:bg-gray-100 relative transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                {notifications.length > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white animate-pulse"></span>
                )}
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in-up origin-top-right">
                  <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                    <h3 className="font-semibold text-gray-900">Notifications</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{notifications.length} New</span>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <p className="p-6 text-sm text-gray-500 text-center">All caught up!</p>
                    ) : (
                      notifications.map((notif, idx) => (
                        <div key={idx} className="p-4 border-b border-gray-50 hover:bg-blue-50/50 transition cursor-pointer flex gap-3">
                          <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${notif.type === 'success' ? 'bg-green-500' : 'bg-blue-500'}`} />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{notif.title}</p>
                            <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{notif.message}</p>
                            <p className="text-[10px] text-gray-400 mt-2 font-medium uppercase tracking-wide">{notif.time}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            <button className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-gray-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0">
              Student Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 p-2 hover:bg-gray-100 rounded-lg transition">
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-slide-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['home', 'explore', 'contact'].map((tab) => (
              <button 
                key={tab}
                onClick={() => {setActiveTab(tab); setIsMenuOpen(false)}} 
                className="block w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-xl capitalize"
              >
                {tab === 'explore' ? 'Internships' : tab}
              </button>
            ))}
            <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-medium">
              Student Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;