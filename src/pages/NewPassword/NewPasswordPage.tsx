import "./NewPasswordPage.css";
import { useContext, useState } from "react";
import {
  Button,
  ButtonBackIcon,
  PasswordInputWithRequirements,
  HeroLogo,
  Popup,
} from "../../components";
import { RecoveryPasswordContext } from "../../context/RecoveryPasswordContext";
import usePopup from "../../hooks/usePopup";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8007/user/password/reset";

const NewPasswordPage = () => {
  const navigate = useNavigate();
  const [isOpen, openPopup] = usePopup(true, 4000, () => navigate("/login"));
  const [password, setPassword] = useState("");
  const { valuesBySteps } = useContext(RecoveryPasswordContext);

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const queryParams = new URLSearchParams({
      new_password: password,
      email: valuesBySteps.email,
    });
    const url = `${endpoint}?${queryParams.toString()}`;
    console.log(url);
    try {
      const response = await fetch(url, {
        method: "PUT",
      });

      if (!response.ok) {
        throw new Error("Error al enviar el correo electrónico");
      }
      const data = await response.json();
      if (data) {
        openPopup();
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <main className="reset-password">
      <ButtonBackIcon goTo="/login" />

      <HeroLogo />

      <header className="reset-password__header">
        <h2>Restablecer contraseña</h2>
        <h3>Ingresa la nueva contraseña</h3>
      </header>

      <form onSubmit={handleSubmit}>
        <PasswordInputWithRequirements
          passwordValue={password}
          onChange={handlePassword}
        />

        <Button variant="Primary">Establecer contraseña</Button>
      </form>
      <Popup isOpen={isOpen}>Contraseña actualizada satisfactoriamente</Popup>
    </main>
  );
};

export default NewPasswordPage;
