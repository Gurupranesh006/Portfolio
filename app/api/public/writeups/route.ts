import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import { WriteupModel } from "@/lib/models";

export async function GET() {
  try {
    await connectToDatabase();
    const data = await WriteupModel.find().sort({ order: 1, createdAt: -1 }).lean();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
