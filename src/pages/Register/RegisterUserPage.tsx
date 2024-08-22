import "./RegisterUserPage.css";
import { ButtonBackIcon, HeroLogo } from "../../components/index.ts";
import RegisterForm from "./components/RegisterForm/RegisterForm.tsx";

const CreateUserPage = () => {
  return (
    <main className="register">
      <ButtonBackIcon goTo="/" />
      <HeroLogo />

      <h1 className="register__title">Registro</h1>

      <RegisterForm />
    </main>
  );
};

export default CreateUserPage;
