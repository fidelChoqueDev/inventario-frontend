import "./RecoverPasswordPage.css";
import { useState } from "react";
import { Button, ButtonBackIcon, HeroLogo, InputForm } from "../../components";

const RecoverPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const endpoint = "http:/localhost:8007/user/login/emailrecovery";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el correo electrónico");
      }

      const data = await response.json();
      console.log("Envio exitoso", data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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
          value={`${email}`}
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
