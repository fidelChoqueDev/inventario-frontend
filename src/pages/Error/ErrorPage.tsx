import "./ErrorPage.module.css";
import { ButtonBackIcon, HeroLogo } from "../../components";

const ErrorPage = () => {
  return (
    <main>
      <ButtonBackIcon goTo="/" />
      <HeroLogo />
      <h1>Lo sentimos, hemos perdido esa página.</h1>
    </main>
  );
};

export default ErrorPage;
