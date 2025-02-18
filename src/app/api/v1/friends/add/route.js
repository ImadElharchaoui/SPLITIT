import User from "@/models/user";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectToDB();
  const { userId, friendId } = await req.json();

  if (!userId || !friendId) return NextResponse.json({ message: "Invalid data" }, { status: 400 });

  try {
    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    if (!user || !friend) return NextResponse.json({ message: "User not found" }, { status: 404 });

    if (!user.myFriends.includes(friendId)) {
      user.myFriends.push(friendId);
      await user.save();
    }
    if(!friend.myFriends.includes(userId)){
      friend.myFriends.push(userId)
      await friend.save();
    }

    return NextResponse.json({ success: true, username: friend.username }, { status: 201 });
  } catch (error) {
    console.error("Error adding friend:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
