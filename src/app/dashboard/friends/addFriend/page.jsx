"use client";
import { useState, useEffect } from "react";
import { searchUsers, addFriend } from "@/controller/dashboard/searchfriends";
import User_img from "@/image/png/user_avatar.png";

const SearchFriends = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ Get logged-in user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      router.push("/login");
    } else {
      setUser(storedUser);
    }
  }, []);

  // ✅ Handle search input change
  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    const results = await searchUsers(searchTerm);
    setUsers(results);
    setLoading(false);
  };

  // ✅ Handle adding a friend
  const handleAddFriend = async (friendId) => {
    const response = await addFriend(user._id, friendId);
    if (response.success) {
      setMessage(`Friend request sent to ${response.username}!`);
    } else {
      setMessage("Failed to send request.");
    }
  };

  return (
    <div className="max-w-lg mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Search Friends</h1>

      <input
        type="text"
        placeholder="Search by username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button onClick={handleSearch} className="mt-2 w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        {loading ? "Searching..." : "Search"}
      </button>

      {message && <p className="text-green-500 mt-2">{message}</p>}

      {/* User List */}
      <div className="mt-4">
        {users.length > 0 ? (
          users.map((F_user) => (
            ( F_user._id != user._id &&
            <div key={F_user._id} className="flex items-center justify-between p-2 border-b">
              <div className="flex items-center gap-3">
                <img src={F_user.image || User_img} alt="user" className="w-10 h-10 rounded-full" />
                <span>{F_user.username}</span>
              </div>
              <button
                onClick={() => handleAddFriend(F_user._id)}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Add Friend
              </button>
            </div>
          )))
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchFriends;
