import Button from "../components/Button/Button";
import ButtonBackIcon from "../components/ButtonBackIcon/ButtonBackIcon";
import InputPasswordForm from "../components/InputPasswordForm/InputPasswordForm";

const NewPasswordPage = () => {
  return (
    <main>
      <ButtonBackIcon goTo="/" />
      <img src="/clean-box.png" alt="Box" />
      <div>
        <h2>Restablecer la contraseña</h2>
        <h3>Ingresa la nueva contraseña</h3>
      </div>

      <form>
        <InputPasswordForm placeholder="Contraseña" />
        <InputPasswordForm placeholder="Repetir la contraseña" />

        <Button variant="Primary">Establecer contraseña</Button>
      </form>
    </main>
  );
};

export default NewPasswordPage;
