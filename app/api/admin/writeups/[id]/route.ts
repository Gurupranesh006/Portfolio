import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { isAdminRequestAuthenticated } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { WriteupModel } from "@/lib/models";

const validateId = (id: string) => mongoose.Types.ObjectId.isValid(id);

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const authenticated = await isAdminRequestAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!validateId(params.id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  const body = await request.json();
  await connectToDatabase();

  const updated = await WriteupModel.findByIdAndUpdate(
    params.id,
    {
      title: body.title,
      summary: body.summary || "",
      status: body.status || "Coming soon",
      link: body.link || "#",
      order: Number(body.order || 0)
    },
    { new: true }
  );

  return NextResponse.json(updated);
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const authenticated = await isAdminRequestAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!validateId(params.id)) {
    return NextResponse.json({ error: "Invalid id" }, { status: 400 });
  }

  await connectToDatabase();
  await WriteupModel.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
