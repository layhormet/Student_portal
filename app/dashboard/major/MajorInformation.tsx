import React from "react";
import Table from '../../src/components/Tables/TableForm';
import ButtonContent from "../../src/components/Button/ButtonContent";
const CoursesTable: React.FC = () => {

  const absencesHeaders = ["Major", "Batch", "Level","Admission Date", "Campus", "Status"];
  const absencesRows = [
    ["Police", "4", "Master", "11-Nov-2025", "Main","On going"],
    ["Police", "4", "Bachelor", "11-Nov-2025", "Main","On going"],
    ["Teacher", "4", "Bachelor", "11-Nov-2025", "Main","On going"],
    ["Student", "4", "Bachelor", "11-Nov-2025", "Main","On going"]
  ];

  return (
    <div className=" mt-6  font-sans gap-9">
      <ButtonContent title="Major Information"></ButtonContent>
      <Table
        headers={absencesHeaders}
        rows={absencesRows}
        title=""
        className="bg-[#C3E2FE] mb-8"
      />
    </div>
  );
};

export default CoursesTable;