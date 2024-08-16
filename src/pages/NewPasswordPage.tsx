import { useRef, useState } from "react";
import Button from "../components/Button/Button";
import ButtonBackIcon from "../components/ButtonBackIcon/ButtonBackIcon";
import InputPasswordForm from "../components/InputPasswordForm/InputPasswordForm";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const NewPasswordPage = () => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const password = passwordRef.current?.value;
    const passwordCheck = passwordCheckRef.current?.value;

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
        <InputPasswordForm ref={passwordRef} placeholder="Contraseña" aria-label="NUeva contraseña" />
        <InputPasswordForm
          ref={passwordCheckRef}
          placeholder="Repetir la contraseña" aria-label="Repetir nueva contraseña"
        />

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <Button variant="Primary">Establecer contraseña</Button>
      </form>
    </main>
  );
};

export default NewPasswordPage;
