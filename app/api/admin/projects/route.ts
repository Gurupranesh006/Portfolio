import { NextResponse } from "next/server";
import { isAdminRequestAuthenticated } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { ProjectModel } from "@/lib/models";

export async function GET() {
  const authenticated = await isAdminRequestAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  const data = await ProjectModel.find().sort({ order: 1, createdAt: -1 }).lean();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const authenticated = await isAdminRequestAuthenticated();
  if (!authenticated) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  await connectToDatabase();

  const project = await ProjectModel.create({
    title: body.title,
    description: body.description,
    technologies: body.technologies || [],
    learning: body.learning,
    githubUrl: body.githubUrl,
    status: body.status || "",
    order: Number(body.order || 0)
  });

  return NextResponse.json(project, { status: 201 });
}
