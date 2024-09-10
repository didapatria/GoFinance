import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 },
      );
    }
    return NextResponse.json(
      { message: "Successfully logged in" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again" },
      { status: 500 },
    );
  }
}
