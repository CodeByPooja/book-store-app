import "./App.css";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NoPage } from "./pages/no-page/NoPage";
import { Dashboard } from "./pages/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
