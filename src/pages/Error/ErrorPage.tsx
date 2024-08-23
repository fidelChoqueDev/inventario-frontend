import "./ErrorPage.module.css";
import { ButtonBackIcon, HeroLogo } from "../../components";

const ErrorPage = () => {
  return (
    <main>
      <ButtonBackIcon goTo="/" />
      <img src="/public/clean-box.png" alt="Caja vacia" />
      <h1>Lo sentimos, hemos perdido esta página.</h1>
    </main>
  );
};

export default ErrorPage;
