function Sidebar({ activePage, onPageChange }) {
  const menuItems = [
    { name: "Dashboard", icon: "📊" },
    { name: "Students", icon: "👨‍🎓" },
    { name: "Reports", icon: "📈" },
    { name: "Settings", icon: "⚙️" },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <div className="text-xl font-bold mb-8 px-4">🎓 EduPortal</div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => onPageChange(item.name)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activePage === item.name
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
