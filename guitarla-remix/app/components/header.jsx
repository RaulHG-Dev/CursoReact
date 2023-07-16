import { Link, useLocation } from "@remix-run/react"
import logo from '../../public/img/logo.svg'
import Navegacion from "./navegacion";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/">
          <img src={logo} alt="Imagen logo" className="logo" />
        </Link>
        <Navegacion/>
      </div>
    </header>
  )
}

export default Header