import { NextResponse } from "next/server";
import { isAdminRequestAuthenticated } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { CertificationModel } from "@/lib/models";

export async function GET() {
  const authenticated = await isAdminRequestAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  const data = await CertificationModel.find().sort({ order: 1, createdAt: -1 }).lean();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const authenticated = await isAdminRequestAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  await connectToDatabase();

  const certification = await CertificationModel.create({
    name: body.name,
    issuer: body.issuer || "",
    year: body.year || "",
    order: Number(body.order || 0)
  });

  return NextResponse.json(certification, { status: 201 });
}
