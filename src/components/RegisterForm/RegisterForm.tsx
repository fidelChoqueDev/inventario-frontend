import { useState } from "react";
import InputForm from "../InputForm/InputForm.tsx";
import "./RegisterForm.css";
import Button from "../Button/Button.tsx";
import SecurityQuestion from "../SecurityQuestion/SecurityQuestion.tsx";
import InputPhoneForm from "../InputPhoneForm/InputPhoneForm.tsx";
import { useFetch } from "../../hooks/useFetch.ts";
import InputPasswordForm from "../InputPasswordForm/InputPasswordForm.tsx";

interface IFormData {
  fullName: string;
  countryCode: string;
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
  "¿Cúal es tu manga favorito",
  "¿Cúal es tu libro favorito",
  "¿Cúal es tu pasatiempo favorito",
];

const RegisterForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    fullName: "",
    countryCode: "",
    phone: "",
    email: "",
    secretQuestion: "Cúal es el nombre de tu mascota?",
    secretAnswer: "",
    password: "",
    confirmPassword: "",
  });

  const url = "http://localhost:8007/user/add";

  const { submit } = useFetch(url);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleQuestionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({ ...formData, secretQuestion: event.target.value });
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phone: event.target.value });
  };

  const handleCountryCodeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({ ...formData, countryCode: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await submit({
      body: {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.countryCode + formData.phone,
        secretAnswer: formData.secretAnswer,
        secretQuestion: formData.secretQuestion,
        password: formData.password,
        role: "user",
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        name="fullName"
        type="text"
        placeholder="Nombre completo"
        errorMessage="Entre 3 y 32 carácteres y sin símbolos especiales"
        required
        pattern="^(?=.{4,32}$)[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$"
        value={formData.fullName}
        onChange={handleChange}
      />

      <InputPhoneForm
        name="phone"
        placeholder="Introduce tu número"
        required
        value={formData.phone}
        onChange={handlePhoneChange}
        errorMessage="Número no válido"
        onCountryChange={handleCountryCodeChange}
        countryCode={formData.countryCode}
      />

      <InputForm
        name="email"
        type="email"
        placeholder="Correo electrónico"
        errorMessage="Debe ser un formato de correo electrónico válido"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <SecurityQuestion
        questionOptions={questionOptions}
        selectedQuestion={formData.secretQuestion}
        onQuestionChange={handleQuestionChange}
        answer={formData.secretAnswer}
        onAnswerChange={handleChange}
        errorMessage="Debe contener entre 3 y 50 carácteres."
      />

      <InputPasswordForm
        name="password"
        placeholder="Inserta tu contraseña"
        errorMessage="Al menos 8 caracteres, mayúscula, minúscula y un número."
        required
        pattern="^{8,32}$"
        value={formData.password}
        onChange={handleChange}
      />

      <InputPasswordForm
        name="confirmPassword"
        placeholder="Confirma tu contraseña"
        errorMessage="Las contraseñas deben coincidir"
        required
        pattern={formData.password}
        value={formData.confirmPassword}
        onChange={handleChange}
      />

      <Button variant="Primary">Crear Cuenta</Button>
    </form>
  );
};

export default RegisterForm;
