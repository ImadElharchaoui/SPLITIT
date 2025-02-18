import User from "@/models/user"
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectToDB();
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) return NextResponse.json({ message: "No query provided" }, { status: 400 });

  try {
    const users = await User.find({ username: { $regex: query, $options: "i" } }).limit(10);
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
