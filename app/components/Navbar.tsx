import Link from "next/link";

export default function Navbar() {
  const linkClass =
    "rounded px-3 py-2 text-sm hover:bg-gray-100";

  return (
    <nav className="flex flex-wrap gap-2 border-b bg-white p-4">
      <Link className={linkClass} href="/">Home</Link>
      <Link className={linkClass} href="/login">Login</Link>
      <Link className={linkClass} href="/register">Register</Link>
      <Link className={linkClass} href="/dashboard">Dashboard</Link>
      <Link className={linkClass} href="/about">About</Link>
      <Link className={linkClass} href="/contact">Contact</Link>
    </nav>
  );
}
