import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";

function generateCodeVerifier() {
  return crypto.randomBytes(32).toString("base64url");
}

async function generateCodeChallenge(verifier: string) {
  const hash = crypto.createHash("sha256").update(verifier).digest("base64url");
  return hash;
}

export async function GET() {
  const clientId = process.env.WHOP_CLIENT_ID;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const redirectUri = `${baseUrl}/api/auth/callback`;

  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);

  cookies().set("code_verifier", codeVerifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 600,
    path: "/",
  });

  const authUrl = `https://whop.com/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&code_challenge=${codeChallenge}&code_challenge_method=S256&scope=openid%20profile%20email
