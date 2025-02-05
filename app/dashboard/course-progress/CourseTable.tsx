import React from 'react';
import Table from '../../src/components/Tables/TableForm';

const CoursesTable: React.FC = () => {
  const coursesHeaders = ["Class", "Teacher", "Room", "Grade", "Remarks"];
  const coursesRows = [
    ["Fundamentals of Legislation", "Mr. Vichka", "R001", "A", "Excellent"],
    ["Intro. to Economics Mon", "Mr. Sokoun", "R001", "B", "Very good"],
    ["Linear Algebra", "Mr. Smey", "R002", "A", "Excellent"],
    ["Intro to Calculus", "Mr. Thearith", "R003", "B", "Very Good"],
    ["Cambodian Constitution", "Mr. Rotha", "R003", "B", "Very Good"]
  ];

  const absencesHeaders = ["Course", "Teacher", "Date", "Session", "Status"];
  const absencesRows = [
    ["MATH 105", "Dara", "19-Dec-2024", "8:00-10:00", "Assent"],
    ["ECO 101", "Sok Lin", "19-Dec-2024", "10:00-12:00", "Assent"],
    ["LAW 201", "Na Rith", "19-Dec-2024", "2:00-3:30", "Assent"],
    ["STAT 401", "Da Vid", "19-Dec-2024", "3:30-5:00", "Assent"]
  ];

  return (
    <div className="relative flex justify-between w-full gap-6">
      <Table
        title="Current Courses"
        titleClassName="h-12 pl-4 font-bold"
        headers={coursesHeaders}
        className="w-full border-b-2 border-gray-300"
        rows={coursesRows}
      />

      <Table
        title="Absences"
        titleClassName="h-12 pl-4 font-bold"
        headers={absencesHeaders}
        rows={absencesRows}
        className="w-full bg-[#C3E2FE] text-gray-700 font-semibold text-left border-b-2 border-gray-300"
      />
    </div>
  );
};

export default CoursesTable;
