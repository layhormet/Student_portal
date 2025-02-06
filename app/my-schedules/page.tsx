"use client";

import React from "react";
import ButtonContent from "../src/components/Button/ButtonContent";

const SchedulePage: React.FC = () => {
  const scheduleData = [
    {
      time: "8:00-10:00",
      classes: [
        {
          day: "Mon",
          subject: "Economics",
          teacher: "Mr. Bora",
          room: "08",
          canceled: false,
        },
        {
          day: "Tue",
          subject: "Economics",
          teacher: "Mr. Bora",
          room: "013",
          canceled: false,
        },
        {
          day: "Wed",
          subject: "Computer",
          teacher: "Mr. Dan na",
          room: "07",
          canceled: false,
        },
        {
          day: "Thu",
          subject: "Math",
          teacher: "Mr. Sok na",
          room: "012",
          canceled: false,
        },
        {
          day: "Fri",
          subject: "Economics",
          teacher: "Mr. Bora",
          room: "07",
          canceled: false,
        },
        {
          day: "Sun",
          subject: "No Class",
          teacher: "",
          room: "",
          canceled: false,
        },
      ],
    },
    {
      time: "10:00-12:00",
      classes: [
        {
          day: "Mon",
          subject: "Law",
          teacher: "Mr. Roeun",
          room: "08",
          canceled: false,
        },
        {
          day: "Tue",
          subject: "Economics",
          teacher: "Mr. Bora",
          room: "01",
          canceled: false,
        },
        {
          day: "Wed",
          subject: "Computer",
          teacher: "Mr. Dan na",
          room: "07",
          canceled: true,
        },
        {
          day: "Thu",
          subject: "Economics",
          teacher: "Mr. Bora",
          room: "012",
          canceled: false,
        },
        {
          day: "Fri",
          subject: "No Class",
          teacher: "",
          room: "",
          canceled: false,
        },
        {
          day: "Sun",
          subject: "Economics",
          teacher: "Mr. Bora",
          room: "08",
          canceled: false,
        },
      ],
    },
  ];

  return (
    <div className="p-3 max-w-5x mx-auto rounded-lg">
      <ButtonContent title="My Schedules"/>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm bg-[#eff5fb] p-4  shadow-md">
        <div className="col-span-2 flex justify-between">
          <div>
            <p>Program: (Bachelor's Degree)</p>
            <p>Batch: V</p>
            <p>Years: 2, Semester: I</p>
          </div>
          <div>
            <p>Major: Law</p>
            <p>Weekday: Monday - Friday</p>
            <p>Stated: 12-Dec-2024Finished: 20-Apr-2024</p>
          </div>
        </div>
        <div className="col-span-2 mt-4 text-center">
          <h2 className="text-xl font-bold text-[#1b0d6c]">
            Academic Year: 2024-2025
          </h2>
        </div>
      </div>
      <div className="met-4 overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm text-center">
          <thead>
            <tr className="bg-[#a9bfdc]">
              <th className="border border-[#101010] p-2">Time</th>
              <th className="border border-[#101010] p-2">Mon</th>
              <th className="border border-[#101010] p-2">Tue</th>
              <th className="border border-[#101010] p-2">Wed</th>
              <th className="border border-[#101010] p-2">Thu</th>
              <th className="border border-[#101010] p-2">Fri</th>
              <th className="border border-[#101010] p-2">Sun</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((slot, slotIndex) => (
              <tr key={`${slot.time}-${slotIndex}`}>
                <td className="border border-[#101010] p-2">{slot.time}</td>
                {slot.classes.map((cls, classIndex) => (
                  <td
                    key={`${slot.time}-${cls.day}-${classIndex}`}
                    className={`border border-[#101010] p-2  ${
                      cls.subject === "No Class" ? "text-red-600" : ""
                    }`}
                  >
                    {cls.subject} <br />
                    {cls.teacher} <br />
                    {cls.room}
                    {cls.canceled && (
                      <>
                        <br />
                        <div className="flex justify-end">
                          {" "}
                          <span className="text-red-600">
                            Canceled
                          </span>
                        </div>
                      </>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-sm">
        <h3 className="font-bold">
          Noted <span className="text-red-500">*</span>
        </h3>
        <ul>
          <li>Semester Exam: 12-Dec-2025</li>
          <li>Semester Result: 20-Dec-2025</li>
          <li>Resist Exam: 22-Dec-2025</li>
          <li>New Semester: 25-Dec-2025</li>
        </ul>
      </div>
    </div>
  );
};

export default SchedulePage;
