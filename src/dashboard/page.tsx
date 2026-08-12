import { redirect } from "next/navigation";
import { getWhopUser } from "@/lib/whop";

export default async function DashboardPage() {
  const user = await getWhopUser();

  if (!user) {
    redirect("/");
  }

  return (
    <main className="min-h-screen p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <a href="/" className="text-sm text-gray-400 hover:text-white">
            Logout
          </a>
        </div>

        <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
          <h2 className="mb-4 text-xl font-semibold text-green-500">
            Welcome, {user.username || "Creator"}!
          </h2>
          <p className="text-gray-400">
            Your Whop account is successfully connected to Whop Shields.
          </p>
        </div>
      </div>
    </main>
  );
}
