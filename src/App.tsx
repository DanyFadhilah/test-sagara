import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PublicRoute from "./routes/PublicRoute"
import PrivateRoute from "./routes/PrivateRoute"

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute><Login /></PublicRoute>}></Route>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App