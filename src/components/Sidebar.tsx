import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-yellow-400 text-white h-screen p-5 fixed">
      <h2 className="text-xl font-bold mb-6 text-black text-center">Sagara Tech</h2>

      <nav className="flex flex-col space-y-3">
        <Link to="/dashboard" className="bg-white rounded p-2 text-black font-semibold">
          Dashboard
        </Link>
        <Link to="/dashboard/users" className="hover:bg-white rounded px-2 py-1 hover:text-black hover:font-semibold">
          Users
        </Link>
        <Link to="/dashboard/reports" className="hover:bg-white rounded px-2 py-1 hover:text-black hover:font-semibold">
          Reports
        </Link>
      </nav>
    </aside>
  );
}
