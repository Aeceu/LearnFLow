import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
    const { userId } = auth();

    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const user = await currentUser();
    if (!user) {
        return NextResponse.json({ message: "User not exists!" }, { status: 404 });
    }

    let userExists = await prisma.user.findFirst({
        where: {
            id: userId,
        },
    });
    if (!userExists) {
        userExists = await prisma.user.create({
            data: {
                id: userId,
                firstName: user?.firstName || "N/A",
                lastName: user?.lastName || "N/A",
                email: user?.emailAddresses[0].emailAddress || "N/A",
                password: "N/A", // Assuming password isn't used since using Clerk
            },
        });
    }

    if (!userExists) {
        return NextResponse.json(null, {
            status: 302,
            headers: {
                Location: "http://localhost:3000/api/new-user",
            },
        });
    }
    return NextResponse.json(null, {
        status: 302,
        headers: {
            Location: "http://localhost:3000/",
        },
    });
};
