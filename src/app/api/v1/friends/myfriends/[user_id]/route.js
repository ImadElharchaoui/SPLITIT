import User from "@/models/user";
import { NextResponse } from "next/server";
import { connectToDB } from "@/utils/database";

export const GET = async (req, { params }) => {
  await connectToDB();

  const {user_id} = await params;
  if (!user_id) {
    return NextResponse.json({ message: "User ID is required" }, { status: 400 });
  }

  

  try {
    const user = await User.findById(user_id).populate("myFriends", "username image _id");
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const friends = user.myFriends.map((friend) => ({
      _id: friend._id,
      username: friend.username,
      image: friend.image,
    }));
    console.log("friend:", friends)

    return NextResponse.json(friends, { status: 200 });
  } catch (error) {
    console.error("Error fetching friends:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
