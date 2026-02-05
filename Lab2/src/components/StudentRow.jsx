function StudentRow({ student }) {
  const average = ((student.year1 + student.year2 + student.year3) / 3).toFixed(
    1,
  );

  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4 text-gray-800 font-medium">{student.usn}</td>
      <td className="px-6 py-4 text-gray-800">{student.name}</td>
      <td className="px-6 py-4 text-center text-gray-600">{student.year1}</td>
      <td className="px-6 py-4 text-center text-gray-600">{student.year2}</td>
      <td className="px-6 py-4 text-center text-gray-600">{student.year3}</td>
      <td className="px-6 py-4 text-center font-semibold text-blue-600">
        {average}
      </td>
    </tr>
  );
}

export default StudentRow;
