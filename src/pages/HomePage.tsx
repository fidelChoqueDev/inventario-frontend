import { Link } from "react-router-dom";
import "./HomePage.css";
import HeroLogo from "../components/HeroLogo/HeroLogo";

const HomePage = () => {
  return (
    <main className="home__container">
      <HeroLogo />

      <header className="home__header">
        <h1 className="home__title">Bienvenido</h1>
        <h3 className="home__subtitle">
          Gestiona tu inventario de manera precisa y eficiente
        </h3>
      </header>

      <nav className="home__nav">
        <Link className="link link--light" to="/register">
          Registrarse
        </Link>
        <Link className="link link--dark" to="/login">
          Iniciar sesión
        </Link>
      </nav>
    </main>
  );
};

export default HomePage;
