import MaterialIcons from 'assets/Icons/MaterialIcons';
// import TCPdf from 'public/terminos_y_condiciones.pdf'
import React from 'react'

const Footer = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <footer>
            <div className="mb-2 p-2 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
                <div className="flex flex-col gap-y-2 justify-start">
                    <p className="font-bold">Contacto</p>
                    <div className="flex gap-x-4 pl-4">
                        <a href="https://www.facebook.com/Romony-101749025027405" target="_blank" rel="noreferrer">{MaterialIcons.Facebook}</a>
                        <a href="https://www.instagram.com/romony.sv/" target="_blank" rel="noreferrer">{MaterialIcons.Instagram}</a>
                    </div>
                </div>
                <div className="flex flex-col gap-y-2 justify-start">
                    <p className="font-bold">Informacion</p>
                    <ul className="flex flex-col gap-y-3 pl-4">
                        <li>¿Quienes somos?</li>
                        <li><a href={"#"}>Terminos y condiciones</a></li>
                    </ul>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-2 justify-start">
                    <p className="font-bold">ROMONY</p>
                    <p>Suscribete y recibe notificaciones sobre nuevos productos</p>
                    <div className="flex shadow rounded-full ml-4 w-full">
                        <input type="email" placeholder="romony@gmail.com" className="bg-transparent p-2 outline-none flex-1 pl-5 w-full" />
                        <input type="submit" value="Suscribete" className="bg-black text-white rounded-full px-5" />
                    </div>
                </form>
            </div>
            <div className="text-center bg-gray-100 p-2">
                &copy; 2022 - Romony SV
            </div>
        </footer>
    )
}

export default Footer