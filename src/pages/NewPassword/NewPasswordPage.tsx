import "./NewPasswordPage.css";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import {
  Button,
  ButtonBackIcon,
  PasswordInputWithRequirements,
  HeroLogo,
} from "../../components";

const NewPasswordPage = () => {
  const [password, setPassword] = useState("");

  const url = "http://localhost:8007/user/password/reset";
  const { submit } = useFetch(url);

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await submit({
      body: {
        // correo electrónico del usuario
        password,
      },
    });
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
    </main>
  );
};

export default NewPasswordPage;
