import "./formLogin.css";
import { useState } from "react";
import InputForm from "../../../../components/InputForm/InputForm";
import InputPasswordForm from "../../../../components/InputPasswordForm/InputPasswordForm";
import CustomLink from "../../../../components/CustomLink/CustomLink";
import Button from "../../../../components/Button/Button";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import { useFetch } from "../../../../hooks/useFetch";

interface IUserLogin {
  email: string;
  password: string;
}

const initialUserLogin: IUserLogin = {
  email: "",
  password: "",
};

const url = "";
export default function FormLogin() {
  const { error, isLoading, data, submit } = useFetch(url);
  console.log(isLoading, data, submit());
  const [userLogin, setUserLogin] = useState<IUserLogin>(initialUserLogin);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };
  return (
    <form className="c-form-login">
      <div className="c-form-login__inputs">
        <InputForm
          name="email"
          type="email"
          placeholder="Correo electrónico"
          value={userLogin.email}
          onChange={handleChange}
          errorMessage="&nbsp;"
          required={true}
        />
        <InputPasswordForm
          name="password"
          placeholder="Contraseña"
          value={userLogin.password}
          onChange={handleChange}
          errorMessage="&nbsp;"
          required={true}
          pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*d)(?=.*[@#$%^&+=!])[^]{8,}$"
        />
      </div>
      <div className="c-form-login__recovery-link">
        <CustomLink to="/recover">¿Olvidaste tu contraseña?</CustomLink>
      </div>
      <ErrorMessage
        className="c-form-login__error-message"
        visibility={error ? true : false}
        variant="FontSizeNormal"
      >
        {error?.toString() ?? "Error"}
      </ErrorMessage>
      <Button variant="Primary">Iniciar sesión</Button>
    </form>
  );
}
