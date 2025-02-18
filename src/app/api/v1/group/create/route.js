import Group from "@/models/Group";
import User from "@/models/user"; // Import User model
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    await connectToDB();
    const Thegroup = await req.json();

    try {
        // Create the group
        const group = new Group({
            name: Thegroup.name,
            createdBy: Thegroup.createdBy,
            image: Thegroup.image || null,
            description: Thegroup.description,
            members: Thegroup.members,
        });

        await group.save();

        await User.updateMany(
            { _id: { $in: [...Thegroup.members, Thegroup.createdBy] } }, // Include creator in case they aren’t in the members list
            { $push: { myGroups: group._id } }
        );

        return NextResponse.json({ message: "Group created successfully!" }, { status: 201 });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
};
