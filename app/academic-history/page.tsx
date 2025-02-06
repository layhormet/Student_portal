// pages/index.tsx
import type { NextPage } from 'next';
import AcademicHistory from './AcademicHistory';

const Home: NextPage = () => {
  const academicData = {
    name: 'Student A',
    dateOfBirth: 'April 6, 2001',
    major: 'Economic',
    degree: 'Master',
    academicYear: '2024',
    grade: 'B',
    courses: [
      { courseCode: "E00012", courseTitle: "Academic", credits: 3, grade: "B", gradePoint: 3.5 },
      { courseCode: "E00013", courseTitle: "Mathematics", credits: 4, grade: "A", gradePoint: 4.0 },
      { courseCode: "E00014", courseTitle: "Physics", credits: 3, grade: "B+", gradePoint: 3.7 },
      { courseCode: "E00015", courseTitle: "Computer Science", credits: 3, grade: "A-", gradePoint: 3.8 }
    ]
  };

  return (
    <div className="p-3 bg-gray-100 min-h-screen">
      <AcademicHistory {...academicData} />
    </div>
  );
};

export default Home;