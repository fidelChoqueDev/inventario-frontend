import "./formLogin.css";
import { useContext, useEffect, useState } from "react";
import InputForm from "../../../../components/InputForm/InputForm";
import InputPasswordForm from "../../../../components/InputPasswordForm/InputPasswordForm";
import CustomLink from "../../../../components/CustomLink/CustomLink";
import Button from "../../../../components/Button/Button";
import ErrorMessage from "../../../../components/ErrorMessage/ErrorMessage";
import { useFetch } from "../../../../hooks/useFetch";
import Popup from "../../../../components/Popup/Popup";
import usePopup from "../../../../hooks/usePopup";
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
  // Custon Hooks
  const [isOpen, openPopup] = usePopup(true, 3000, () =>
    navigate("/dashboard"),
  );

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
      openPopup();
    }
  }, [data, updateToken, openPopup]);

  return (
    <>
      <Popup isOpen={isOpen}>Funciona</Popup>
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
