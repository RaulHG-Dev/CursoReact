import logo from "../public/img/logo.svg"
import Image from "next/image"

export default function Header() {
  return (
    <header>
        <div className="contenedor">
            <Image src={logo.src} width={300} height={40} alt="Imagen logotipo"/>
        </div>
    </header>
  )
}
