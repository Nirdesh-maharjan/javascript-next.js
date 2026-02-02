import Link from "next/link";

export default function HomePage() {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
          ✨ Advanced UI Starter
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Build a clean dashboard with auth-style pages
        </h1>

        <p className="mt-4 text-white/70">
          A modern Next.js design with a navbar, protected dashboard, and
          beautiful layouts — ready to extend.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/login"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90"
          >
            Go to Login
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            View Dashboard
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
        <div className="grid gap-4 sm:grid-cols-2">
          <StatCard label="Users" value="1,245" />
          <StatCard label="Revenue" value="$12,430" />
          <StatCard label="Orders" value="342" />
          <StatCard label="Tasks" value="17" />
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="text-sm font-medium text-white">Recent Activity</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>• John created a post</li>
            <li>• Payment received</li>
            <li>• Backup completed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs text-white/60">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
