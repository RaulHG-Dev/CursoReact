import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return [
      {charset: 'utf-8'},
      {title: 'GuitarLA - Nosotros'},
      {viewport: 'width=device-width,initial-scale=1'}
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ];
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="headin">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam quae nobis voluptatibus aperiam recusandae autem id odio incidunt mollitia modi, repellat numquam perferendis eligendi earum maiores officia officiis ea.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet laboriosam quae nobis voluptatibus aperiam recusandae autem id odio incidunt mollitia modi, repellat numquam perferendis eligendi earum maiores officia officiis ea.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros