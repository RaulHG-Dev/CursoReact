import { useLoaderData, useRouteError, Link } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";
import styles from "~/styles/guitarras.css";

export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);

  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra No Encontrada",
      data: {}
    });
  }
  return guitarra;
}

/** MANEJO DE ERRORES */
export function ErrorBoundary() {
  const error = useRouteError();
  console.log(error)
  return (
    <div>
      <p className="error">{error.status} {error.statusText}</p>
      <Link to="/" className="error-enlace">
        Regresar a página principal
      </Link>
    </div>
  );
}

export function meta({ data }) {
  if (!data || Object.keys(data).length === 0) {
    return [{ title: "GuitarLA - Guitarra No Encontrada" }];
  }

  return [
    { charset: "utf-8" },
    { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
    { viewport: "width=device-width,initial-scale=1" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

const Guitarra = () => {
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

  return (
    <main className="contenedor guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  );
};

export default Guitarra;