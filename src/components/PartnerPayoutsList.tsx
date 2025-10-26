import React from 'react';
import { DistributionData } from '../context/TipContext';
import { formatCurrency, formatHours } from '../lib/distribution';

interface PartnerPayoutsListProps {
  distributionData: DistributionData;
}

const PartnerPayoutsList: React.FC<PartnerPayoutsListProps> = ({ distributionData }) => {
  return (
    <div className="card animate-fadeIn shadow-soft">
      <div className="card-header">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#93EC93]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <div className="text-lg font-semibold tracking-tight text-[#f5f5f5]">
            Partner Payouts
          </div>
        </div>
        <div className="text-sm text-[#9fd6e9]">
          {distributionData.partners.length} partner{distributionData.partners.length !== 1 ? 's' : ''}
        </div>
      </div>
      <div className="card-body p-0">
        <div className="divide-y divide-[#4c6767]">
          {distributionData.partners.map((partner, index) => (
            <div key={index} className="p-4 hover:bg-[#364949] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#93EC93] to-[#9FD6E9] rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-[#364949]">
                      {partner.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-[#f5f5f5] truncate" title={partner.name}>{partner.name}</p>
                    <p className="text-sm text-[#9fd6e9]">{formatHours(partner.hours)}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-lg font-bold text-[#f5f5f5]">
                    {formatCurrency(partner.amount)}
                  </p>
                  <p className="text-xs text-[#9fd6e9]">
                    {formatCurrency(distributionData.hourlyRate)}/hour
                  </p>
                </div>
              </div>
              
              {/* Progress bar showing relative hours */}
              <div className="mt-3">
                <div className="flex justify-between text-xs text-[#9fd6e9] mb-1">
                  <span>Hours worked</span>
                  <span>{((partner.hours / distributionData.totalHours) * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-[#364949] rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-[#93EC93] to-[#9FD6E9] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(partner.hours / distributionData.totalHours) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Total verification */}
        <div className="p-4 bg-[#1e3535] border-t border-[#4c6767]">
          <div className="flex justify-between items-center">
            <span className="font-medium text-[#f5f5f5]">Total Distributed:</span>
            <span className="text-lg font-bold text-[#93EC93]">
              {formatCurrency(distributionData.partners.reduce((sum, partner) => sum + partner.amount, 0))}
            </span>
          </div>
          <div className="text-xs text-[#9fd6e9] mt-1">
            Original amount: {formatCurrency(distributionData.totalAmount)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerPayoutsList;
