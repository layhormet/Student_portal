"use client";
import { useState } from "react";
import Image from "next/image";
import ButtonContent from "../src/components/Button/ButtonContent";

export default function LeaveRequestForm() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [leaveType, setLeaveType] = useState("Full day");
  const [leaveDays, setLeaveDays] = useState(0);
  const [reason, setReason] = useState("");

  const calculateLeaveDays = (start: string, end: string) => {
    if (start && end) {
      const startD = new Date(start);
      const endD = new Date(end);
      const days = (endD.getTime() - startD.getTime()) / (1000 * 3600 * 24) + 1;
      setLeaveDays(days > 0 ? days : 0);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <ButtonContent title="Request For Leaves" />
      </div>

      <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg border">
        {/* Form Container */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          {/* Left Section */}
          <div className="flex-1 space-y-6">
            {/* Date Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold">Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    calculateLeaveDays(e.target.value, endDate);
                  }}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                    calculateLeaveDays(startDate, e.target.value);
                  }}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Leave Type & Days */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold">Leave Type</label>
                <select
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500"
                >
                  <option>Full day</option>
                  <option>Half day</option>
                  <option>Medical leave</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold">Leave Days</label>
                <input
                  type="text"
                  value={leaveDays}
                  readOnly
                  className="w-full p-2 border rounded-md bg-gray-100"
                />
              </div>
            </div>

            {/* Reason Input */}
            <div>
              <label className="block text-sm font-semibold">Reason</label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
                rows={4}
                placeholder="Enter your reason..."
              />
            </div>
          </div>

          <div className="flex flex-col items-center mt-6 md:mt-0">
            <Image
              src="/images/logo.png"
              alt="Student"
              width={120}
              height={120}
              className="rounded-full border p-1 shadow-md"
            />
            <p className="mt-2 text-lg font-medium">Student Name</p>
          </div>
        </div>

        <div className="flex justify-end mt-8 space-x-4">
          <button className="px-6 py-2 border rounded-md text-gray-600 hover:bg-gray-200 transition">
            Cancel
          </button>
          <button className="px-6 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}



