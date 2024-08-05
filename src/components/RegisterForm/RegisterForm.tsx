import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Nombre Completo",
      errorMessage:
        "Debe contener entre 3 y 16 carácteres y no puede contener ningún carácter especial.",
      required: true,
      pattern: "^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$",
    },
    {
      id: 2,
      name: "phone",
      type: "tel",
      placeholder: "Télefono",
      errorMessage: "Solo debe contener números.",
      pattern: "^[0-9]{9,12}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Correo electrónico",
      errorMessage: "Debe ser un formato de email válido.",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Contraseña",
      errorMessage:
        "Debe contener entre 8 y 20 carácteres y incluir una mayúscula, minúsculas, números y algún carácter especial.",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirmar contraseña",
      errorMessage: "Las contraseñas no coinciden.",
      required: true,
      pattern: formData.password,
    },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const localEndpoint = "http://localhost:5000/users";
    // const testEndpoint = 'http://api.com/user/register'

    try {
      const response = await fetch(localEndpoint, {
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
      {inputs.map((input) => (
        <InputForm
          key={input.id}
          {...input}
          value={formData[input.name]}
          handleChange={handleChange}
        />
      ))}

      <button>Crear Cuenta</button>
    </form>
  );
};

export default RegisterForm;
