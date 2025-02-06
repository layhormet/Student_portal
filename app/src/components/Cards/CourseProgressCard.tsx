import React from "react";

interface CourseProgressCardProps {
  color: string;
  icon: React.ReactNode;
  title: string;
  total: number;
}

const CourseProgressCard: React.FC<CourseProgressCardProps> = ({
  color,
  icon,
  title,
  total,
}) => {
  return (
    <div
      className={`flex items-center p-6 rounded-lg shadow-md text-white ${color} w-60 h-24`}>
      <div className="bg-white p-4 rounded-full flex items-center justify-center w-16 h-16">
        {icon}
      </div>

      <div className="ml-4">
        <p className="font-semibold">{title}</p>
        <p className="text-sm">Total: {total}</p>
      </div>
    </div>
  );
};

export default CourseProgressCard;
