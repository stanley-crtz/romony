import ConnectToRedux from 'components/ConnectToRedux'
import ShoppingCartComponent from 'components/ShoppingCart'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Checkout = ({ ShoppingCart, setShoppingCart }) => {

    const router = useRouter();

    const shoppingCartArr = Object.values(ShoppingCart);

    const total = shoppingCartArr.reduce((previus, current) => previus + (current.price * current.quantity), 0);

    const [paymentInfo, setPaymentInfo] = useState({
        name: '',
        phone: '',
        address: '',
        email: '',
        metodo_envio: 'domicilio',
        metodo_pago: 'money',
        cvc: '',
        month: '',
        year: '',
        nameCard: '',
        number: '',
    })

    const handleChange = ({ target: { name, value } }) => setPaymentInfo({ ...paymentInfo, [name]: value });

    const handlePayment = () => {
        router.push('/')
        setShoppingCart({})
    }

    return (
        <>
            <Head>
                <title>Romony | Shops</title>
            </Head>
            <div className="flex p-6 pt-24">
                <div className="flex-1">
                    {
                        shoppingCartArr.map((product, i) => (
                            <ShoppingCartComponent product={product} key={`product_${i}_${product.name}`} />
                        ))
                    }
                </div>
                <div className="flex-1 ml-4 sticky top-16 formCheckout overflow-y-auto">
                    <form className="grid grid-cols-1">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" className="inputForm" id="name" name="name" value={paymentInfo.name} onChange={handleChange} />
                        <label htmlFor="tel">Telefono</label>
                        <input type="tel" className="inputForm" id="tel" name="phone" value={paymentInfo.phone} onChange={handleChange} />
                        <label htmlFor="address">Direccion</label>
                        <input type="text" className="inputForm" id="address" name="address" value={paymentInfo.address} onChange={handleChange} />
                        <label htmlFor="email">Correo</label>
                        <input type="email" className="inputForm" id="email" name="email" value={paymentInfo.email} onChange={handleChange} />
                        <label>Metodos de envio</label>
                        <div className="flex">
                            <select name="metodo_envio" className="inputForm w-full" onChange={handleChange} value={paymentInfo.metodo_envio}>
                                <option value="departamental">Departamental</option>
                                <option value="domicilio">Domicilio</option>
                            </select>
                        </div>
                        <label>Metodos de pago</label>
                        <div className="flex">
                            <select name="metodo_pago" className="inputForm w-full" onChange={handleChange} value={paymentInfo.metodo_pago}>
                                <option value="money">Efectivo</option>
                                <option value="card">Tarjeta</option>
                            </select>
                        </div>
                        {
                            paymentInfo.metodo_pago === "card" && (
                                <div className="p-5">
                                    <label>Informacion de la tarjeta</label>
                                    <div className="grid grid-cols-1 gap-3 mt-4">
                                        <input type="text" placeholder="Card Number" className="inputForm" name="number" value={paymentInfo.number} onChange={handleChange} />
                                        <input type="text" placeholder="Nombre de la tarjeta" className="inputForm" name="nameCard" value={paymentInfo.nameCard} onChange={handleChange} />
                                        <div className="flex w-full">
                                            <input type="text" className="inputForm flex-1 mr-2" placeholder="Mes" name="month" value={paymentInfo.month} onChange={handleChange} />
                                            <input type="text" className="inputForm flex-1" placeholder="Año" name="year" value={paymentInfo.year} onChange={handleChange} />
                                        </div>
                                        <input type="text" placeholder="CVC" className="inputForm" name="cvc" value={paymentInfo.cvc} onChange={handleChange} />
                                    </div>
                                </div>
                            )
                        }
                        <div
                            className="w-full mt-4 rounded-full bg-black flex items-center justify-between p-1 font-bold pl-5 cursor-pointer"
                            onClick={handlePayment}
                        >
                            <p className="text-white">Pagar</p>
                            <div className="bg-white rounded-full p-3 text-black">
                                <p>$ {total}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ConnectToRedux(Checkout, 'ShoppingCart')