import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-yellow-400 text-white h-screen p-5 fixed shadow-2xl">
      <h2 className="text-xl font-bold mb-6 text-black text-center">Sagara Tech</h2>

      <nav className="flex flex-col space-y-3">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `rounded p-2 font-semibold ${
              isActive ? "bg-white text-black" : "text-black hover:bg-white hover:text-black"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `rounded px-2 py-1 font-semibold ${
              isActive ? "bg-white text-black" : "text-black hover:bg-white hover:text-black"
            }`
          }
        >
          Users
        </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `rounded px-2 py-1 font-semibold ${
              isActive ? "bg-white text-black" : "text-black hover:bg-white hover:text-black"
            }`
          }
        >
          Transactions
        </NavLink>
      </nav>
    </aside>
  );
}
