import React from 'react'

const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre:&nbsp;
            <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario:&nbsp;
            <span className="font-normal normal-case">Raul</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Email:&nbsp;
            <span className="font-normal normal-case">correo@corre.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta:&nbsp;
            <span className="font-normal normal-case">12 de agosto de 2023</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Síntomas:&nbsp;
            <span className="font-normal normal-case">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias eius facere pariatur sapiente aspernatur. Tempora, obcaecati ipsum consequuntur provident officiis sint illum, vero distinctio, deserunt earum tenetur dignissimos quos eaque.</span>
        </p>
    </div>
  )
}

export default Paciente