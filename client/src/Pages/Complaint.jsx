import React, { useState } from "react";
import { Sun, Moon } from "lucide-react"; // icons

export default function ComplaintPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen w-screen flex font-sans overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 to-black text-gray-100"
          : "bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900"
      }`}
    >
      <h3
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-2 right-12 p-3 rounded-full shadow-md transition bg-gray-600 hover:bg-gray-700 text-white cursor-pointer"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </h3>

      {/* Sidebar */}
      <div
        className={`w-1/5 min-h-screen flex items-center justify-center shadow-xl transition-colors duration-500 ${
          darkMode
            ? "bg-gradient-to-b from-gray-800 to-gray-700"
            : "bg-gradient-to-b from-gray-900 to-gray-700 text-white"
        }`}
      >
        <h2 className="text-3xl font-extrabold tracking-wide uppercase drop-shadow-md">
          Side Bar
        </h2>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 flex shadow-2xl overflow-hidden transition-colors duration-500 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        {/* Left Side - Form */}
        <div className="w-1/2 pl-10 mb-10 flex flex-col justify-center">
          <p
            className={`text-4xl font-extrabold mb-2 tracking-tight ${
              darkMode ? "text-gray-300" : "text-gray-900"
            }`}
          >
            File a Complaint
          </p>
          <p
            className={`text-base mb-6 italic leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Submit your complaint and it will be forwarded directly to the
            concerned authorities.
          </p>

          {/* Form */}
          <form className="space-y-2">
            {[
              { label: "Full Name", placeholder: "Type your full name here" },
              { label: "Email", placeholder: "add your email here " },
              { label: "Phone No", placeholder: "your phone no" },
              { label: "Incident Type", placeholder: "Select your incident" },
              { label: "Location", placeholder: "Add your location" },
            ].map((field, i) => (
              <div key={i}>
                <label
                  className={`block text-sm font-semibold mb-1 ${
                    darkMode ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  {field.label}
                </label>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className={`w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 transition ${
                    darkMode
                      ? "border-gray-600 bg-gray-800 text-gray-100 focus:ring-black-500"
                      : "border-gray-300 bg-gray-50 text-gray-900 focus:ring-black-600"
                  }`}
                />
              </div>
            ))}
            <div className="flex items-center justify-center pl-10 pr-10 ">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200 tracking-wide"
            >
              Submit Complaint
            </button></div>
          </form>
        </div>

        {/* Right Side - Info Box */}
        <div className="w-1/2 flex items-start justify-center p-10 mt-15">

          <div
            className={`w-full p-7 mr-4 ml-5 rounded-lg shadow-lg ${
              darkMode ? "bg-gray-800 text-gray-200" : "bg-gray-200 text-gray-900"
            }`}
          >
            <p className="text-lg leading-relaxed font-medium">
              ALL complaints are forwarded to the government of India and
              directly to the govt portal.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
