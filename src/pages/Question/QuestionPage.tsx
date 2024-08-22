import "./QuestionPage.css";
import { useState } from "react";
import { ButtonBackIcon, HeroLogo, InputForm, Button } from "../../components";

function QuestionPage() {
  const [answer, setAnswer] = useState("");
  // Need to get the user security question for global state
  const [question] = useState("¿Cúal es el nombre de tu primera mascota?");

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
          answer,
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
    <main className="question">
      <ButtonBackIcon goTo="/" />

      <HeroLogo />

      <header>
        <h2>Pregunta de recuperación</h2>
        <h3>{question}</h3>
      </header>

      <form onSubmit={handleSubmit}>
        <InputForm
          value={answer}
          placeholder="Respuesta"
          type="text"
          name="response"
          errorMessage="Debe contener entre 3 y 16 carácteres y no puede contener ningún carácter especial."
          pattern="^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$"
          required
          onChange={handleChange}
        />
        <Button variant="Primary">Verificar respuesta</Button>
      </form>
    </main>
  );
}

export default QuestionPage;
