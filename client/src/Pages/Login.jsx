import React, { useState, useEffect } from "react";
import { Meteors } from "@/components/magicui/meteors";
import { Sun, Moon } from "lucide-react";
import { FaGithub, FaMicrosoft, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSignIn = () => {
    console.log("Sign in clicked!");
    //!Api call kardenge yaha backend auth se   
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

      
      <div className="w-1/2 flex flex-col justify-center px-12">
        <h1 className="text-2xl font-semibold mb-8">
          Welcome back to <br />
          <span className="italic font-medium">the travel safe</span>
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent focus:outline-none py-1"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border-b border-gray-400 dark:border-gray-600 bg-transparent focus:outline-none py-1"
          />
        </div>

        <button
          onClick={handleSignIn}
          className="w-full bg-red-600 text-white py-2 rounded mt-2 hover:bg-red-700 transition"
        >
          Sign in
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
          <span className="px-2 text-sm text-gray-500 dark:text-gray-400">
            or
          </span>
          <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600"></div>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Sign up
        </button>

        <div className="flex justify-center items-center space-x-6 mt-8">
          <FaGithub size={28} className="cursor-pointer hover:scale-110 transition" />
          <FaMicrosoft size={28} className="cursor-pointer hover:scale-110 transition" />
          <FaGoogle size={28} className="cursor-pointer hover:scale-110 transition" />
        </div>
      </div>
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
