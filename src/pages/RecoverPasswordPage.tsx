import "./RecoverPasswordPage.css";
import { useState } from "react";
import Button from "../components/Button/Button";
import ButtonBackIcon from "../components/ButtonBackIcon/ButtonBackIcon";
import InputForm from "../components/InputForm/InputForm";

const RecoverPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const endpoint = 'http://api.com/user/recovery_password'

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
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
    setEmail(event.target.value)
  }

  return (
    <main>
      <ButtonBackIcon goTo="/login" />
      <img src="/clean-box.png" alt="Box" />

      <div>
        <h2>Recuperación de contraseña</h2>
        <h3>Ingresa tu correo para recuperar tu contraseña.</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <InputForm
          value={`${email}`}
          placeholder="Correo electrónico"
          type="email"
          name="email"
          errorMessage="Debe ser un formato de email válido."
          required
          handleChange={handleChange}
        />

        <Button className="btn btn-dark" content="Recuperar contraseña" />
      </form>
    </main>
  );
};

export default RecoverPasswordPage;
