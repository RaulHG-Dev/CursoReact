import {useRouter} from "next/router"

export default function Producto({guitarra}) {
    // Acceder a la url dinámica
    const router = useRouter();
    // console.log(router)
    return ( 
        <div>[url]</div>
    )
}

export async function getServerSideProps({query: {url}}) {

    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const {data: guitarra} = await respuesta.json();
    console.log(data)
    return {
        props: {
            guitarra
        }
    }
}