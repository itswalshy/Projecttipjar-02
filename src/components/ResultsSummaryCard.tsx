import React from 'react';
import { formatCurrency } from '../lib/distribution';

interface ResultsSummaryCardProps {
  totalHours: number;
  hourlyRate: number;
  totalAmount: number;
}

const ResultsSummaryCard: React.FC<ResultsSummaryCardProps> = ({
  totalHours,
  hourlyRate,
  totalAmount,
}) => {
  return (
    <div className="card animate-fadeIn shadow-soft mb-6">
      <div className="card-header">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#93EC93]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <div className="text-lg font-semibold tracking-tight text-[#f5f5f5]">
            Distribution Summary
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="summary-box">
            <p className="summary-label">Total Hours</p>
            <p className="summary-value">{totalHours.toFixed(1)}h</p>
          </div>
          
          <div className="summary-box">
            <p className="summary-label">Hourly Rate</p>
            <p className="summary-value-blue">{formatCurrency(hourlyRate)}</p>
          </div>
          
          <div className="summary-box">
            <p className="summary-label">Total Amount</p>
            <p className="summary-value-accent">{formatCurrency(totalAmount)}</p>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-[#364949] rounded-md">
          <div className="flex items-center text-sm text-[#ffeed6]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#93EC93]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">Calculation:</span>
            <span className="ml-2 text-[#9fd6e9]">
              {formatCurrency(totalAmount)} ÷ {totalHours.toFixed(1)}h = {formatCurrency(hourlyRate)}/hour
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSummaryCard;
