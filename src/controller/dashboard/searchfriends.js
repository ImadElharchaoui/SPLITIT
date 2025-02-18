const API_BASE_URL = "/api/v1/friends";

export const searchUsers = async (query) => {
  try {
    const res = await fetch(`${API_BASE_URL}/search?query=${query}`);
    if (!res.ok) throw new Error("Failed to fetch users");
    return await res.json();
  } catch (error) {
    console.error("Error searching users:", error);
    return [];
  }
};

export const addFriend = async (userId, friendId) => {
  try {
    const res = await fetch(`${API_BASE_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, friendId }),
    });
    if (!res.ok) throw new Error("Failed to add friend");
    return await res.json();
  } catch (error) {
    console.error("Error adding friend:", error);
    return { success: false };
  }
};
