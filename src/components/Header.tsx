import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="bg-white h-16 shadow flex items-center justify-between px-6">
      <h1 className="font-semibold">Welcome, {user.name}</h1>
      <button
        onClick={logout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded cursor-pointer shadow-2xl"
      >
        Logout
      </button>
    </header>
  );
}
