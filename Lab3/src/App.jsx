import { useState, useCallback } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./components/DashboardPage";
import StudentsPage from "./components/StudentsPage";
import ReportsPage from "./components/ReportsPage";
import SettingsPage from "./components/SettingsPage";
import { students as initialStudents } from "./data/students";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [students, setStudents] = useState(initialStudents);

  const handleReload = useCallback(async () => {
    // Dynamically re-import the students module with cache-busting
    const timestamp = Date.now();
    try {
      const module = await import(
        /* @vite-ignore */ `./data/students.js?t=${timestamp}`
      );
      setStudents([...module.students]);
      console.log("Students reloaded:", module.students.length, "entries");
    } catch (error) {
      console.error("Reload failed:", error);
      // Fallback: re-import without cache busting
      const { students } = await import("./data/students.js");
      setStudents([...students]);
    }
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <DashboardPage students={students} />;
      case "Students":
        return <StudentsPage students={students} />;
      case "Reports":
        return <ReportsPage students={students} />;
      case "Settings":
        return <SettingsPage />;
      default:
        return <DashboardPage students={students} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      <div className="flex-1">
        <Header />
        <main className="p-6">{renderPage()}</main>

        {/* Reload Button */}
        <div className="fixed bottom-6 right-6">
          <button
            onClick={handleReload}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Reload
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
