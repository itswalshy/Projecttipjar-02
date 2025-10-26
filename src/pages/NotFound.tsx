import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-[#9fd6e9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-[#f5f5f5] mb-2">Page Not Found</h1>
      <p className="text-[#9fd6e9] mb-6">The page you're looking for doesn't exist.</p>
      <a 
        href="/" 
        className="inline-flex items-center px-4 py-2 bg-[#93ec93] text-[#364949] rounded-md hover:bg-opacity-90 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
