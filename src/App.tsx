import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User"
import Transaction from "./pages/Transaction"
import PublicRoute from "./routes/PublicRoute"
import PrivateRoute from "./routes/PrivateRoute"

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute><Login /></PublicRoute>}></Route>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
        <Route path="/users" element={<PrivateRoute><User /></PrivateRoute>}></Route>
        <Route path="/transactions" element={<PrivateRoute><Transaction /></PrivateRoute>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App