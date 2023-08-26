import prisma from "@/lib/database";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name } = body;
    // check if user exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    // if user exists, return error
    if (existingUser) {
      return NextResponse.json(
        { message: "User with that email already exists" },
        { status: 422 },
      );
    }
    const hashedPassword = await hash(password, 10);
    // create user
    const user = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        name,
      },
    });
    return NextResponse.json(user, {
      status: 200,
    });
  } catch (error) {
    console.error(error);
  }
}
