"use client";

export default function LogoutButton() {
  const logout = () => {
    document.cookie =
      "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/login";
  };

  return (
    <button
      onClick={logout}
      className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
    >
      Logout
    </button>
  );
}
