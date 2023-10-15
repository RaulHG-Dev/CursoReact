import Layout from "@/components/layout"
import Image from "next/image"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre nosotros, guitarLA, tienda de música"
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum non libero at pretium. Sed egestas nibh ut ipsum mollis rhoncus. Mauris condimentum, est id placerat elementum, augue arcu commodo urna, quis aliquam augue orci in ex. Quisque consectetur, lectus non lobortis viverra, nisi augue luctus lorem, ac tincidunt lacus lectus ac lectus. Integer id pretium tortor, id viverra massa. Nunc efficitur rutrum tellus non mattis.
            </p>
            <p>
              Phasellus pharetra auctor justo sodales aliquet. Etiam in nisl id magna mollis dictum. Mauris porttitor magna non mauris eleifend, egestas gravida nisi vestibulum. Suspendisse hendrerit pellentesque quam eu lobortis. Nulla quis metus ut tortor feugiat facilisis at elementum nibh. Cras consequat ipsum quis magna sagittis, efficitur placerat erat ornare. Donec id imperdiet sem. Sed viverra feugiat sagittis. In ut orci posuere, faucibus nisl ut, ultrices ante.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}
