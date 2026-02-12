import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    usn: "",
    name: "",
    year1: "",
    year2: "",
    year3: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.usn.trim()) {
      newErrors.usn = "USN is required";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const year1 = parseFloat(formData.year1);
    const year2 = parseFloat(formData.year2);
    const year3 = parseFloat(formData.year3);

    if (!formData.year1 || isNaN(year1) || year1 < 0 || year1 > 100) {
      newErrors.year1 = "Enter valid percentage (0-100)";
    }

    if (!formData.year2 || isNaN(year2) || year2 < 0 || year2 > 100) {
      newErrors.year2 = "Enter valid percentage (0-100)";
    }

    if (!formData.year3 || isNaN(year3) || year3 < 0 || year3 > 100) {
      newErrors.year3 = "Enter valid percentage (0-100)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newStudent = {
      usn: formData.usn.trim(),
      name: formData.name.trim(),
      year1: parseFloat(formData.year1),
      year2: parseFloat(formData.year2),
      year3: parseFloat(formData.year3),
    };

    onAddStudent(newStudent);

    // Clear the form
    setFormData({
      usn: "",
      name: "",
      year1: "",
      year2: "",
      year3: "",
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Add New Student
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* USN Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            USN
          </label>
          <input
            type="text"
            name="usn"
            value={formData.usn}
            onChange={handleChange}
            placeholder="e.g., CS21B009"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.usn ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.usn && (
            <p className="text-red-500 text-xs mt-1">{errors.usn}</p>
          )}
        </div>

        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Student Name"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Year 1 Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            I Year %
          </label>
          <input
            type="number"
            name="year1"
            value={formData.year1}
            onChange={handleChange}
            placeholder="0-100"
            min="0"
            max="100"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.year1 ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.year1 && (
            <p className="text-red-500 text-xs mt-1">{errors.year1}</p>
          )}
        </div>

        {/* Year 2 Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            II Year %
          </label>
          <input
            type="number"
            name="year2"
            value={formData.year2}
            onChange={handleChange}
            placeholder="0-100"
            min="0"
            max="100"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.year2 ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.year2 && (
            <p className="text-red-500 text-xs mt-1">{errors.year2}</p>
          )}
        </div>

        {/* Year 3 Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            III Year %
          </label>
          <input
            type="number"
            name="year3"
            value={formData.year3}
            onChange={handleChange}
            placeholder="0-100"
            min="0"
            max="100"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.year3 ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.year3 && (
            <p className="text-red-500 text-xs mt-1">{errors.year3}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Add Student
          </button>
        </div>
      </div>
    </form>
  );
}

export default StudentForm;
