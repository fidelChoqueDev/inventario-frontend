import "./Login.css";
import { ButtonBackIcon, CustomLink, Icon } from "../../components";
import FormLogin from "./components/formLogin/formLogin";

export default function Login() {
  return (
    <div className="c-login">
      <ButtonBackIcon goTo="/" />
      <Icon type="Logo" />
      <h1 className="c-login__title">Iniciar sesión</h1>
      <FormLogin />
      <p className="c-login__text">
        ¿No tienes una cuenta?{" "}
        <CustomLink to="/register">Regístrate</CustomLink>
      </p>
    </div>
  );
}
