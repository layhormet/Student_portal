import React from 'react';

interface TableProps {
  headers: string[];
  rows: (string | number)[][];
  className?: string;
  title: string;
  titleClassName?: string;
}

const Table: React.FC<TableProps> = ({ headers, rows, className, title, titleClassName }) => {
  return (
    <div className = "overflow-hidden rounded-[20px] shadow-md w-full">
      <div className = {`${titleClassName}`}>{title}</div>

      <div className="max-h-[200px] overflow-y-auto w-full">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100 sticky top-0 z-10">
            <tr className={`${className} border-b-2 border-gray-300`}>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="p-3 text-gray-600 font-semibold text-left border-b-2 border-gray-300 whitespace-nowrap min-w-max"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="p-3 text-gray-600 border-b border-gray-300"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Table;
