import User from "@/models/user";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { connectToDB } from "@/utils/database";
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.TOKEN_SECRET;

export const POST = async (req) => {
    await connectToDB();
    
    const { username, email, password } = await req.json();
    console.log("req:", username);
    const UserExists = await User.findOne({ $or: [{ username: username }, { email: email }] });
    if (UserExists) {
        return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        username,
        email,
        password: hashedPassword
    });
    try {
        await user.save();
        const ReturnUser = { username: user.username, email: user.email };
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
        return NextResponse.json({ ReturnUser, token }, { status: 201 });
    } catch (error) {
        console.log("Error", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};
