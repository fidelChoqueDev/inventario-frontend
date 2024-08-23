import "./RecoverPasswordPage.css";
import { useContext } from "react";
import { Button, ButtonBackIcon, HeroLogo, InputForm } from "../../components";
import { RecoveryPasswordContext } from "../../context/RecoveryPasswordContext";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8007/user/security/question";

const RecoverPasswordPage = () => {
  const { valuesBySteps, updateValuesBySteps } = useContext(
    RecoveryPasswordContext,
  );
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const paramsString = new URLSearchParams({
      email: valuesBySteps.email,
    });
    const url = `${endpoint}?${paramsString.toString()}`;
    console.log(url);

    try {
      const response = await fetch(`${endpoint}?${paramsString.toString()}`);

      if (!response.ok) {
        throw new Error("Error al enviar el correo electrónico");
      }
      const data = await response.json();
      updateValuesBySteps("question", data.question);

      navigate("/question");
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateValuesBySteps("email", event.target.value);
  };

  return (
    <main className="recover">
      <ButtonBackIcon goTo="/login" />

      <HeroLogo />

      <header>
        <h2>Recuperación de contraseña</h2>
        <h3>Ingresa tu correo para recuperar tu contraseña.</h3>
      </header>

      <form onSubmit={handleSubmit}>
        <InputForm
          value={valuesBySteps.email}
          placeholder="Correo electrónico"
          type="email"
          name="email"
          errorMessage="Debe ser un formato de email válido."
          required
          onChange={handleChange}
        />

        <Button variant="Primary">Recuperar contraseña</Button>
      </form>
    </main>
  );
};

export default RecoverPasswordPage;
