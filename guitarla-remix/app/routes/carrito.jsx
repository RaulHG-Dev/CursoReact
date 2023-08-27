import styles from '~/styles/carrito.css';

export function links() {
    return [{
        rel: 'stylesheet',
        href: styles
    }];
}

export function meta({ data }) {
    return [
      { charset: "utf-8" },
      { title: `GuitarLA - Carrito de Compras` },
      { viewport: "width=device-width,initial-scale=1" },
    ];
  }

const Carrito = () => {
  return (
    <main className="contenedor">
        <h1 className="heading">Carrito de Compras</h1>
        <div className="contenido">
            <div className="carrito">
                <h2>Articulos</h2>
            </div>
            <aside className="resumen">
                <h3>Resumen del Pedido</h3>
                <p>Total a pagar: $</p>
            </aside>
        </div>
    </main>
  )
}

export default Carrito