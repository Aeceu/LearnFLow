import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: Request) => {
  try {
    const res = await prisma.user.findMany();
    console.log(res);
    return NextResponse.json(res, { status: 401 });
  } catch (error) {
    console.log(error);
  }
};
