import "./RegisterUserPage.css";
import ButtonBackIcon from "../components/ButtonBackIcon/ButtonBackIcon.tsx";
import HeroLogo from "../components/HeroLogo/HeroLogo.tsx";
import RegisterForm from "../components/RegisterForm/RegisterForm.tsx";

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
