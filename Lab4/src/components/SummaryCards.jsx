function SummaryCards({ students }) {
  // Derive all values from state
  const totalStudents = students.length;

  const averageMarks =
    students.length > 0
      ? (
          students.reduce(
            (acc, s) => acc + (s.year1 + s.year2 + s.year3) / 3,
            0,
          ) / students.length
        ).toFixed(1)
      : 0;

  const topPerformers = students.filter((student) => {
    const avg = (student.year1 + student.year2 + student.year3) / 3;
    return avg >= 85;
  }).length;

  const summaryData = [
    {
      title: "Total Students",
      value: totalStudents,
      color: "bg-blue-500",
      icon: "👨‍🎓",
    },
    {
      title: "Average Marks",
      value: `${averageMarks}%`,
      color: "bg-green-500",
      icon: "📊",
    },
    {
      title: "Top Performers",
      value: topPerformers,
      color: "bg-yellow-500",
      icon: "🏆",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {summaryData.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-6 flex items-center gap-4"
        >
          <div
            className={`${card.color} w-14 h-14 rounded-full flex items-center justify-center text-2xl`}
          >
            {card.icon}
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">
              {card.title}
            </h3>
            <p className="text-3xl font-bold text-gray-800">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
