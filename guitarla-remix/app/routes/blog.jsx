import { getPosts } from "~/models/posts.server"
import { useLoaderData } from "react-router";
import Post from "~/components/post";
import styles from "~/styles/blog.css"

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ];
}

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
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className="blog"> 
        {posts.map(post => (
          <Post
            key={post.id}
            post={post.attributes}
          />
        ))}
      </div>
    </main>
  )
}

export default Blog