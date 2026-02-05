function SummaryCard({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
      <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
    </div>
  );
}

export default SummaryCard;
