import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <div className="mb-6 text-6xl">🛡️</div>
      <h1 className="mb-4 text-5xl font-bold tracking-tight text-white">
        Whop Shields
      </h1>
      <p className="mb-8 max-w-md text-lg text-gray-400">
        Stop license sharing and protect your Whop revenue with advanced IP tracking.
      </p>
      
      <Link
        href="/api/auth/login"
        className="rounded-full bg-green-500 px-8 py-3 font-semibold text-black transition hover:bg-green-400"
      >
        Login with Whop
      </Link>
    </main>
  );
}
