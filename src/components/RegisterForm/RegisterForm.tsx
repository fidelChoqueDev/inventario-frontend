import { useState } from "react";
import InputForm from "../InputForm/InputForm.tsx";
import "./RegisterForm.css";
import Button from "../Button/Button.tsx";
import SecurityQuestion from "../SecurityQuestion/SecurityQuestion.tsx";
import InputPhoneForm from "../InputPhoneForm/InputPhoneForm.tsx";

interface IFormData {
  fullname: string;
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
    fullname: "",
    countryCode: "",
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

    const url = "http://localhost:8050/user/add";

    try {
      const response = await fetch(url, {
        method: "POST",
        mode: 'no-cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: formData.fullname,
          email: formData.email,
          phone: formData.countryCode + formData.phone,
          secretAnswer: formData.secretAnswer,
          secretQuestion: formData.secretQuestion,
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
        name="fullname"
        type="text"
        placeholder="Nombre completo"
        errorMessage="Entre 3 y 32 carácteres y sin símbolos especiales"
        required
        pattern="^(?=.{4,32}$)[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$"
        value={formData.fullname}
        onChange={handleChange}
      />

      <InputPhoneForm
        name="phone"
        placeholder="Introduce tu número"
        required
        pattern="/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm"
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

      <Button variant="Primary">Crear Cuenta</Button>
    </form>
  );
};

export default RegisterForm;
