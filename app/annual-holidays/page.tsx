"use client";
import React, { useState, useRef } from "react";
import ButtonContent from "../src/components/Button/ButtonContent";
import { ListFilter } from "lucide-react";

interface Holidays {
  Holiday_Name: string;
  Holiday_Type: string;
  Start_Date: string;
  End_Date: string;
}

const holiday: Holidays[] = [
  {
    Holiday_Name: "New Year’s day",
    Holiday_Type: "Public holiday",
    Start_Date: "01 Jan 202",
    End_Date: "01 Jan 2025",
  },
  {
    Holiday_Name: "Victory over Genocide day",
    Holiday_Type: "Public holiday",
    Start_Date: "07 Jan 2025",
    End_Date: "07 Jan 2025",
  },
  {
    Holiday_Name: "International Women's day",
    Holiday_Type: "Public holiday",
    Start_Date: "08 March 2025",
    End_Date: "08 March 2025",
  },
  {
    Holiday_Name: "Cambodian New Year",
    Holiday_Type: "Public holiday",
    Start_Date: "13 Apr 2025",
    End_Date: "16 Apr 2025",
  },
  {
    Holiday_Name: "King Sihamoni's Birthday",
    Holiday_Type: "Public holiday",
    Start_Date: "14 May 2025",
    End_Date: "14 May 2025",
  },
  {
    Holiday_Name: "Royal Ploughing Ceremony",
    Holiday_Type: "Public holiday",
    Start_Date: "26 may 2025",
    End_Date: "26 may 2025",
  },
  // Add more holiday objects as needed
];

const PaymentTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(holiday.length / itemsPerPage);
  const paginatedPayments = holiday.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <ButtonContent title="Annual Holiday List" />
        <div className="flex space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-40 px-4 py-2 bg-[#FFF9F9] border border-gray-300 rounded-md shadow-sm text-gray-700 font-medium"
          >
            {selectedYear ? selectedYear : "Year"}
            <ListFilter className="w-5 h-5" />
          </button>
          {isOpen && (
            <div className="absolute mt-12 right-5 w-40 bg-white border border-gray-300 rounded-md shadow-md">
              <ul>
                {years.map((year) => (
                  <li
                    key={year}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleYearSelect(year)}
                  >
                    {year}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <table className="w-full text-center border-collapse mb-4">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-6"> Holiday Name </th>
            <th className="p-6"> Holiday Type </th>
            <th className="p-6"> Start Date </th>
            <th className="p-6"> End Date </th>
          </tr>
        </thead>
        <tbody>
          {paginatedPayments.map((holiday, index) => (
            <tr key={index} className="odd:bg-gray-100 even:bg-white hover:bg-gray-200 transition-all duration-200">
              <td className="p-6">{holiday.Holiday_Name}</td>
              <td className="p-6">{holiday.Holiday_Type}</td>
              <td className="p-6">{holiday.Start_Date}</td>
              <td className="p-6">{holiday.End_Date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="flex items-center justify-between">
        <span className="text-gray-600">Total Result: {holiday.length}</span>
        <div className="flex items-center space-x-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
            className="px-2 py-1 bg-gray-200 rounded-md disabled:opacity-50"
          >
            ««
          </button>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-2 py-1 bg-gray-200 rounded-md disabled:opacity-50"
          >
            «
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage (index + 1)}
              className={`px-3 py-1 rounded-md ${currentPage === index + 1 ? "bg-indigo-600 text-white" : "bg-gray-200"}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-2 py-1 bg-gray-200 rounded-md disabled:opacity-50"
          >
            »
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(totalPages)}
            className="px-2 py-1 bg-gray-200 rounded-md disabled:opacity-50"
          >
            »»
          </button>
        </div>
      </footer>
    </div>
  );
};

export default PaymentTable;