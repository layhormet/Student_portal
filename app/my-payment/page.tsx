"use client";
import React, { useState, useRef } from "react";
import ButtonContent from "../src/components/Button/ButtonContent";
import { ListFilter, CalendarDays } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Payment {
  term: string;
  major: string;
  level: string;
  campus: string;
  method: string;
  amount: string;
  paymentDate: string;
  status: string;
}

const payments: Payment[] = [
  {
    term: "Semester I",
    major: "Law",
    level: "Bachelor",
    campus: "Campus II",
    method: "Cash",
    amount: "$580",
    paymentDate: "24-Apr-2024",
    status: "Paid",
  },
  {
    term: "Semester II",
    major: "Math",
    level: "Master",
    campus: "Campus I",
    method: "Cash",
    amount: "$0",
    paymentDate: "24-Apr-2024",
    status: "Unpaid",
  },
  {
    term: "Semester II",
    major: "Computer",
    level: "Bachelor",
    campus: "Campus III",
    method: "N/A",
    amount: "$0",
    paymentDate: "N/A",
    status: "Unpaid",
  },
  {
    term: "Semester III",
    major: "History",
    level: "Bachelor",
    campus: "Campus I",
    method: "Card",
    amount: "$450",
    paymentDate: "10-Aug-2024",
    status: "Paid",
  },
  {
    term: "Semester III",
    major: "History",
    level: "Bachelor",
    campus: "Campus I",
    method: "Card",
    amount: "$450",
    paymentDate: "10-Aug-2024",
    status: "Paid",
  },
  {
    term: "Semester IV",
    major: "Science",
    level: "Bachelor",
    campus: "Campus II",
    method: "Card",
    amount: "$670",
    paymentDate: "15-Dec-2024",
    status: "Paid",
  },
  {
    term: "Semester IV",
    major: "Science",
    level: "Bachelor",
    campus: "Campus II",
    method: "Card",
    amount: "$670",
    paymentDate: "15-Dec-2024",
    status: "Paid",
  },
];

const PaymentTable: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const startDateRef = useRef<any>(null);
  const endDateRef = useRef<any>(null);

  const totalPages = Math.ceil(payments.length / itemsPerPage);
  const paginatedPayments = payments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [isOpen, setIsOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);
  const [filterTerm, setFilterTerm] = useState(" ");
  const [filterMajor, setFilterMajor] = useState(" ");
  const [filterLevel, setFilterLevel] = useState(" ");

  const handleYearSelect = (year: number) => {
    setSelectedYear(year);
    setIsOpen(false); // Close the dropdown after selection
    // Add any filtering logic you want here based on the selected year
  };

  const years = [2023, 2024, 2025, 2026, 2027];

  
  return (
    <div className="p-6">
      <div className="flex justify-between mb-1">
        <ButtonContent title="Academic History" />
        <div className="mb-4 flex space-x-4">
          <div className="relative w-40">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              ref={startDateRef}
              className="w-full px-4 py-2 bg-[#FFF9F9] border border-gray-300 rounded-md shadow-sm text-black placeholder-black font-sm"
              placeholderText = "Start Date"
            />
            <CalendarDays
              className="absolute right-3 top-2 text-black cursor-pointer"
              onClick={() => startDateRef.current?.setOpen(true)}
            />
          </div>
          <div className="relative w-40">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              ref={endDateRef}
              className="w-full px-4 py-2 bg-[#FFF9F9] border border-gray-300 rounded-md shadow-sm text-black placeholder-black font-sm"
              placeholderText="End Date"
            />
            <CalendarDays
              className="absolute right-3 top-2 text-black cursor-pointer"
              onClick={() => endDateRef.current?.setOpen(true)}
            />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between w-40 px-4 py-2 bg-[#FFF9F9] border border-gray-300 rounded-md shadow-sm text-gray-700 font-medium"
          >
            {selectedYear ? selectedYear : "Year"}
            <ListFilter className="w-5 h-5"/>
          </button>

          {isOpen && (
            <div className = "absolute mt-12 right-5 w-40 items-center bg-white border border-gray-300 rounded-md shadow-md">
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

      <table className="min-w-full border-collapse mb-6">
        <thead>
          <tr className="bg-[#1b0d6c]">
            <th className=" text-white px-6 py-6 ">Term</th>
            <th className=" text-white px-6 py-6 ">Major</th>
            <th className=" text-white px-6 py-6 ">Level</th>
            <th className=" text-white px-6 py-6 ">Campus</th>
            <th className=" text-white px-6 py-6 ">Method</th>
            <th className=" text-white px-6 py-6 ">Amount</th>
            <th className=" text-white px-6 py-6 ">Payment Date</th>
            <th className=" text-white px-6 py-6 ">Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPayments.map((payment, index) => {
            const isPaid = payment.status.toLowerCase() === "paid"; // Adjust this condition based on your status values
            return (
              <tr key={index} className="hover:bg-gray-100">
                <td className="text-center">{payment.term}</td>
                <td className="text-center">{payment.major}</td>
                <td className="text-center">{payment.level}</td>
                <td className="text-center">{payment.campus}</td>
                <td className="text-center">{payment.method}</td>
                <td className="text-center">{payment.amount}</td>
                <td className="text-center">{payment.paymentDate}</td>
                <td className="text-center">
                  <div
                    className={`rounded-full border-[0.5px] text-center ${
                      isPaid
                        ? "text-green-500 border-green-500"
                        : "text-red-500 border-red-500"
                    } p-1`} // Set a fixed width and reduced vertical padding
                  >
                    {payment.status}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <footer className="flex items-center justify-between">
        <span className="text-gray-600">Total Result: {payments.length}</span>
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
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
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
