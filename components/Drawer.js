import React from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MaterialIcons from 'assets/Icons/MaterialIcons';
import ShoppingCartComponent from './ShoppingCart';
import ConnectToRedux from './ConnectToRedux';
import { useRouter } from 'next/router'

const Drawer = ({anchor, open, onClose, ShoppingCart}) => {

    const router = useRouter()

    const shoppingCartArr = Object.values(ShoppingCart);

    const total = shoppingCartArr.reduce((previus, current) => previus + (current.price * current.quantity) , 0);

    return (
        <SwipeableDrawer
            anchor={anchor}
            open={open}
            onClose={onClose}
        >
            <div className="w-full max-w-xl h-full flex flex-col">
                <div className="flex gap-x-2 p-4 w-full justify-between">
                    <div className="flex gap-x-2">
                        {MaterialIcons.Shop}
                        <p>{shoppingCartArr.length} Item</p>
                    </div>
                    <div className="flex items-center cursor-pointer" onClick={onClose}>
                        {MaterialIcons.Close}
                    </div>
                </div>

                <div className="flex-1">
                    {
                        shoppingCartArr.map((product, i) => (
                            <ShoppingCartComponent product={product} key={`product_${i}_${product.name}`} />
                        ))
                    }
                </div>

                <div className="p-4">
                    <div 
                        className="w-full rounded-full bg-black flex items-center justify-between p-1 font-bold pl-5 cursor-pointer"
                        onClick={() => router.push('/checkout')}
                    >
                        <p className="text-white">Checkout</p>
                        <div className="bg-white rounded-full p-3 text-black">
                            <p>$ {total}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </SwipeableDrawer>
    )
}

Drawer.defaultProps = {
    anchor: 'right'
}

export default ConnectToRedux(Drawer, 'ShoppingCart')