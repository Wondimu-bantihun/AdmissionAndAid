import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import AdmissionsAndAid from './components/AdmissionsAndAid';
import ApplicationPortal from './components/ApplicationPortal';

export default function App() {
  // Track whether to show 'admissions' page or 'portal'
  const [currentView, setCurrentView] = useState('admissions');

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col justify-between">
      
      {/* GLOBAL NAVBAR */}
      <header className="bg-blue-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentView('admissions')}>
            <GraduationCap className="h-8 w-8 text-sky-400" />
            <span className="font-bold text-lg tracking-wide">UoG Institute of Technology</span>
          </div>
          <nav className="hidden md:flex space-x-6 text-xs font-medium text-slate-200">
            <button onClick={() => setCurrentView('admissions')} className="hover:text-white transition">Home</button>
            <a href="#" className="hover:text-white transition">About</a>
            <button onClick={() => setCurrentView('admissions')} className="text-white border-b-2 border-sky-400 pb-1">Admissions & Aid</button>
            <a href="#" className="hover:text-white transition">Academics</a>
            <a href="#" className="hover:text-white transition">Research</a>
            <a href="#" className="hover:text-white transition">News</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </nav>
          <button 
            onClick={() => setCurrentView('portal')}
            className="bg-sky-600 hover:bg-sky-500 text-white text-xs px-4 py-2 rounded font-semibold transition shadow-sm"
          >
            Apply Now
          </button>
        </div>
      </header>

      {/* DYNAMIC CONTENT SWITCH */}
      <div className="flex-grow">
        {currentView === 'admissions' ? (
          <AdmissionsAndAid onStartPortal={() => setCurrentView('portal')} />
        ) : (
          <ApplicationPortal onBackToHome={() => setCurrentView('admissions')} />
        )}
      </div>

      {/* GLOBAL FOOTER */}
      <footer className="bg-slate-900 text-slate-400 text-xs py-6 mt-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>University of Gondar - Institute of Technology | Registrar Office: registrar@iot.uog.edu.et</p>
          <p>© 2026 UoG IoT. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}