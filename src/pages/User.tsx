import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DataTable from "../components/DataTable"

import user from "../data/users.json"

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-60 w-full">
        <Header />

        <main className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Users</h2>

            <DataTable data={user} type="users" />
        </main>
      </div>
    </div>
  );
}
