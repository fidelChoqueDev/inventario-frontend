// import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login/Login";
import RegisterUserPage from "./pages/RegisterUserPage";
import DashboardPage from "./pages/DashboardPage";
import RecoverPasswordPage from "./pages/RecoverPasswordPage";
import QuestionPage from "./pages/QuestionPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { token } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUserPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/recover" element={<RecoverPasswordPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <ProtectedRoute isAuthenticated={token !== null}>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        </ProtectedRoute>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
