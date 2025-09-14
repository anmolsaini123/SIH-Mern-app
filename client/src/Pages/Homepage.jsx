import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api'
import MapComponent from "../components/map";

const HomePage = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch incidents
  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const res = await api.get("/api/incidents");
        setIncidents(res.data || []);
      } catch (err) {
        console.error("Error fetching incidents:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchIncidents();
  }, []);

  return (
    <div className="flex min-h-screen min-w-screen bg-gray-50 font-sans text-black">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 p-5">
        <h2 className="text-xl font-bold text-blue-600 mb-8">SafeLink</h2>
        <ul className="space-y-2">
          <li className="px-3 py-2 rounded-md cursor-pointer bg-blue-600 text-white">
            Dashboard
          </li>
          <li
            onClick={() => navigate("/complaint")}
            className="px-3 py-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            Report Incident
          </li>
          <li className="px-3 py-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
            Live Alerts
          </li>
          <li className="px-3 py-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
            Safe Routes
          </li>
          <li className="px-3 py-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
            Emergency Contacts
          </li>
          <li className="px-3 py-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
            Community Support
          </li>
          <li className="px-3 py-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
            Settings
          </li>
          <li
            onClick={() => navigate("/login")}
            className="px-3 py-2 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
          >
            Logout
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Topbar */}
        <header className="flex justify-between items-center mb-8">
          <span className="text-2xl font-bold">Hey, Vansh</span>
          <div className="flex items-center gap-3 max-w-lg w-full">
            <input
              type="text"
              placeholder="Search incidents, alerts, or safe routes..."
              className="flex-1 px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="px-4 py-2 rounded-full bg-blue-700 text-white hover:bg-blue-800">
              Search
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">🔔</span>
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQFLncf9MjIMcg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723647237095?e=1760572800&v=beta&t=e_f0m5uL9aZn9Vo6Fh3HPm-Ds50PAO14GdvEBi3RV_A"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex justify-between items-center bg-blue-50 p-6 rounded-xl mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-3">Stay Safe, Stay Connected</h1>
            <p className="text-gray-600 mb-4 text-sm">
              From real-time safety alerts to easy incident reporting and a supportive
              community network, <br />
              Our platform ensures that you are never alone — your digital safety
              companion, ready to protect you wherever you are.
            </p>
            <div className="flex gap-3">
              <button
                className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => navigate("/report")}
              >
                Get Started
              </button>
              <button className="px-5 py-2 rounded-lg border border-blue-600 text-blue-600 bg-white hover:bg-blue-50">
                Learn More
              </button>
            </div>
          </div>
          <img src="1.png" alt="safety" className="w-48 rounded-lg" />
        </section>

        {/* Tools Section */}
        <section className="my-10">
          <h2 className="text-2xl font-bold mb-1">Powerful Safety Tools</h2>
          <p className="text-sm text-gray-500 mb-6">Everything you need for peace of mind</p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: "📌", title: "Report Incident", desc: "Submit detailed reports with media and location." },
              { icon: "🔔", title: "Live Safety Alerts", desc: "Receive real-time notifications and updates." },
              { icon: "📞", title: "Emergency Contacts", desc: "Quick-dial trusted contacts and local services." },
              { icon: "🛣️", title: "Safe Routes", desc: "Explore recommended routes based on current data." },
            ].map((tool, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 mb-3 text-lg">
                  {tool.icon}
                </div>
                <h3 className="font-semibold">{tool.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{tool.desc}</p>
              </div>
            ))}
          </div>
        </section>

       
       <section className="mb-10">
          <h2 className="text-xl font-bold">Interactive Map Preview</h2>
          <p className="text-gray-600 mb-4 text-sm">See safety insights around you</p>
          <div className="bg-blue-50 p-5 rounded-xl text-center">
            {loading ? (
              <div>Loading map...</div>
            ) : (
              <MapComponent incidents={incidents} center={[20.5937, 78.9629]} zoom={5} />
            )}
            <button
              onClick={() => navigate("/full-map")}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Open Full Map
            </button>
          </div>
        </section>

        {/* Alerts Section */}
        <section className="bg-white shadow-md rounded-xl p-6 mb-10">
          <h2 className="text-lg font-bold">Nearby Alerts</h2>
          <p className="text-sm text-gray-500 mb-4">Stay updated with real-time incident reports</p>
          <div className="space-y-3">
            {loading && <div className="text-gray-400 italic">Loading alerts...</div>}
            {!loading && incidents.length === 0 && (
              <div className="text-gray-400 italic">No incidents reported yet</div>
            )}
            {!loading &&
              incidents.slice(0, 3).map((inc) => (
                <div
                  key={inc._id}
                  className={`flex justify-between items-center px-4 py-3 rounded-lg cursor-pointer ${
                    inc.status === "Resolved"
                      ? "bg-green-50 border-l-4 border-green-500"
                      : inc.type === "Road Closure"
                      ? "bg-red-50 border-l-4 border-red-500"
                      : "bg-orange-50 border-l-4 border-orange-400"
                  }`}
                >
                  <div>
                    <div className="font-semibold">{inc.type}</div>
                    <div className="text-xs text-gray-500">{inc.status || "Pending"}</div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(inc.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Community Section */}
        <section className="bg-gray-100 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-center mb-2">Trusted by the Community</h2>
          <p className="text-gray-600 text-center mb-8">Growing network of vigilant users</p>

          <div className="flex justify-center gap-6 flex-wrap mb-10">
            {[
              { num: "120,482", label: "ACTIVE USERS" },
              { num: "58,930", label: "REPORTS SUBMITTED" },
              { num: "44,715", label: "ALERTS RESOLVED" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow text-center hover:scale-105 transition"
              >
                <h3 className="text-2xl font-bold text-blue-600">{stat.num}</h3>
                <span className="text-xs font-semibold text-gray-500 tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-center mb-2">What People Say</h2>
          <p className="text-gray-600 text-center mb-6">Real stories from our users</p>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                text: "The live alerts helped me avoid a dangerous area on my commute. Invaluable!",
                name: "Alex Johnson",
                role: "Commuter",
              },
              {
                text: "Reporting an incident was quick and easy. The community support is amazing.",
                name: "Priya Patel",
                role: "Student",
              },
              {
                text: "Safe routes made late-night walks feel much safer. Highly recommend.",
                name: "Marcus Lee",
                role: "Resident",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-lg shadow w-72 hover:scale-105 transition"
              >
                <p className="text-sm italic text-gray-700 mb-3">"{t.text}"</p>
                <h4 className="text-sm font-bold">
                  {t.name} <span className="text-gray-500 font-normal">- {t.role}</span>
                </h4>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 mt-10 p-8 rounded-xl">
          <div className="flex flex-wrap justify-between gap-6 max-w-6xl mx-auto">
            <div>
              <h2 className="text-xl text-blue-500 mb-2">SafeGuard</h2>
              <p className="text-sm">
                Your trusted safety companion for alerts, reporting, and secure routes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Quick Links</h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:text-blue-500">Home</a></li>
                <li><a href="#" className="hover:text-blue-500">Report Incident</a></li>
                <li><a href="#" className="hover:text-blue-500">Safety Alerts</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Contact</h3>
              <p className="text-sm">Email: support@safeguard.com</p>
              <p className="text-sm mb-2">Phone: +91 98765 43210</p>
              <div className="flex gap-3 text-lg">
                <a href="#" className="hover:text-blue-500">🌐</a>
                <a href="#" className="hover:text-blue-500">🐦</a>
                <a href="#" className="hover:text-blue-500">💼</a>
              </div>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500 mt-6">
            © 2025 SafeGuard. All Rights Reserved.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;

