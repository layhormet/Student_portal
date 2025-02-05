import React from "react";
import PerformanceChart from "../../src/components/Cards/PerformanceChart";
import ButtonContent from '../../src/components/Button/ButtonContent'

const Performance: React.FC = () => {
  return (
    <div className="relative bg-[#EFF5FB] p-6 rounded-xl shadow-lg">
      <div className="absolute -top-0 left-0 ">
        <ButtonContent title="Performance"></ButtonContent>
      </div>
      <div className="flex gap-5 p-1 justify-between">
        <PerformanceChart title="GPA" value={4} color="red" />
        <PerformanceChart title="Grade" value="A+" color="green" /> {/* Changed color for Grade */}
      </div>
    </div>
  );
};

export default Performance;