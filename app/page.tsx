export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          New Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-white p-5 shadow">
          <h3 className="text-sm text-gray-500">Users</h3>
          <p className="mt-2 text-2xl font-semibold">1,245</p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <h3 className="text-sm text-gray-500">Revenue</h3>
          <p className="mt-2 text-2xl font-semibold">$12,430</p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <h3 className="text-sm text-gray-500">Orders</h3>
          <p className="mt-2 text-2xl font-semibold">342</p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <h3 className="text-sm text-gray-500">Pending Tasks</h3>
          <p className="mt-2 text-2xl font-semibold">17</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Recent Activity
        </h2>

        <ul className="space-y-3">
          <li className="flex justify-between border-b pb-2">
            <span>User John created a post</span>
            <span className="text-sm text-gray-400">2 mins ago</span>
          </li>

          <li className="flex justify-between border-b pb-2">
            <span>Payment received</span>
            <span className="text-sm text-gray-400">10 mins ago</span>
          </li>

          <li className="flex justify-between">
            <span>Server backup completed</span>
            <span className="text-sm text-gray-400">1 hour ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
