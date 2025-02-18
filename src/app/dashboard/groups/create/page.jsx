"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { handlePushGroup, handleMember } from "@/controller/dashboard/creategroup";
import PlusImg from "@/image/png/Plus_img.jpg";
import MinusImg from "@/image/png/Minus_img.jpg";
import User_img from "@/image/png/user_avatar.png";

const CreateGroup = () => {
  const router = useRouter();
  const [members, setMembers] = useState([]); // Friends list
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    members: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      router.push("/login");
      return;
    }
    setUser(storedUser);

    const fetchMembers = async () => {
      const response = await handleMember(storedUser._id);
      if (response) {
        setMembers(response);
      } else {
        console.error("Error fetching members");
      }
    };
    fetchMembers();
  }, [router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addMember = (member) => {
    setFormData((prevFormData) => {
      if (!prevFormData.members.some((m) => m._id === member._id)) {
        const updatedMembers = [...prevFormData.members, member];
        console.log("✅ Updated members list:", updatedMembers); // Debugging
        return { ...prevFormData, members: updatedMembers };
      }
      return prevFormData; // Return unchanged state if member already exists
    });
  };
  
  const removeMember = (member) => {
      setFormData((prevFormData) => {
        const updatedMembers = prevFormData.members.filter((m) => m._id !== member._id);
        console.log("✅ Updated members after removal:", updatedMembers); // Debugging
        return { ...prevFormData, members: updatedMembers };
      });
    
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.name.trim()) {
      setError("Group name is required.");
      setLoading(false);
      return;
    }

    if (formData.members.length < 1) {
      setError("You must add at least one member.");
      setLoading(false);
      return;
    }

    const groupData = {
      name: formData.name,
      description: formData.description,
      image: formData.image || null,
      members: formData.members.map((m) => m._id),
      createdBy: user?._id,
    };
    console.log("Sending groupData:", groupData);

    const response = await handlePushGroup(groupData);
    if (response === 201) {
      router.push("/dashboard/groups");
    } else {
      setError("Failed to create group.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Create a New Group</h1>
      {error && <p className="text-red-500 text-center mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-6">
        {/* Left: Group Details */}
        <div className="col-span-2 space-y-4">
          <div>
            <label className="block text-sm font-medium">Group Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Group Image (URL)</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Right: Members Selection */}
        <div>
          <h4 className="font-semibold">Members in the group:</h4>
          <div className="flex flex-wrap gap-2">
            {formData.members.length > 0 ? (
              formData.members.map((member) => (
                <button
                  key={member._id}
                  type="button"
                  className="relative"
                  onClick={() => removeMember(member)}
                >
                  <Image src={member.image || User_img} alt="user" width={48} height={48} className="w-12 h-12 rounded-full" />
                  <Image
                    className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-200"
                    src={MinusImg}
                    alt="Remove"
                    width={48}
                    height={48}
                  />
                  <span className="block text-xs text-center">{member.username}</span>
                </button>
              ))
            ) : (
              <p className="text-sm text-gray-500">No members added yet.</p>
            )}
          </div>

          <h4 className="font-semibold mt-4">Your Friends:</h4>
          <div className="flex flex-wrap gap-2">
            {members.length > 0 ? (
              members.map((member) => (
                <button
                  key={member._id}
                  type="button"
                  className="relative"
                  onClick={() => addMember(member)}
                >
                  <Image src={member.image || User_img} alt="user" width={48} height={48} className="w-12 h-12 rounded-full" />
                  <Image
                    className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-200"
                    src={PlusImg}
                    alt="Add"
                    width={48}
                    height={48}
                  />
                  <span className="block text-xs text-center">{member.username}</span>
                </button>
              ))
            ) : (
              <p className="text-sm text-gray-500">You have no friends yet.</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-3">
          <button
            type="submit"
            disabled={loading}
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {loading ? "Creating..." : "Create Group"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateGroup;
