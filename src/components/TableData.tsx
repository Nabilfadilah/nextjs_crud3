import Link from "next/link";
import React from "react";

const TableData = () => {
  return (
    <div>
      <table className="table table-zebra">
        <thead className="text-sm text-gray-700 uppercase bg-gray-50">
          <tr>
            <th className="py-3 px-6">No</th>
            <th className="py-3 px-6">Name</th>
            <th className="py-3 px-6">Email</th>
            <th className="py-3 px-6">Phone Number</th>
            <th className="py-3 px-6">Created At</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr key="" className="bg-white border-b text-black">
            <td className="py-3 px-6">1</td>
            <td className="py-3 px-6">Nabila</td>
            <td className="py-3 px-6">nabil@gmail.com</td>
            <td className="py-3 px-6">03020</td>
            <td className="py-3 px-6">Des 19</td>
            <td className="flex justify-center gap-1 py-3">
              <Link href={`/employee/edit/`} className="btn btn-info">
                Edit
              </Link>
              | Delete
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
