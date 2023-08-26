import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, username } = body;
    return NextResponse.json({ email, password, username });
  } catch (error) {
    console.error(error);
  }
}
