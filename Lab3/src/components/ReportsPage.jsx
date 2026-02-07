function ReportsPage({ students }) {
  // Calculate statistics
  const totalStudents = students.length;

  const getAverage = (student) =>
    (student.year1 + student.year2 + student.year3) / 3;

  const averageMarks = (
    students.reduce((acc, s) => acc + getAverage(s), 0) / totalStudents
  ).toFixed(1);

  const highestAvg = Math.max(...students.map(getAverage)).toFixed(1);
  const lowestAvg = Math.min(...students.map(getAverage)).toFixed(1);

  // Grade distribution
  const gradeDistribution = {
    A: students.filter((s) => getAverage(s) >= 90).length,
    B: students.filter((s) => getAverage(s) >= 80 && getAverage(s) < 90).length,
    C: students.filter((s) => getAverage(s) >= 70 && getAverage(s) < 80).length,
    D: students.filter((s) => getAverage(s) >= 60 && getAverage(s) < 70).length,
    F: students.filter((s) => getAverage(s) < 60).length,
  };

  // Year-wise average
  const year1Avg = (
    students.reduce((acc, s) => acc + s.year1, 0) / totalStudents
  ).toFixed(1);
  const year2Avg = (
    students.reduce((acc, s) => acc + s.year2, 0) / totalStudents
  ).toFixed(1);
  const year3Avg = (
    students.reduce((acc, s) => acc + s.year3, 0) / totalStudents
  ).toFixed(1);

  // Top 3 performers
  const topPerformers = [...students]
    .sort((a, b) => getAverage(b) - getAverage(a))
    .slice(0, 3);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Reports</h2>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-gray-500 text-sm">Class Average</h3>
          <p className="text-2xl font-bold text-blue-600">{averageMarks}%</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-gray-500 text-sm">Highest Average</h3>
          <p className="text-2xl font-bold text-green-600">{highestAvg}%</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-gray-500 text-sm">Lowest Average</h3>
          <p className="text-2xl font-bold text-red-600">{lowestAvg}%</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-gray-500 text-sm">Total Students</h3>
          <p className="text-2xl font-bold text-gray-800">{totalStudents}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Grade Distribution */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Grade Distribution
          </h3>
          <div className="space-y-3">
            {Object.entries(gradeDistribution).map(([grade, count]) => (
              <div key={grade} className="flex items-center gap-4">
                <span className="w-8 font-semibold text-gray-700">{grade}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-6">
                  <div
                    className={`h-6 rounded-full flex items-center justify-end pr-2 text-white text-sm ${
                      grade === "A"
                        ? "bg-green-500"
                        : grade === "B"
                          ? "bg-blue-500"
                          : grade === "C"
                            ? "bg-yellow-500"
                            : grade === "D"
                              ? "bg-orange-500"
                              : "bg-red-500"
                    }`}
                    style={{
                      width: `${Math.max((count / totalStudents) * 100, 10)}%`,
                    }}
                  >
                    {count}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Year-wise Performance */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Year-wise Class Average
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="text-gray-700">Year 1</span>
              <span className="font-bold text-blue-600">{year1Avg}%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="text-gray-700">Year 2</span>
              <span className="font-bold text-blue-600">{year2Avg}%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <span className="text-gray-700">Year 3</span>
              <span className="font-bold text-blue-600">{year3Avg}%</span>
            </div>
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            🏆 Top 3 Performers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topPerformers.map((student, index) => (
              <div
                key={student.usn}
                className={`p-4 rounded-lg border-2 ${
                  index === 0
                    ? "border-yellow-400 bg-yellow-50"
                    : index === 1
                      ? "border-gray-400 bg-gray-50"
                      : "border-orange-400 bg-orange-50"
                }`}
              >
                <div className="text-2xl mb-2">
                  {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
                </div>
                <h4 className="font-semibold text-gray-800">{student.name}</h4>
                <p className="text-gray-600 text-sm">{student.usn}</p>
                <p className="text-blue-600 font-bold mt-2">
                  {getAverage(student).toFixed(1)}%
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
