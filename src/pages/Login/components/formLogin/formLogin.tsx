import "./formLogin.css";
import { useContext, useEffect, useState } from "react";
import {
  InputForm,
  InputPasswordForm,
  CustomLink,
  Button,
  ErrorMessage,
} from "../../../../components";

import { useFetch } from "../../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../context/AuthContext";

interface IUserLogin {
  email: string;
  password: string;
}

interface IDataResponse {
  access_token: string;
  token_type: string;
}

const initialUserLogin: IUserLogin = {
  email: "",
  password: "",
};

const url = "http://localhost:8007/user/login";
export default function FormLogin() {
  // Hooks React Router
  const navigate = useNavigate();
  // Hooks React
  const { error, data, submit } = useFetch(url);
  const [userLogin, setUserLogin] = useState<IUserLogin>(initialUserLogin);
  const { updateToken } = useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await submit({
      body: {
        email: userLogin.email,
        password: userLogin.password,
      },
    });
  };

  useEffect(() => {
    if (data) {
      const { access_token } = data as IDataResponse;
      updateToken(access_token);
      navigate("/dashboard");
    }
  }, [data, updateToken, navigate]);

  return (
    <>
      <form className="c-form-login" onSubmit={handleSubmit}>
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
            pattern=".{8,}"
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
    </>
  );
}
