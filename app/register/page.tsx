"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = () => {
    // Fake register → auto login
    document.cookie = "auth=true; path=/";
    router.push("/dashboard");
  };

  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-center">
      {/* Left */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Create your account
        </h1>
        <p className="mt-3 text-white/70">
          Join the platform and access your dashboard. This is a UI demo — you
          can wire real auth later.
        </p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <label className="text-sm text-white/70">Full name</label>
          <input
            className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-indigo-400"
            placeholder="John Doe"
          />

          <label className="mt-4 block text-sm text-white/70">Email</label>
          <input
            type="email"
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
            onClick={handleRegister}
            className="mt-5 w-full rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 px-4 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Create account
          </button>

          <p className="mt-4 text-sm text-white/70">
            Already have an account?{" "}
            <Link className="text-white underline" href="/login">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right card */}
      <div className="rounded-2xl border border-white/10 bg-black/20 p-8">
        <p className="text-sm text-white/70">Why join?</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          Build faster with Next.js
        </h2>
        <p className="mt-3 text-white/70">
          You now have a real multi-page app layout with protected routes and a
          dashboard UI ready to expand.
        </p>
      </div>
    </div>
  );
}
