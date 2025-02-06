import React from "react";
import CourseProgress from "./course-progress/CourseProgress";
import Performance from "./performance/Performance";
import CoursesTable from "./course-progress/CourseTable";
import MajorInformation from "./major/MajorInformation"

const Dashboard: React.FC = () => {
  return (
    <div className="p-10 space-y-6">
      <div className="flex gap-6 justify-between">
        <div className="flex-1">
          <CourseProgress />
        </div>
        <div className="flex-[2]">
          <Performance />
        </div>
      </div>
      <div>
        <CoursesTable />
        <MajorInformation/>
      </div>
    </div>
  );
};

export default Dashboard;
