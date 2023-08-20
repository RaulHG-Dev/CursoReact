import { Outlet } from "@remix-run/react";
import styles from "~/styles/guitarras.css"

export function links() {
  return [{
    rel: 'stylesheet',
    href: styles
  }]
}

const Tienda = () => {
  // guitarras.map(i => console.log(i))
  return (
    <main className="contenedor">
      <Outlet/>
    </main>
  )
}

export default Tienda
