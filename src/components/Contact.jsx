import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Let's start a conversation.</h2>
            <p className="text-lg text-gray-500 mb-8">Whether you're a student looking for guidance or a company seeking talent, we're here.</p>
            
            <div className="space-y-6">
              <div className="flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm mr-5">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">Email Us</p>
                  <p className="text-blue-600 font-medium">hello@codehera.com</p>
                </div>
              </div>
              
              <div className="flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm mr-5">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">Visit HQ</p>
                  <p className="text-gray-600 font-medium">101 Tech Plaza, San Francisco</p>
                </div>
              </div>
            </div>
          </div>

          <form className="bg-white p-8 rounded-3xl border border-gray-100 shadow-2xl shadow-blue-50/50" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send a message</h3>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="First Name" className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" />
                <input type="text" placeholder="Last Name" className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition" />
              <textarea rows="4" placeholder="How can we help?" className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"></textarea>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;