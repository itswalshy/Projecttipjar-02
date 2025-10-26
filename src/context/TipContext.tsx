import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Partner {
  name: string;
  hours: number;
}

export interface DistributionData {
  totalHours: number;
  totalAmount: number;
  hourlyRate: number;
  partners: Array<{
    name: string;
    hours: number;
    amount: number;
  }>;
}

interface TipContextType {
  partnerHours: Partner[];
  setPartnerHours: (partners: Partner[]) => void;
  distributionData: DistributionData | null;
  setDistributionData: (data: DistributionData | null) => void;
  recordDistribution: (data: DistributionData) => void;
  distributionHistory: DistributionData[];
}

const TipContext = createContext<TipContextType | undefined>(undefined);

export const useTipContext = () => {
  const context = useContext(TipContext);
  if (context === undefined) {
    throw new Error('useTipContext must be used within a TipContextProvider');
  }
  return context;
};

interface TipContextProviderProps {
  children: ReactNode;
}

export const TipContextProvider: React.FC<TipContextProviderProps> = ({ children }) => {
  const [partnerHours, setPartnerHours] = useState<Partner[]>([]);
  const [distributionData, setDistributionData] = useState<DistributionData | null>(null);
  const [distributionHistory, setDistributionHistory] = useState<DistributionData[]>([]);

  const recordDistribution = (data: DistributionData) => {
    setDistributionHistory(prev => [data, ...prev.slice(0, 9)]); // Keep last 10 distributions
  };

  const value: TipContextType = {
    partnerHours,
    setPartnerHours,
    distributionData,
    setDistributionData,
    recordDistribution,
    distributionHistory,
  };

  return (
    <TipContext.Provider value={value}>
      {children}
    </TipContext.Provider>
  );
};
