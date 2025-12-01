/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonial'; // Ensure this filename matches exactly (singular/plural)
import InternshipExplorer from './components/InternshipExplorer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ApplicationModal from './components/ApplicationModel';
import { MOCK_DOMAINS, MOCK_INTERNSHIPS } from './data/mockData';

// Styles for custom animations
const styles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  .glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { title: 'Welcome!', message: 'Complete your profile to get matched faster.', time: '2 mins ago', type: 'info' },
    { title: 'New Web Dev Roles', message: '3 new React internships added today.', time: '1 hr ago', type: 'info' },
  ]);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsAppModalOpen(true);
  };

  const handleFormSubmit = (data) => {
    const newNotif = {
      title: 'Application Sent',
      message: `Successfully applied for ${selectedJob.title} at ${selectedJob.company}`,
      time: 'Just now',
      type: 'success'
    };

    setNotifications([newNotif, ...notifications]);
    setIsAppModalOpen(false);
    alert(`Success! Application for ${selectedJob.title} submitted.`);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <style>{styles}</style>
      
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        notifications={notifications}
        toggleNotifications={() => setShowNotifications(!showNotifications)}
        showNotifications={showNotifications}
      />

      <main>
        {activeTab === 'home' && (
          <div className="animate-fade-in">
            <Hero onExplore={() => setActiveTab('explore')} />
            <StatsStrip />
            <Features />
            <HowItWorks />
            <Testimonials />
            <div className="bg-blue-600 text-white py-24 text-center relative overflow-hidden">
               <div className="relative z-10 max-w-2xl mx-auto px-4">
                  <h2 className="text-4xl font-extrabold mb-6">Ready to launch your career?</h2>
                  <p className="text-blue-100 text-lg mb-8">Join thousands of students who have found their dream internships through CodeHera.</p>
                  <button onClick={() => setActiveTab('explore')} className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-2xl hover:scale-105 transform">Start Applying Now</button>
               </div>
               {/* Background pattern */}
               <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-xl"></div>
                 <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'explore' && (
          <div className="animate-fade-in">
            <InternshipExplorer 
              internships={MOCK_INTERNSHIPS} 
              domains={MOCK_DOMAINS} 
              onApply={handleApplyClick} 
            />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-fade-in">
            <Contact />
          </div>
        )}
      </main>

      <Footer />

      <ApplicationModal 
        isOpen={isAppModalOpen} 
        onClose={() => setIsAppModalOpen(false)} 
        job={selectedJob} 
        onSubmit={handleFormSubmit} 
      />
    </div>
  );
};

export default App;