import "./QuestionPage.css";
import { useContext } from "react";
import { ButtonBackIcon, HeroLogo, InputForm, Button } from "../../components";
import { RecoveryPasswordContext } from "../../context/RecoveryPasswordContext";
import { useNavigate } from "react-router-dom";

const endpoint = "http://localhost:8007/user/security/answer";

function QuestionPage() {
  const { valuesBySteps, updateValuesBySteps } = useContext(
    RecoveryPasswordContext,
  );
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateValuesBySteps("answer", event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const paramsString = new URLSearchParams({
      email: valuesBySteps.email,
      answer: valuesBySteps.answer,
    });

    const url = `${endpoint}?${paramsString.toString()}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error al enviar la respuesta");
      }
      const data = await response.json();
      console.log("Respuesta correcta", data);
      if (data) {
        navigate("/newpassword");
      }
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
        <h3>{valuesBySteps.question}</h3>
      </header>

      <form onSubmit={handleSubmit}>
        <InputForm
          value={valuesBySteps.answer}
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
