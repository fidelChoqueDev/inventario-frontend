// import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import RegisterUserPage from "./pages/Register/RegisterUserPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import RecoverPasswordPage from "./pages/RecoverPassword/RecoverPasswordPage";
import QuestionPage from "./pages/Question/QuestionPage";
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
        <Route element={<ProtectedRoute isAuthenticated={token !== null} />}>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
