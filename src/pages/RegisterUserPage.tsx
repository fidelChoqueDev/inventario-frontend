import ButtonBackIcon from "../components/ButtonBackIcon/ButtonBackIcon.tsx"
import RegisterForm from "../components/RegisterForm/RegisterForm.tsx"

const CreateUserPage = () => {
  return (
    <main>
      <ButtonBackIcon goTo="/"/>
      <img src="/clean-box.png" alt="Box" />
      <RegisterForm/>
    </main>
  )
}

export default CreateUserPage