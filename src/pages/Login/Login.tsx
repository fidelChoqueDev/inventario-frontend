import "./Login.css";
import ButtonBackIcon from "../../components/ButtonBackIcon/ButtonBackIcon";
import CustomLink from "../../components/CustomLink/CustomLink";
import Icon from "../../components/Icon/Icon";
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
