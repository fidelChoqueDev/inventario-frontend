// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import {
  HomePage,
  Login,
  RegisterUserPage,
  DashboardPage,
  RecoverPasswordPage,
  QuestionPage,
} from "./pages";
import { ProtectedRoute } from "./components";
import { AuthContext } from "./context/AuthContext";

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
