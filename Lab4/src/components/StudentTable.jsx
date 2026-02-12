import StudentRow from "./StudentRow";

function StudentTable({ students, onDeleteStudent }) {
  // Conditional rendering: Show message when list is empty
  if (students.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <p className="text-gray-500 text-lg">No students available</p>
        <p className="text-gray-400 text-sm mt-2">
          Add a student using the form above
        </p>
      </div>
    );
  }

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
            <th className="px-6 py-4 text-center text-gray-600 font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.usn}
              student={student}
              onDelete={onDeleteStudent}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
