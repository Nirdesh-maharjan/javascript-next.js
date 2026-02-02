"use client";

import LogoutButton from "../components/LogoutButton";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Only logged in users can see this 😎</p>

      <LogoutButton />
    </div>
  );
}
