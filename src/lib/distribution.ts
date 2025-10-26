import { Partner, DistributionData } from '../context/TipContext';

export const calculateDistribution = ({
  partnerHours,
  totalAmount,
}: {
  partnerHours: Partner[];
  totalAmount: number;
}): DistributionData => {
  const totalHours = partnerHours.reduce((sum, partner) => sum + partner.hours, 0);
  
  if (totalHours === 0) {
    throw new Error('Total hours cannot be zero');
  }

  const hourlyRate = totalAmount / totalHours;

  const partners = partnerHours.map(partner => ({
    name: partner.name,
    hours: partner.hours,
    amount: Math.round(partner.hours * hourlyRate * 100) / 100, // Round to 2 decimal places
  }));

  return {
    totalHours,
    totalAmount,
    hourlyRate: Math.round(hourlyRate * 100) / 100,
    partners,
  };
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatHours = (hours: number): string => {
  return `${hours.toFixed(1)}h`;
};
