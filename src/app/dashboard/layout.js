"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/dashboard/Navbar";

const DashboardLayout = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);
    } catch (error) {
      console.log("Error loading user:", error);
    }
  }, []);

  return (
    <div>
      <Navbar user={user} />
      <main className="p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
