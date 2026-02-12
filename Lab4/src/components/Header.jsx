function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome, Admin</span>
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
          A
        </div>
      </div>
    </header>
  );
}

export default Header;
