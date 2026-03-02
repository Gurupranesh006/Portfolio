import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { CertificationModel } from "@/lib/models";

export async function GET() {
  try {
    await connectToDatabase();
    const data = await CertificationModel.find().sort({ order: 1, createdAt: -1 }).lean();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
