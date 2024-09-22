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
  NewPasswordPage,
  ErrorPage,
} from "./pages";
import { ProtectedRoute } from "./components";
import { AuthContext } from "./context/AuthContext";
import { RecoveryPasswordContextProvider } from "./context/RecoveryPasswordContext";
import { Clientes } from "./pages/Clientes/Clientes";
import { Proveedor } from "./pages/Proveedor/Proveedor";
import { ProductPage } from "./pages/Productos/ProductPage";

function App() {
  const { token } = useContext(AuthContext);
  console.log(!!token);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUserPage />} />
        <Route element={<DashboardPage />}>
          <Route path="/cliente" element={<Clientes/>}/>
          <Route path="/proveedor" element={<Proveedor/>}/>
          <Route path="/producto" element={<ProductPage/>}/>
        </Route>
        <Route element={<RecoveryPasswordContextProvider />}>
          <Route path="/recover" element={<RecoverPasswordPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/newpassword" element={<NewPasswordPage />} />
        </Route>
        <Route
          element={
            <ProtectedRoute isAuthenticated={!!token} redirectTo="/login" />
          }
        >
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
