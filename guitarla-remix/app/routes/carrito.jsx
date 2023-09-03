import { useOutletContext } from '@remix-run/react';
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
  const {carrito} = useOutletContext();

  return (
    <main className="contenedor">
        <h1 className="heading">Carrito de Compras</h1>
        <div className="contenido">
            <div className="carrito">
                <h2>Articulos</h2>
                {carrito.length === 0 ? 'Carrito Vacío' : (
                  carrito.map( producto => (
                    <div key={producto.id} className='producto'>
                      <div>
                        <img src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`} />
                      </div>
                      <div>
                        <p className="nombre">{producto.nombre}</p>

                        <p className="precio">
                          $<span> {producto.precio}</span>
                        </p>
                        <p className="subtotal">
                          Subtotal: $ <span>{producto.precio * producto.cantidad}</span>
                        </p>
                      </div>
                    </div>
                  ))
                )}
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