import { formatearFecha } from "~/utils/helpers";
import { getPost } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";

export function meta({ data }) {
  if (!data || Object.keys(data).length === 0) {
    return [{ title: "GuitarLA - Entrada no encontrada" }];
  }

  return [
    { charset: "utf-8" },
    { title: `GuitarLA - ${data.data[0].attributes.titulo}` },
    { viewport: "width=device-width,initial-scale=1" },
  ];
}

export async function loader({params}) {
    const { postsUrl } = params;
    const post = await getPost(postsUrl);
    if(post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        });
    }
    return post
}

function Posts() {
  const post = useLoaderData();
	const {titulo, contenido, imagen, publishedAt} = post?.data[0]?.attributes;
  return (
    <article className="post mt-3">
			<img src={imagen.data.attributes.url} alt={`imagen blog ${titulo}`} className="imagen" />
			<div className="contenido">
				<h3>{titulo}</h3>
				<p className="fecha">{formatearFecha(publishedAt)}</p>
				<p className="texto">{contenido}</p>
			</div>
		</article>
  )
}

export default Posts