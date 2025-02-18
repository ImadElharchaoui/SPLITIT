"use client";
import React, { useEffect, useState } from "react";
import Groups from "@/components/dashboard/Groups";
import { handleUserData } from "@/controller/dashboard/user";

const Page = () => {
  const [user, setUser] = useState(null); // Initialize with null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const localUser = JSON.parse(localStorage.getItem("user"));
        if (!localUser || !localUser._id) {
          setError("User not found. Please log in.");
          return;
        }

        const response = await handleUserData(localUser._id);
        if (response) {
          setUser(response);
        } else {
          setError("Failed to fetch user data.");
        }
      } catch (err) {
        setError("An error occurred while fetching user data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
        <h1>Welcome {user?.username}</h1>
      <Groups groups={user?.myGroups || []} />
    </div>
  );
};

export default Page;
