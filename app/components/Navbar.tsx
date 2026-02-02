import Link from "next/link";

const navItem =
  "text-sm text-white/80 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-linear-to-br from-indigo-500 to-pink-500" />
          <span className="font-semibold tracking-tight text-white">
            MyApp
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1">
          <Link className={navItem} href="/">Home</Link>
          <Link className={navItem} href="/login">Login</Link>
          <Link className={navItem} href="/register">Register</Link>
          <Link className={navItem} href="/dashboard">Dashboard</Link>
          <Link className={navItem} href="/about">About</Link>
          <Link className={navItem} href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
