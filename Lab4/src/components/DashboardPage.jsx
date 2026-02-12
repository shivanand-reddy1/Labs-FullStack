import SummaryCards from "./SummaryCards";
import StudentTable from "./StudentTable";

function DashboardPage({ students, onDeleteStudent }) {
  return (
    <div>
      {/* Summary Cards */}
      <div className="mb-8">
        <SummaryCards students={students} />
      </div>

      {/* Student Table */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Student Marks Overview
        </h2>
        <StudentTable students={students} onDeleteStudent={onDeleteStudent} />
      </div>
    </div>
  );
}

export default DashboardPage;
