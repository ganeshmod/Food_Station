import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function SignUp() {
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adharNumber: "",
    dateOfBirth: "",
    Role: "",
    image: null,
  });
  const handleChangeSignUp = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (!file) {
      return;
    }
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
    setPreview(URL.createObjectURL(file));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg border border-[#5c264c] p-8">
        <h1 className="text-2xl font-bold text-[#5c264c] text-center">
          Create Account
        </h1>
        <p className="text-sm text-slate-500 text-center mt-1 mb-6">
          Join Food Station as a team member
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image upload */}
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="image" className="cursor-pointer">
              <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#5c264c] overflow-hidden flex items-center justify-center bg-gray-100">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-[#5c264c] text-xs text-center px-2">
                    Upload Photo
                  </span>
                )}
              </div>
            </label>

            <input
              id="image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChangeSignUp}
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              onChange={handleChangeSignUp}
              value={formData.email}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Phone Number
            </label>
            <input
              name="phone"
              placeholder="10-digit mobile number"
              value={formData.phone}
              onChange={handleChangeSignUp}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
            />
          </div>

          {/* Aadhaar */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Aadhaar Card Number
            </label>
            <input
              type="text"
              name="adharNumber"
              placeholder="12-digit Aadhaar number"
              value={formData.adharNumber}
              onChange={handleChangeSignUp}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
            />
          </div>

          {/* DOB */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Date of Birth
            </label>

            <DatePicker
              selected={
                formData.dateOfBirth ? new Date(formData.dateOfBirth) : null
              }
              onChange={(date) =>
                handleChangeSignUp({
                  target: {
                    name: "dateOfBirth",
                    value: date ? date.toISOString().split("T")[0] : "",
                  },
                })
              }
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YYYY"
              maxDate={new Date()}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              wrapperClassName="w-full"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] text-[#5c264c]"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Role
            </label>
            <select
              name="Role"
              value={formData.Role}
              onChange={handleChangeSignUp}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#5c264c] bg-white text-[#5c264c]"
            >
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="chef">Chef</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5c264c] hover:bg-[#4a1e3d] text-white font-medium rounded-lg py-2.5 mt-2 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
