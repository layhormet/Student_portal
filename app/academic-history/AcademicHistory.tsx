import React from "react";
import ButtonContent from "../src/components/Button/ButtonContent";
import { ListFilter } from "lucide-react";
import Image from "next/image";

interface AcademicHistoryProps {
  name: string;
  dateOfBirth: string;
  major: string;
  degree: string;
  academicYear: string;
  grade: string;
  courses: Array<{
    courseCode: string;
    courseTitle: string;
    credits: number;
    grade: string;
    gradePoint: number;
  }>;
}
const semesters = [
  { year: 1, semester: 1 },
  { year: 1, semester: 2 },
  { year: 2, semester: 1 },
  { year: 2, semester: 2 },
  { year: 3, semester: 1 },
  { year: 3, semester: 2 },
  { year: 4, semester: 1 },
  { year: 4, semester: 2 },
];

const AcademicHistory: React.FC<AcademicHistoryProps> = ({
  name,
  dateOfBirth,
  major,
  degree,
  academicYear,
  grade,
  courses,
}) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <ButtonContent title="Academic History"></ButtonContent>
        <div className="flex justify-between gap-4">
          <button className="flex items-center justify-between w-40 px-4 py-2 bg-[#FFF9F9] border border-gray-300 rounded-md shadow-sm text-gray-700 font-medium">
            Year
            <ListFilter className="w-5 h-5 " />
          </button>
          <button className="flex items-center justify-between w-40 px-4 py-2 bg-[#FFF9F9] border border-gray-300 rounded-md shadow-sm text-gray-700 font-medium">
            Semester
            <ListFilter className="w-5 h-5 " />
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-4">
        <div className="flex justify-between items-center pb-1 mb-1">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="Police Academy Logo"
              width={96}
              height={96}
            />
            <div>
              <h1 className="text-xl font-semibold text-2xl text-black">
                បណ្ឌិត្យសភានគរបាលកម្ពុជា
              </h1>
              <h2 className="text-sm font-semibold">
                POLICE ACADEMY OF CAMBODIA
              </h2>
            </div>
          </div>
          <div className="text-right text-gray-600">
            <p>#278H, Street 201R, Kroalkor Village,</p>
            <p>Sangkat Kilometer 6, Khan Russey Keo,</p>
            <p>Phnom Penh, Cambodia</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-1 border-b border-black">
          <div className="ml-28 mb-4">
            <p className="text-black">Name: {name}</p>
            <p className="text-black">Date of Birth: {dateOfBirth}</p>
            <p className="text-black mt-3">Major: {major}</p>
            <p className="text-black">Academic Year: {academicYear}</p>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-bold text-[#4F477D] ">
              OFFICE TRANSCRIPT
              <div className="flex items-center justify-end mt-1">
                <span className="border-t border-gray-400 w-14"></span>
                <span className="mx-2 text-yellow-500 text-lg">★★★</span>
                <span className="border-t border-gray-400 w-14"></span>
              </div>
            </h3>
            <p className="text-black mt-3">Degree: {degree}</p>
            <p className="text-black">Grade: {grade}</p>
          </div>
        </div>

        <div className="">
          {Array.from(new Set(semesters.map((s) => s.year))).map((year) => (
            <div key={year} className="mb-6">
              <h2 className="text-xl font-bold mb-2">Year {year}</h2>
              <div className="grid grid-cols-2">
                {semesters
                  .filter((s) => s.year === year)
                  .map((semester) => (
                    <div key={semester.semester}>
                      <h3 className="text-lg font-semibold mb-2">
                        Semester {semester.semester}
                      </h3>
                      <table className="w-full">
                        
                        <thead className=" font-sm whitespace-nowrap">
                            {year === 1 &&(
                              <tr className=" text-left">
                                <th>Course Code</th>
                                <th>Course Title</th>
                                <th>Credits</th>
                                <th>Grade</th>
                                <th>Grade Point</th>
                              </tr>
                            )}
                        </thead>
                        
                        <tbody>
                          {courses.map((course, index) => (
                            <tr key={index}>
                              <td>{course.courseCode}</td>
                              <td>{course.courseTitle}</td>
                              <td>{course.credits}</td>
                              <td>{course.grade}</td>
                              <td>{course.gradePoint}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicHistory;
