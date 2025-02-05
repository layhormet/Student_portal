import React from "react";

interface PerformanceChartProps {
  title: string;
  value: number | string;
  color: string;
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ title, value, color }) => {
  const calculatePercentage = (value: number | string): number => {
    if (typeof value === 'number') {
      return (value / 4) * 360; // Assuming a maximum GPA of 4
    } else if (typeof value === 'string') {
      const gradeMap: { [key: string]: number } = {
        'A+': 98,
        'A': 95,
        'A-': 92,
        'B+': 88,
        'B': 85,
        'B-': 82,
        'C+': 78,
        'C': 75,
        'C-': 72,
        'D': 65,
        'F': 50,
      };
      const percentage = gradeMap[value.toUpperCase()];
      return (percentage || 0) * 3.6;
    }
    return 0;
  };

  const percentage = calculatePercentage(value);
  const inversePercentage = 360 - percentage; // Calculate the inverse for the "empty" part

  return (
    <div className="flex flex-col items-center w-24">
      <div className=" h-24 mt-9 relative">
        <svg className="w-full rounded-full h-full  " >
          <circle cx="60%" cy="60%" r="100%" fill={color} /> 
          <circle
            cx="50%"
            cy="50%"
            r="40%"
            fill="#EFF5FB"  
            stroke="#EFF5FB"
            strokeWidth="0"
            strokeDasharray={`${inversePercentage} 360`} 
            strokeLinecap="round"
            transform="rotate(-0 40 40)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold">
          {value}
        </div>
      </div>
      <p className="mt-2 text-gray-700">{title}</p>
    </div>
  );
};

export default PerformanceChart;