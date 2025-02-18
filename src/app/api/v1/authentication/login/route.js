import User from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

const JWT_SECRET = process.env.TOKEN_SECRET;

export async function POST(req) {
    try {
        await connectToDB(); // Ensure DB connection

        const { username, password } = await req.json(); // Use req.json() instead of req.body

        // Find user by username or email
        const user = await User.findOne({ $or: [{ username: username }, { email: username }] });
        if (!user) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        // Compare hashed passwords
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
        }

        // Create JWT token
        const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: "1h" });

        // Return user info (without password) and token
        return NextResponse.json({ user, token }, { status: 200 });
    } catch (error) {
        console.error("Login Error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
