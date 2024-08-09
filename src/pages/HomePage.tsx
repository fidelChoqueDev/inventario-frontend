import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  return (
    <main>
      <img src="/clean-box.png" alt="Box" />
      <h1>Bienvenido a Zaiko</h1>
      <h2>Gestiona tu inventario de manera precisa y eficiente</h2>

<nav>
      <Link className='btn btn-light' to='/register'>Registrarse</Link>
      <Link className='btn btn-dark' to='/login'>Iniciar sesión</Link>
</nav>
    </main>
  )
}

export default HomePage