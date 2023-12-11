import React from "react";

const Table = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  // Get the keys from the first object (assuming all objects have the same keys)
  const headers = Object.keys(data[0]);

  return (
    <div className="overflow-scroll max-h-[40vh] h-[40vh]">
      <table className="table-auto w-full border-collapse">
        <thead className="sticky top-0">
          <tr className="bg-neutral-800">
            {headers.map((header, index) => (
              <th key={index} className="border-2 border-neutral-600 p-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, index) => (
                <td key={index} className="border-2 border-neutral-600 p-2">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
