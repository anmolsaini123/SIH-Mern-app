import React, { useState, useEffect } from "react";
import { Meteors } from "@/components/magicui/meteors";
import { Sun, Moon } from "lucide-react";
import { FaGithub, FaMicrosoft, FaGoogle } from "react-icons/fa";
import { useAuth } from "../context/AuthContext"; // 👈 auth context import

export default function RegisterPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [form, setForm] = useState({
    username: "",
    email: "",
    fullName: "",
    password: "",
    role: "user",
  });
  const [error, setError] = useState(null);

  const { register } = useAuth(); // 👈 assuming you added register in AuthContext

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await register(form); // 👈 send full form
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="flex h-screen w-screen bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
      <Meteors />

      <h3
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </h3>

      {/* Left Side (Form) */}
      <div className="w-1/2 flex flex-col justify-center px-12">
        <h1 className="text-2xl font-semibold mb-8">
          Create your account <br />
          <span className="italic font-medium">on travel safe</span>
        </h1>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent focus:outline-none py-1"
          />
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent focus:outline-none py-1"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent focus:outline-none py-1"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent focus:outline-none py-1"
          />
        </div>

        {/* Role */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent focus:outline-none py-1"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 text-white py-2 rounded mt-2 hover:bg-green-700 transition"
        >
          Register
        </button>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
          <span className="px-2 text-sm text-gray-500 dark:text-gray-400">
            or
          </span>
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Already have an account? Sign in
        </button>

        <div className="flex justify-center items-center space-x-6 mt-8">
          <FaGithub size={28} className="cursor-pointer hover:scale-110 transition" />
          <FaMicrosoft size={28} className="cursor-pointer hover:scale-110 transition" />
          <FaGoogle size={28} className="cursor-pointer hover:scale-110 transition" />
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="w-2/3 flex items-center justify-center">
        <img
          src="./image.jpg"
          alt="Travel"
          className="w-3/4 h-3/4 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
