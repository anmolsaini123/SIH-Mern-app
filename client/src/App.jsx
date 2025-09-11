import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Regester";
import HomePage from "./Pages/Homepage";
import ProtectedRoute from "./context/ProtectedRoute";
import ComplaintPage from "./Pages/Complaint";
import FullMap from "./Pages/fullMap";
export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/" element={<Navigate to="/HomePage" replace />} />
      <Route
        path="/HomePage"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/complaint"
        element={
          <ProtectedRoute>
            <ComplaintPage />
          </ProtectedRoute>
        }
      />
      <Route
          path="/full-map"
          element={
            <ProtectedRoute>
              <FullMap />
            </ProtectedRoute>
          }
        />
    </Routes>
  );
}
