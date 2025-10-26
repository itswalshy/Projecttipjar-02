import React, { useState, useCallback } from 'react';
import { useTipContext } from '../context/TipContext';

const FileDropzone: React.FC = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { setPartnerHours } = useTipContext();

  const parseCSVContent = (content: string): Array<{ name: string; hours: number }> => {
    const lines = content.split('\n').filter(line => line.trim());
    const partners: Array<{ name: string; hours: number }> = [];
    
    for (const line of lines) {
      // Handle different CSV formats and clean the data
      const cleanLine = line.replace(/['"]/g, '').trim();
      const parts = cleanLine.split(',').map(s => s.trim());
      
      if (parts.length >= 2) {
        const name = parts[0].trim();
        const hoursStr = parts[1].trim();
        const hours = parseFloat(hoursStr);
        
        if (name && !isNaN(hours) && hours > 0) {
          partners.push({ name, hours });
        }
      }
    }
    
    return partners;
  };

  const handleFile = useCallback(async (file: File) => {
    if (!file) return;
    
    setIsProcessing(true);
    
    try {
      const content = await file.text();
      const partners = parseCSVContent(content);
      
      if (partners.length === 0) {
        alert('No valid partner data found. Please ensure your file has "Name,Hours" format.');
        return;
      }
      
      setPartnerHours(partners);
      alert(`Successfully loaded ${partners.length} partners!`);
    } catch (error) {
      console.error('Error processing file:', error);
      alert('Error processing file. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  }, [setPartnerHours]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  }, [handleFile]);

  const handleManualEntry = () => {
    const name = prompt('Enter partner name:');
    if (!name) return;
    
    const hoursStr = prompt('Enter hours worked:');
    const hours = parseFloat(hoursStr || '0');
    
    if (isNaN(hours) || hours <= 0) {
      alert('Please enter a valid number of hours.');
      return;
    }
    
    // Add to existing partners instead of replacing
    setPartnerHours(prev => [...prev, { name: name.trim(), hours }]);
    alert(`Added ${name} with ${hours} hours.`);
  };

  const handleSampleData = () => {
    const samplePartners = [
      { name: "John Doe", hours: 8.5 },
      { name: "Jane Smith", hours: 7.0 },
      { name: "Mike Johnson", hours: 6.5 },
      { name: "Sarah Wilson", hours: 8.0 },
      { name: "David Brown", hours: 7.5 }
    ];
    setPartnerHours(samplePartners);
    alert(`Loaded ${samplePartners.length} sample partners!`);
  };

  return (
    <div className="mb-4">
      <div
        className={`dropzone ${isDragOver ? 'active' : ''} ${isProcessing ? 'opacity-50' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          {isProcessing ? (
            <div className="flex flex-col items-center space-y-2">
              <svg className="animate-spin h-8 w-8 text-[#93EC93]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-[#f5f5f5] font-medium">Processing file...</p>
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center space-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#93EC93]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <div className="text-center">
                  <p className="text-lg font-medium text-[#f5f5f5] mb-1">
                    {isDragOver ? 'Drop your file here' : 'Upload Partner Hours'}
                  </p>
                  <p className="text-sm text-[#9fd6e9]">
                    Drag & drop a CSV file or click to browse
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
                <input
                  type="file"
                  accept=".csv,.txt"
                  onChange={handleFileInput}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="flex-1 bg-[#93ec93] text-[#364949] hover:bg-opacity-90 transition-all duration-300 inline-flex h-10 justify-center items-center gap-2 whitespace-nowrap font-medium rounded-md px-4 py-2 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  Choose File
                </label>
                
                <button
                  onClick={handleManualEntry}
                  className="flex-1 bg-[#9fd6e9] text-[#364949] hover:bg-opacity-90 transition-all duration-300 inline-flex h-10 justify-center items-center gap-2 whitespace-nowrap font-medium rounded-md px-4 py-2 shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Manual Entry
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
                <button
                  onClick={handleSampleData}
                  className="flex-1 bg-[#dd7895] text-[#364949] hover:bg-opacity-90 transition-all duration-300 inline-flex h-10 justify-center items-center gap-2 whitespace-nowrap font-medium rounded-md px-4 py-2 shadow-md hover:shadow-lg"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Load Sample Data
                </button>
              </div>
              
              <div className="text-xs text-[#9fd6e9] text-center max-w-sm">
                <p>CSV format: Name, Hours</p>
                <p>Example: John Doe, 8.5</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileDropzone;
