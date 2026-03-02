import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "velaryx_admin_session";

const getJwtSecret = () => {
  const secret = process.env.ADMIN_JWT_SECRET;
  if (!secret) {
    throw new Error("ADMIN_JWT_SECRET is not configured.");
  }
  return new TextEncoder().encode(secret);
};

export async function createAdminSession(username: string) {
  return new SignJWT({ username, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getJwtSecret());
}

export async function verifyAdminSession(token: string) {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret());
    return payload;
  } catch {
    return null;
  }
}

export async function isAdminRequestAuthenticated() {
  const token = cookies().get(ADMIN_SESSION_COOKIE)?.value;
  if (!token) {
    return false;
  }

  const payload = await verifyAdminSession(token);
  return Boolean(payload?.role === "admin");
}
