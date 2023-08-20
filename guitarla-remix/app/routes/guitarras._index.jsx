import { getGuitarras } from "~/models/guitarras.server";
import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "~/components/listado-guitarras";

export function meta() {
  return [
      {charset: 'utf-8'},
      {title: 'GuitarLA - Tienda de Guitarras'},
      {viewport: 'width=device-width,initial-scale=1'}
  ]
}

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

const Tienda = () => {
  const guitarras = useLoaderData();
  
  return (
    <ListadoGuitarras
      guitarras={guitarras}
    />
  )
}

export default Tienda
