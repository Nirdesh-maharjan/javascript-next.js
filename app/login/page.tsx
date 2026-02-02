"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    document.cookie = "auth=true; path=/";
    router.push("/dashboard");
  };

  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Welcome back
        </h1>
        <p className="mt-3 text-white/70">
          Sign in to continue to your dashboard. This is a simple demo login
          (cookie based).
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <label className="text-sm text-white/70">Email</label>
          <input
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-indigo-400"
            placeholder="you@example.com"
          />

          <label className="mt-4 block text-sm text-white/70">Password</label>
          <input
            type="password"
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-indigo-400"
            placeholder="••••••••"
          />

          <button
            onClick={handleLogin}
            className="mt-5 w-full rounded-xl bg-linear-to-r from-indigo-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Sign in
          </button>

          <p className="mt-4 text-sm text-white/70">
            Don’t have an account?{" "}
            <Link className="text-white underline" href="/register">
              Register
            </Link>
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/20 p-8">
        <p className="text-sm text-white/70">Tip</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          Make it real later
        </h2>
        <p className="mt-3 text-white/70">
          Next step: connect a database + real authentication. For now this UI
          helps you structure pages like a pro.
        </p>
      </div>
    </div>
  );
}
