import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, createAdminSession } from "@/lib/auth";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const expectedUser = process.env.ADMIN_USERNAME;
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedUser || !expectedPassword) {
    return NextResponse.json(
      { error: "Admin credentials are not configured." },
      { status: 500 }
    );
  }

  if (username !== expectedUser || password !== expectedPassword) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const token = await createAdminSession(username);
  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  });

  return response;
}
