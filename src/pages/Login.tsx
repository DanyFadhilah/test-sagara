import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      setError("Username atau password salah");
      return;
    }

    localStorage.setItem("token", "logged-in");
    localStorage.setItem("user", JSON.stringify(user));

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white w-2/3 sm:w-1/2 md:w-1/3 xl:w-1/3 p-6 items-center flex flex-col gap-5 rounded-2xl shadow-2xl">
            <h1 className="font-bold text-2xl">Login</h1>
            <input
                className="border p-2 rounded-xl w-full shadow-2xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />

            <input
                className="border p-2 rounded-xl w-full shadow-2xs"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button onClick={handleLogin} className="bg-yellow-500 hover:bg-yellow-600 w-1/2 shadow-2xl text-white px-4 py-2 rounded cursor-pointer">Login</button>
        </div>
    </div>
  );
}
