import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Room from "./pages/room/Room";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import GetOwner from "./pages/owner/Owner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<List />} />
        <Route path="/rooms/:id" element={<Room />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/GetOwner" element={<GetOwner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
