import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    if (!user)
      return NextResponse.json(
        { message: "Sorry, user not found." },
        { status: 404 },
      );
    return NextResponse.json(
      { user, message: "Successfully find user." },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const user = await prisma.user.findUnique({ where: { id: params.id } });
    if (!user)
      return NextResponse.json(
        { message: "Sorry, user not found." },
        { status: 404 },
      );
    const body = await request.json();
    const allowedFields = ["name", "username", "phone", "address"];
    const hasInvalidFields = Object.keys(body).some(
      (key) => !allowedFields.includes(key),
    );
    if (hasInvalidFields)
      return NextResponse.json(
        { message: "Invalid fields provided." },
        { status: 400 },
      );
    const updateData = Object.fromEntries(
      Object.entries(body).filter(([key]) => allowedFields.includes(key)),
    );
    await prisma.user.update({
      where: { id: params.id },
      data: updateData,
    });
    return NextResponse.json(
      { message: "Successfully updated profile user." },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
