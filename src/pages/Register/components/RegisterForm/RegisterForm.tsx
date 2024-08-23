import { useEffect, useState } from "react";
import {
  InputForm,
  Button,
  InputPhoneForm,
  PasswordInputWithRequirements,
  SecurityQuestion,
  Checkbox,
  CustomLink,
  ErrorMessage,
} from "../../../../components";
import { useFetch } from "../../../../hooks/useFetch.ts";
import "./RegisterForm.css";

interface IFormData {
  fullName: string;
  countryCode: string;
  phone: string;
  email: string;
  secretQuestion: string;
  secretAnswer: string;
  password: string;
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
    countryCode: "+1",
    phone: "",
    email: "",
    secretQuestion: "Cúal es el nombre de tu mascota?",
    secretAnswer: "",
    password: "",
  });

  const url = "http://localhost:8007/user/add";

  const { submit } = useFetch(url);
  const [terms, setTerms] = useState(false);
  const [errorTerms, setErrorTerms] = useState(false);
  const onClick = () => {
    if (!terms) {
      setErrorTerms(true);
    } else {
      setErrorTerms(false);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleQuestionChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, secretQuestion: event.target.value });
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phone: event.target.value });
  };

  const handleCountryCodeChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
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

  useEffect(() => {}, []);

  return (
    <form className="c-form-register" onSubmit={handleSubmit}>
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

      <PasswordInputWithRequirements
        passwordValue={formData.password}
        onChange={handleChange}
      />
      <div className="c-form-register__terms">
        <Checkbox
          clickable={true}
          content={
            <>
              {" "}
              Acepto los <CustomLink to="#">Términos y Condiciones</CustomLink>,
              la <CustomLink to="#">Política de Privacidad</CustomLink> y
              autorizo el tratamiento de mis datos personales.
            </>
          }
          name="terms"
          isChecked={terms}
          onChange={() => setTerms(!terms)}
          required={true}
        />
        <ErrorMessage visibility={errorTerms && !terms}>
          Debes aceptar los términos y condiciones
        </ErrorMessage>
      </div>
      <Button onClick={onClick} variant="Primary">
        Crear Cuenta
      </Button>
    </form>
  );
};

export default RegisterForm;
