function StudentRow({ student, onDelete }) {
  const average = ((student.year1 + student.year2 + student.year3) / 3).toFixed(
    1,
  );

  // Check if student is a top performer (average >= 85%)
  const isTopPerformer = parseFloat(average) >= 85;

  const handleDelete = () => {
    onDelete(student.usn);
  };

  return (
    <tr
      className={`border-b hover:bg-gray-50 ${
        isTopPerformer ? "bg-green-50 hover:bg-green-100" : ""
      }`}
    >
      <td className="px-6 py-4 text-gray-800 font-medium">
        {student.usn}
        {isTopPerformer && (
          <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full">
            Top
          </span>
        )}
      </td>
      <td className="px-6 py-4 text-gray-800">{student.name}</td>
      <td className="px-6 py-4 text-center text-gray-600">{student.year1}</td>
      <td className="px-6 py-4 text-center text-gray-600">{student.year2}</td>
      <td className="px-6 py-4 text-center text-gray-600">{student.year3}</td>
      <td
        className={`px-6 py-4 text-center font-semibold ${
          isTopPerformer ? "text-green-600" : "text-blue-600"
        }`}
      >
        {average}%
      </td>
      <td className="px-6 py-4 text-center">
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors duration-200"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;
