import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import validator from "validator";
import zxcvbn from "zxcvbn";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (user) {
      return NextResponse.json(
        { message: "User already exists." },
        { status: 409 },
      );
    }
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { message: "Invalid email format." },
        { status: 400 },
      );
    }
    const passwordStrength = zxcvbn(password);
    if (passwordStrength.score < 3) {
      return NextResponse.json(
        { message: "Password is too weak." },
        { status: 400 },
      );
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });
    return NextResponse.json(
      { massage: "Successfully registered." },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
