import User from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const {user_id} = await params;
  try {
    const user = await User.findById(user_id)
    if (!user) {
      return new Response('User not found', { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
