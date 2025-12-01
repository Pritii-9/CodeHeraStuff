import React from 'react';
import { Globe, Smartphone, Database, Terminal, CheckCircle, User, Award } from 'lucide-react';

export const MOCK_DOMAINS = [
  { id: 'web', name: 'Web Development', icon: <Globe size={24} />, desc: 'Build modern web applications using React, Angular, & Node.' },
  { id: 'app', name: 'App Development', icon: <Smartphone size={24} />, desc: 'Create native experiences for iOS and Android platforms.' },
  { id: 'data', name: 'Data Science', icon: <Database size={24} />, desc: 'Analyze complex data sets and build predictive ML models.' },
  { id: 'cyber', name: 'Cyber Security', icon: <Terminal size={24} />, desc: 'Secure infrastructure and conduct penetration testing.' },
];

export const MOCK_INTERNSHIPS = [
  { id: 1, domain: 'web', category: 'React', title: 'Frontend React Intern', company: 'TechFlow', duration: '3 Months', stipend: '$500/mo', type: 'Remote', deadline: '2 days left', logo: 'TF' },
  { id: 2, domain: 'web', category: 'Angular', title: 'Angular Developer Intern', company: 'EnterpriseSol', duration: '6 Months', stipend: '$600/mo', type: 'Remote', deadline: '1 week left', logo: 'ES' },
  { id: 3, domain: 'web', category: 'PHP', title: 'Backend PHP Intern', company: 'LegacySystems', duration: '3 Months', stipend: 'Unpaid', type: 'Remote', deadline: '3 days left', logo: 'LS' },
  { id: 4, domain: 'data', category: 'Python', title: 'Jr. Data Analyst', company: 'DataCorp', duration: '6 Months', stipend: '$800/mo', type: 'Remote', deadline: '5 days left', logo: 'DC' },
  { id: 5, domain: 'app', category: 'Flutter', title: 'Mobile App Intern', company: 'Appify', duration: '3 Months', stipend: '$400/mo', type: 'Remote', deadline: '1 day left', logo: 'AP' },
  { id: 6, domain: 'cyber', category: 'Network', title: 'Network Security Intern', company: 'SecureNet', duration: '4 Months', stipend: '$700/mo', type: 'Remote', deadline: '2 weeks left', logo: 'SN' },
];

export const FEATURES = [
  { title: 'Verified Companies', desc: 'We vet every startup and company to ensure a safe learning environment.', icon: <CheckCircle className="text-blue-600" /> },
  { title: 'Remote-First DNA', desc: 'All internships are designed to be executed from anywhere in the world.', icon: <Globe className="text-purple-600" /> },
  { title: 'Mentorship', desc: 'Get matched with a senior dev who guides your code reviews.', icon: <User className="text-green-600" /> },
  { title: 'Career Certificate', desc: 'Receive industry-recognized certification upon successful completion.', icon: <Award className="text-orange-600" /> },
];