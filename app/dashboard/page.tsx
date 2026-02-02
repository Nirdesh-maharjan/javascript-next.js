"use client";

import LogoutButton from "../components/LogoutButton";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-3xl font-semibold text-white">Dashboard</h1>
          <p className="mt-1 text-white/70">
            Only logged in users can see this 😎
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
            New Report
          </button>
          <LogoutButton />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card label="Users" value="1,245" />
        <Card label="Revenue" value="$12,430" />
        <Card label="Orders" value="342" />
        <Card label="Tasks" value="17" />
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
        <ul className="mt-4 space-y-3 text-sm text-white/70">
          <li className="flex justify-between border-b border-white/10 pb-3">
            <span>John created a post</span>
            <span className="text-white/50">2m ago</span>
          </li>
          <li className="flex justify-between border-b border-white/10 pb-3">
            <span>Payment received</span>
            <span className="text-white/50">10m ago</span>
          </li>
          <li className="flex justify-between">
            <span>Backup completed</span>
            <span className="text-white/50">1h ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <p className="text-xs text-white/60">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
