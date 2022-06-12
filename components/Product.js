/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Carousel from './Carousel';
import ConnectToRedux from './ConnectToRedux';
import Modal from './Modal';

const Product = ({colors, categories, description, name, id, price, sizes, subCategory, available, setShoppingCart, ShoppingCart}) => {

    const [color, setColor] = useState({
        color: 0,
        image: 0
    })

    const [product, setProduct] = useState({
        size: '',
        color: ''
    })

    const [images, setImages] = useState([])

    const [showModal, setShowModal] = useState(false);

    const handleStateModal = () => setShowModal(!showModal);

    const handleAddShoppingCart = () => {
        setShoppingCart({
            ...ShoppingCart,
            [id]: {
                ...product,
                name,
                description,
                categories,
                color: colors[color.color],
                quantity: 1,
                price,
                id
            }
        })
        handleStateModal()
    }

    const handleClickSize = (size) => setProduct({...product, size});

    const handleClickColor = (color) => {
        setColor({color, image: 0});
        setProduct({...product, color});
    }

    useEffect(() => {
        const showImages = colors[color.color].pictures.map((picture) => ({image: picture}))
        setImages(showImages);
    }, [color.color])

    useEffect(() => {
        const getRamdom = (max) => {
            return Math.floor(Math.random() * max);
        }
        const colorIndex = getRamdom(colors.length - 1);
        const imageIndex = getRamdom(colors[colorIndex].pictures.length - 1);

        setColor({color: colorIndex, image: imageIndex});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <article 
                className="w-full text-center flex flex-col gap-y-2 p-3 shadow rounded-lg"
                onClick={handleStateModal}
            >
                <img
                    src={colors[color.color].pictures[color.image]}
                    alt="producto"
                    className="w-full"
                />
                <h4>{name}</h4>
                <p>$ {price}</p>
            </article>
            <Modal open={showModal} onClose={handleStateModal} className="w-3/4 h-3/4">
                <div className="grid grid-cols-2 max-h-full overflow-y-auto">
                    <Carousel images={images} />
                    <div className="flex flex-col gap-y-3">
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <div className="h-20">
                            <p>{description}</p>
                        </div>
                        
                        <div>
                            <p>Tallas:</p>
                            <div className="p-3 grid grid-cols-4 gap-2">
                                {
                                    sizes.map((size, i) => (
                                        <div
                                            className={
                                                [
                                                    "border-2 rounded-full text-center cursor-pointer hover:bg-gray-200",
                                                    product.size === size && "bg-gray-200"
                                                ].join(" ")
                                            } 
                                            key={`${size}_${i}`}
                                            onClick={() => handleClickSize(size)}
                                        >
                                            <label className="cursor-pointer">{size}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <p>Colores:</p>
                            <div className="p-3 grid grid-cols-4 gap-2">
                                {
                                    colors.map((color, i) => (
                                        <div
                                            className="border-2 rounded-full text-center cursor-pointer shadow h-7 w-7" 
                                            key={`${color.color}_${i}`}
                                            style={{background: color.color}}
                                            onClick={() => handleClickColor(i)}
                                       />
                                    ))
                                }
                            </div>
                        </div>
                        <p className="font-bold text-2xl">$ {price}</p>
                        <div className="flex justify-between gap-x-2">
                            <div className="flex-1">
                                <button 
                                    className="bg-black text-white rounded-full w-full h-12"
                                    onClick={handleAddShoppingCart}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                            <div className="flex items-center">
                                <p>{available} disponibles</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-3 pl-3 border-t-2 pt-2">
                            <label> Categoria: {categories.join(', ')} </label>
                            <label> Sub-Categoria: {subCategory} </label>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ConnectToRedux(Product, 'ShoppingCart')