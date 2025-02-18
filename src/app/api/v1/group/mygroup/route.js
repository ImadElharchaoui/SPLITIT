import Group from "@/models/Group";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        await connectToDB();

        const url = new URL(req.url);
        const groupsIDs = url.searchParams.getAll("groupsIDs"); // Extract all group IDs
        if (!groupsIDs) {
            return NextResponse.json({ error: "No group IDs provided" }, { status: 400 });
        }

        
        const groups = await Group.find({ _id: { $in: groupsIDs } });
        console.log("groups:", groups)
        return NextResponse.json(groups, { status: 200 });
    } catch (error) {
        console.error("Error fetching groups:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};
