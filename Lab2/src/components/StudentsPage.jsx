import { useState } from "react";
import StudentTable from "./StudentTable";

function StudentsPage({ students }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.usn.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Students</h2>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or USN..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Student Count */}
      <p className="text-gray-600 mb-4">
        Showing {filteredStudents.length} of {students.length} students
      </p>

      {/* Student Table */}
      <StudentTable students={filteredStudents} />
    </div>
  );
}

export default StudentsPage;
