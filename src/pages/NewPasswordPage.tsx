import { useState } from "react";
import Button from "../components/Button/Button";
import ButtonBackIcon from "../components/ButtonBackIcon/ButtonBackIcon";
import InputPasswordForm from "../components/InputPasswordForm/InputPasswordForm";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const NewPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!password || !passwordCheck) {
      setErrorMessage("Ambos campos son obligatorios");
      return;
    }

    if (password !== passwordCheck) {
      setErrorMessage("Las contraseñas no son iguales");
      return;
    }

    setErrorMessage(null);

    // Send password to back

    console.log("Contraseña enviada correctamente");
  };

  return (
    <main>
      <ButtonBackIcon goTo="/" />
      <img src="/clean-box.png" alt="Box" />
      <div>
        <h2>Restablecer la contraseña</h2>
        <h3>Ingresa la nueva contraseña</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <InputPasswordForm
          name="password"
          required
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Contraseña"
          aria-label="Nueva contraseña"
        />
        <InputPasswordForm
          name="passwordCheck"
          required
          pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
          value={passwordCheck}
          onChange={(event) => setPasswordCheck(event.target.value)}
          placeholder="Repetir la contraseña"
          aria-label="Repetir nueva contraseña"
        />

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <Button variant="Primary">Establecer contraseña</Button>
      </form>
    </main>
  );
};

export default NewPasswordPage;
