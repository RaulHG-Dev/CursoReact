import Layout from "@/components/layout"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Layout>
        <h1>hola mundo en next</h1>
        <Link href='/nosotros'>Nosotros</Link>
      </Layout>
    </>
  )
}
