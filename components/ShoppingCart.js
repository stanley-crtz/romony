import MaterialIcons from 'assets/Icons/MaterialIcons'
import React from 'react'
import ConnectToRedux from './ConnectToRedux'

const ShoppingCart = ({product, ShoppingCart: reduxShoppingCart, setShoppingCart}) => {

    const handleAddProduct = () => {
        setShoppingCart({
            ...reduxShoppingCart,
            [product.id]: {
                ...product,
                quantity: product.quantity + 1
            }
        })
    }

    const handleDecrementProduct = () => {

        if (product.quantity - 1 >= 1) {
            setShoppingCart({
                ...reduxShoppingCart,
                [product.id]: {
                    ...product,
                    quantity: product.quantity - 1
                }
            })
        }
    }

    const handleRemoveProduct = () => {
        const copyObject = {...reduxShoppingCart};
        delete copyObject[product.id];
        setShoppingCart(copyObject);
        console.log(copyObject);
    }

    return (
        <div className="flex border-gray-300 border-t-2 border-b-2 p-4">
            <div className="flex justify-between flex-col text-center h-30 bg-gray-200 rounded-full items-center mr-10">
                <p className="cursor-pointer p-2" onClick={handleAddProduct}>+</p>
                <p className="flex-1 flex items-center">{product.quantity}</p>
                <p className="cursor-pointer p-2" onClick={handleDecrementProduct}>-</p>
            </div>
            <div className="grid grid-cols-3 items-center gap-3">
                <img
                    src={product.color.pictures[0]}
                    alt="producto"
                    className="h-48"
                />
                <div className="text-sm flex flex-col gap-y-2">
                    <p className="font-bold">{product.name}</p>
                    <p>$ {product.price}</p>
                    {/* <p className="text-xs">{product.quantity} pc(s)</p> */}
                </div>
                <div className="flex justify-center">
                    <p className="font-bold">$ {product.price * product.quantity}</p>
                </div>
            </div>
            <div className="flex items-center" onClick={handleRemoveProduct}>
                {MaterialIcons.Close}
            </div>
        </div>
    )
}

export default ConnectToRedux(ShoppingCart, 'ShoppingCart')