import SummaryCard from "./SummaryCard";
import StudentTable from "./StudentTable";

function DashboardPage({ students }) {
  // Calculate summary data dynamically
  const totalStudents = students.length;
  const averageMarks = (
    students.reduce((acc, s) => acc + (s.year1 + s.year2 + s.year3) / 3, 0) /
    students.length
  ).toFixed(1);
  const topPerformer = students.reduce((top, s) => {
    const avg = (s.year1 + s.year2 + s.year3) / 3;
    const topAvg = (top.year1 + top.year2 + top.year3) / 3;
    return avg > topAvg ? s : top;
  }, students[0]).name;

  const summaryData = [
    { title: "Total Students", value: totalStudents },
    { title: "Average Marks", value: averageMarks },
    { title: "Top Performer", value: topPerformer },
  ];

  return (
    <div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {summaryData.map((card, index) => (
          <SummaryCard key={index} title={card.title} value={card.value} />
        ))}
      </div>

      {/* Student Table */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Student Marks Overview
        </h2>
        <StudentTable students={students} />
      </div>
    </div>
  );
}

export default DashboardPage;
