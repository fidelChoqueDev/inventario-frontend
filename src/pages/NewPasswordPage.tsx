import { useState } from "react";
import Button from "../components/Button/Button";
import ButtonBackIcon from "../components/ButtonBackIcon/ButtonBackIcon";
import PasswordInputWithRequirements from "../components/PasswordInputWithRequirements/PasswordInputWithRequirements";
import { useFetch } from "../hooks/useFetch";

const NewPasswordPage = () => {
  const [password, setPassword] = useState("");

  const url = "http://localhost:8007/user/new";
  const { submit } = useFetch(url);

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await submit({
      body: {
        password,
      },
    });
  };

  return (
    <main>
      <ButtonBackIcon goTo="/login" />
      <img src="/clean-box.png" alt="Box" />

      <div>
        <h2>Restablecer contraseña</h2>
        <h3>Ingresa la nueva contraseña</h3>
      </div>

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
