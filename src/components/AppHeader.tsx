import React from 'react';

const AppHeader: React.FC = () => {
  return (
    <header className="w-full bg-[#1E3535] border-b border-[#3A5F5F] animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#93EC93] to-[#9FD6E9] rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#364949]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#f5f5f5]">TipJar</h1>
              <p className="text-sm text-[#9fd6e9]">Tip Distribution Calculator</p>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center space-x-4">
            <div className="text-sm text-[#ffeed6]">
              <span className="font-medium">Fair & Simple</span>
              <span className="text-[#9fd6e9] ml-2">•</span>
              <span className="text-[#9fd6e9] ml-2">Hourly Distribution</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
