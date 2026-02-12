import { useState } from "react";
import StudentTable from "./StudentTable";
import StudentForm from "./StudentForm";
import SummaryCards from "./SummaryCards";

function StudentsPage({ students, onAddStudent, onDeleteStudent }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.usn.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Student Management
      </h2>

      {/* Summary Cards */}
      <div className="mb-6">
        <SummaryCards students={students} />
      </div>

      {/* Toggle Form Button */}
      <div className="mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className={`${
            showForm
              ? "bg-gray-500 hover:bg-gray-600"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200`}
        >
          {showForm ? "Hide Form" : "Add New Student"}
        </button>
      </div>

      {/* Conditionally Display Student Form */}
      {showForm && (
        <div className="mb-6">
          <StudentForm onAddStudent={onAddStudent} />
        </div>
      )}

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

      {/* Student Count - Only show if count > 0 */}
      {students.length > 0 && (
        <p className="text-gray-600 mb-4">
          Showing {filteredStudents.length} of {students.length} students
        </p>
      )}

      {/* Student Table */}
      <StudentTable
        students={filteredStudents}
        onDeleteStudent={onDeleteStudent}
      />
    </div>
  );
}

export default StudentsPage;
