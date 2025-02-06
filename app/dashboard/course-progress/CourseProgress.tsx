"use client";
import React from "react";
import Image from "next/image";
import CourseProgressCard from "../../src/components/Cards/CourseProgressCard";
import ButtonContent from "../../src/components/Button/ButtonContent";

const CourseProgress: React.FC = () => {
  return (
    <div className="relative bg-[#EFF5FB] p-6 rounded-xl shadow-lg">
      {/* Title Button */}
      <div className="absolute -top-0 left-0 shadow-lg">
        <ButtonContent title="Course Progress"/>
      </div>

      <div className="flex  gap-6 p-5 justify-between mt-8">
        <CourseProgressCard
          color="bg-teal-700"
          icon={
            <Image
              src="/images/check.png"
              alt="Passed"
              width={50}
              height={50}
            />
          }
          title="Passed"
          total={5}
        />
        <CourseProgressCard
          color="bg-red-600"
          icon={
            <Image
              src="/images/turn-left.png"
              alt="Failed"
              width={50}
              height={50}
            />
          }
          title="Failed"
          total={1}
        />
        <CourseProgressCard
          color="bg-lime-500"
          icon={
            <Image
              src="/images/hourglass.png"
              alt="Remaining"
              width={50}
              height={50}
            />
          }
          title="Remaining"
          total={3}
        />
      </div>
    </div>
  );
};

export default CourseProgress;
