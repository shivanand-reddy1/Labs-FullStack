import { useState } from "react";

function SettingsPage() {
  const [settings, setSettings] = useState({
    darkMode: false,
    emailNotifications: true,
    language: "English",
    showGrades: true,
    autoSave: true,
  });

  const [saved, setSaved] = useState(false);

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  };

  const handleLanguageChange = (e) => {
    setSettings((prev) => ({ ...prev, language: e.target.value }));
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Settings</h2>

      <div className="max-w-2xl space-y-6">
        {/* Appearance */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Appearance
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700">Dark Mode</p>
                <p className="text-sm text-gray-500">
                  Enable dark theme for the dashboard
                </p>
              </div>
              <button
                onClick={() => handleToggle("darkMode")}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.darkMode ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    settings.darkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700">Language</p>
                <p className="text-sm text-gray-500">
                  Select your preferred language
                </p>
              </div>
              <select
                value={settings.language}
                onChange={handleLanguageChange}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Kannada</option>
                <option>Tamil</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Notifications
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700">Email Notifications</p>
                <p className="text-sm text-gray-500">
                  Receive email updates about student performance
                </p>
              </div>
              <button
                onClick={() => handleToggle("emailNotifications")}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.emailNotifications ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    settings.emailNotifications
                      ? "translate-x-6"
                      : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Display */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Display Options
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700">Show Grades</p>
                <p className="text-sm text-gray-500">
                  Display letter grades alongside percentages
                </p>
              </div>
              <button
                onClick={() => handleToggle("showGrades")}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.showGrades ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    settings.showGrades ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700">Auto Save</p>
                <p className="text-sm text-gray-500">
                  Automatically save changes
                </p>
              </div>
              <button
                onClick={() => handleToggle("autoSave")}
                className={`w-12 h-6 rounded-full transition-colors ${
                  settings.autoSave ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    settings.autoSave ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Settings
          </button>
          {saved && (
            <span className="text-green-600 font-medium">
              ✓ Settings saved successfully!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
