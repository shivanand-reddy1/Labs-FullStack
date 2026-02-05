import StudentRow from "./StudentRow";

function StudentTable({ students }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-gray-600 font-semibold">
              USN
            </th>
            <th className="px-6 py-4 text-left text-gray-600 font-semibold">
              Name
            </th>
            <th className="px-6 py-4 text-center text-gray-600 font-semibold">
              Year 1
            </th>
            <th className="px-6 py-4 text-center text-gray-600 font-semibold">
              Year 2
            </th>
            <th className="px-6 py-4 text-center text-gray-600 font-semibold">
              Year 3
            </th>
            <th className="px-6 py-4 text-center text-gray-600 font-semibold">
              Average
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow key={student.usn} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
