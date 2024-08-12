import { useState } from "react";
import ButtonBackIcon from "../components/ButtonBackIcon/ButtonBackIcon";
import InputForm from "../components/InputForm/InputForm";
import Button from "../components/Button/Button";

function QuestionPage() {
  const [answer, setAnswer] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const endpoint = "http://api.com/user/recovery_password";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
           answer 
        }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar la respuesta");
      }

      const data = await response.json();
      console.log("Respuesta correcta", data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <main>
      <ButtonBackIcon goto="/" />
      <img src="/public/clean-box.png" alt="Box" />

      <div>
        <h2>Pregunta de recuperación</h2>
        <h3>¿Cúal es el nombre de tu primera mascota?</h3>
      </div>

      <form onSubmit={handleSubmit}>
        <InputForm
          value={`${answer}`}
          placeholder="Respuesta"
          type="text"
          name="response"
          errorMessage="Debe contener entre 3 y 16 carácteres y no puede contener ningún carácter especial."
          pattern="^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$"
          required
          handleChange={handleChange}
        />
        <Button variant="Primary">Verificar respuesta</Button>
      </form>
    </main>
  );
}

export default QuestionPage;
