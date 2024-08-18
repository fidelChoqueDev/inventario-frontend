import { useState } from "react";
import InputForm from "../InputForm/InputForm.tsx";
import "./RegisterForm.css";
import Button from "../Button/Button.tsx";
import SecurityQuestion from "../SecurityQuestion/SecurityQuestion.tsx";

interface IFormData {
  fullname: string;
  phone: string;
  email: string;
  secretQuestion: string;
  secretAnswer: string;
  password: string;
  confirmPassword: string;
}

const questionOptions = [
  "¿Cúal es el nombre de tu mascota?",
  "¿Cúal es el nombre de tu primer colegio?",
  "¿Cúal es tu comida favorita",
];

const RegisterForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    fullname: "",
    phone: "",
    email: "",
    secretQuestion: "Cúal es el nombre de tu mascota?",
    secretAnswer: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleQuestionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({...formData, secretQuestion: event.target.value})
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = "http://localhost:5000/users";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullname,
          email: formData.email,
          password: formData.password,
          role: "user",
        }),
      });

      if (!response.ok) {
        throw new Error("Error en el registro");
      }

      const data = await response.json();

      console.log("Registro exitoso", data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        key="1"
        name="fullname"
        type="text"
        placeholder="Nombre completo"
        errorMessage="Debe contener entre 3 y 16 carácteres y no puede contener ningún carácter especial."
        required
        pattern="^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$"
        value={formData.fullname}
        onChange={handleChange}
      />

      <InputForm
        key="2"
        name="phone"
        type="tel"
        placeholder="Télefono"
        errorMessage="Solo debe contener números"
        required
        pattern="^[0-9]{9,12}$"
        value={formData.phone}
        onChange={handleChange}
      />

      <InputForm
        key="3"
        name="email"
        type="email"
        placeholder="Correo electrónico"
        errorMessage="Debe ser un formato de correo electrónico válido"
        required
        pattern=""
        value={formData.phone}
        onChange={handleChange}
      />

      <SecurityQuestion
        questionOptions={questionOptions}
        selectedQuestion={formData.secretQuestion}
        onQuestionChange={handleQuestionChange}
        answer={formData.secretAnswer}
        onAnswerChange={handleChange}
        errorMessage="Debe tener una respuesta"
      />

      <Button variant="Primary">Crear Cuenta</Button>
    </form>
  );
};

export default RegisterForm;
