import { Routes, BrowserRouter, Route } from "react-router-dom";
import AdminDashboard from "./components/dashboard";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/editeCridentials" element={<UpdateCredentials />} />
      </Routes>
    </BrowserRouter>
  );
};
