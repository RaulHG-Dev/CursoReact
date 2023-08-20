import { getPosts } from "~/models/posts.server"
import { useLoaderData } from "react-router";
import ListadoPosts from "~/components/listado-posts";

export function meta() {
  return [
      {charset: 'utf-8'},
      {title: 'GuitarLA - Nuestro Blog'},
      {viewport: 'width=device-width,initial-scale=1'}
  ]
}

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

const Blog = () => {
  const posts = useLoaderData();

  return (
    <ListadoPosts
        posts={posts}
    />
  )
}

export default Blog