import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./components/DashboardPage";
import StudentsPage from "./components/StudentsPage";
import ReportsPage from "./components/ReportsPage";
import SettingsPage from "./components/SettingsPage";
import { students } from "./data/students";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");

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
      </div>
    </div>
  );
}

export default App;
