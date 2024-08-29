import {Link, NavLink} from 'react-router-dom'
import style from "./SideBar.module.css"

export default function SideBar() {
  return (
    <div className={style.sideBar}>
      <ul>
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li>
          <Link to="/">Clientes</Link>
        </li>
        <li>
          <Link to="/">Proveedores</Link>
        </li>
        <li>
          <Link to="/">Productos</Link>
        </li>
      </ul>SideBar</div>
  )
}
