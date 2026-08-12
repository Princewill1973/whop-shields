import { cookies } from "next/headers";

export async function getWhopUser() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("whop_access_token")?.value;

  if (!accessToken) return null;

  try {
    const res = await fetch("https://api.whop.com/api/v2/users/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Whop API Error:", error);
    return null;
  }
}
