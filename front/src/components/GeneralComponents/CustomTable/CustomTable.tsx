import React from "react";

interface CustomTableProps {
  headers: string[];
  children: React.ReactNode;
}

const CustomTable: React.FC<CustomTableProps> = ({ headers, children }) => {
  return (
    <div className=" w-full mx-auto my-8 bg-[#f8fafc] rounded-lg py-6 px-4">
      <div className="overflow-x-auto overflow-y-auto ">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-center dark:bg-meta-4">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className=" px-4 py-4 font-medium text-black uppercase radhiumz"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center border-b">{children}</tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomTable;
