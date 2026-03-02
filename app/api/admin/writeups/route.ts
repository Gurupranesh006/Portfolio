import { NextResponse } from "next/server";
import { isAdminRequestAuthenticated } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { WriteupModel } from "@/lib/models";

export async function GET() {
  const authenticated = await isAdminRequestAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  const data = await WriteupModel.find().sort({ order: 1, createdAt: -1 }).lean();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const authenticated = await isAdminRequestAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  await connectToDatabase();

  const writeup = await WriteupModel.create({
    title: body.title,
    summary: body.summary || "",
    status: body.status || "Coming soon",
    link: body.link || "#",
    order: Number(body.order || 0)
  });

  return NextResponse.json(writeup, { status: 201 });
}
