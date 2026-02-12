import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./components/DashboardPage";
import StudentsPage from "./components/StudentsPage";
import ReportsPage from "./components/ReportsPage";
import SettingsPage from "./components/SettingsPage";
import { initialStudents } from "./data/initialStudents";

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [students, setStudents] = useState(initialStudents);

  // Add a new student
  const handleAddStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  // Delete a student by USN
  const handleDeleteStudent = (usn) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.usn !== usn),
    );
  };

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <DashboardPage
            students={students}
            onDeleteStudent={handleDeleteStudent}
          />
        );
      case "Students":
        return (
          <StudentsPage
            students={students}
            onAddStudent={handleAddStudent}
            onDeleteStudent={handleDeleteStudent}
          />
        );
      case "Reports":
        return <ReportsPage students={students} />;
      case "Settings":
        return <SettingsPage />;
      default:
        return (
          <DashboardPage
            students={students}
            onDeleteStudent={handleDeleteStudent}
          />
        );
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
