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
      className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
}
